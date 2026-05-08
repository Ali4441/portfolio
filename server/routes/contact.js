import express from "express";
import { body, validationResult } from "express-validator";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

// Validation rules
const contactValidation = [
  body("name")
    .trim()
    .notEmpty().withMessage("Name is required")
    .isLength({ max: 100 }).withMessage("Name is too long"),
  body("email")
    .trim()
    .isEmail().withMessage("Valid email is required")
    .normalizeEmail(),
  body("message")
    .trim()
    .notEmpty().withMessage("Message is required")
    .isLength({ min: 10, max: 2000 }).withMessage("Message must be 10–2000 characters"),
];

// Optional: send email notification
const sendEmailNotification = async (contact) => {
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_TO:", process.env.EMAIL_TO);
  console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log("Email config missing");
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `New Portfolio Contact from ${contact.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px;">
          <h2 style="color: #CBFF00; background: #0a0a0a; padding: 16px;">
            New Message — Robert Garcia Portfolio
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; color: #666; font-size: 12px;">Name</td>
                <td style="padding: 8px; font-weight: bold;">${contact.name}</td></tr>
            <tr><td style="padding: 8px; color: #666; font-size: 12px;">Email</td>
                <td style="padding: 8px;">${contact.email}</td></tr>
            <tr><td style="padding: 8px; color: #666; font-size: 12px; vertical-align: top;">Message</td>
                <td style="padding: 8px; line-height: 1.6;">${contact.message}</td></tr>
          </table>
        </div>
      `,
    });
  } catch (err) {
    console.error("Email notification failed:", err.message);
    // Don't throw — email failure shouldn't fail the API response
  }
};

// POST /api/contact — Submit contact form
router.post(
  "/",
  contactValidation,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
      });
    }

    try {
      const { name, email, message } = req.body;
      const ipAddress = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

      const contact = await Contact.create({ name, email, message, ipAddress });

      console.log(contact);

      // Fire-and-forget email notification
      await sendEmailNotification(contact);
      res.status(201).json({
        success: true,
        message: "Thank you! Your message has been received.",
        id: contact._id,
      });



    } catch (err) {
      console.error("Contact POST error:", err);
      res.status(500).json({
        success: false,
        message: "Server error. Please try again later.",
      });
    }
  }
);





















// GET /api/contact — Get all messages (protected in production — add auth middleware)
router.get("/",
  async (req, res) => {
    try {
      const messages = await Contact.find()
        .sort({ createdAt: -1 })
        .select("-ipAddress");
      res.json({ success: true, count: messages.length, data: messages });
    } catch (err) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  });


// PATCH /api/contact/:id — Update message status
router.patch("/:id", async (req, res) => {
  try {
    const { status } = req.body;
    if (!["new", "read", "replied"].includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status" });
    }
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!contact) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data: contact });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
