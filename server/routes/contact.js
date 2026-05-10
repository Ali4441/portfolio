import express from "express";
import { body, validationResult } from "express-validator";
import Contact from "../models/Contact.js";
import { Resend } from "resend";

const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Validation Rules ─────────────────────────────────────────────
const contactValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ max: 100 })
    .withMessage("Name is too long"),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Valid email is required")
    .normalizeEmail(),

  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required")
    .isLength({ min: 10, max: 2000 })
    .withMessage("Message must be 10–2000 characters"),
];

// ─── Send Email Notification ──────────────────────────────────────


const sendEmailNotification = async (contact) => {
  try {

    if (!process.env.RESEND_API_KEY || !process.env.EMAIL_TO) {
      return;
    }

    const response = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.EMAIL_TO,
      subject: `New Portfolio Contact from ${contact.name}`,
      html: `
         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">

          <h2 style="
            background:#0a0a0a;
            color:#CBFF00;
             padding:16px;
            border-radius:8px;
       ">
             New Portfolio Message
           </h2>

           <div style="
             border:1px solid #e5e5e5;
             border-radius:8px;
            padding:20px;
           margin-top:16px;
         ">

           <p>
               <strong>Name:</strong><br/>
               ${contact.name}
             </p>

             <p>
               <strong>Email:</strong><br/>
               ${contact.email}
             </p>

             <p>
               <strong>Message:</strong><br/>
               ${contact.message}
             </p>

           </div>
         </div>
       `,
    });
  } catch (err) {
    console.error(err);
  }
};

// ─── POST /api/contact ────────────────────────────────────────────
router.post("/", contactValidation, async (req, res) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map((e) => ({
        field: e.path,
        message: e.msg,
      })),
    });
  }

  try {
    const { name, email, message } = req.body;

    const ipAddress =
      req.headers["x-forwarded-for"] ||
      req.socket.remoteAddress;

    // Save to MongoDB
    const contact = await Contact.create({
      name,
      email,
      message,
      ipAddress,
      status: "new",
    });

    console.log("Contact saved:", contact);

    // Send Email
    await sendEmailNotification(contact);

    return res.status(201).json({
      success: true,
      message: "Thank you! Your message has been received.",
      id: contact._id,
    });

  } catch (err) {

    console.error("Contact POST error:", err);

    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
});

// ─── GET /api/contact ─────────────────────────────────────────────
router.get("/", async (req, res) => {
  try {

    const messages = await Contact.find()
      .sort({ createdAt: -1 })
      .select("-ipAddress");

    return res.json({
      success: true,
      count: messages.length,
      data: messages,
    });

  } catch (err) {

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// ─── PATCH /api/contact/:id ───────────────────────────────────────
router.patch("/:id", async (req, res) => {
  try {

    const { status } = req.body;

    if (!["new", "read", "replied"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status",
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Not found",
      });
    }

    return res.json({
      success: true,
      data: contact,
    });

  } catch (err) {

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

export default router;