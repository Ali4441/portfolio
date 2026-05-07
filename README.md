# Robert Garcia — Portfolio

A pixel-perfect, dark-themed portfolio website built with the **MERN stack** and **Tailwind CSS**, matching the provided design reference.

---

##  Tech Stack

| Layer      | Technology                                |
|------------|-------------------------------------------|
| Frontend   | React 18, React Router v6, Tailwind CSS   |
| Backend    | Node.js, Express.js                       |
| Database   | MongoDB + Mongoose                        |
| Animations | CSS Keyframes + Intersection Observer     |
| Icons      | React Icons (Feather)                     |
| HTTP       | Axios                                     |
| Security   | Helmet, CORS, Rate Limiting               |
| Email      | Nodemailer (optional)                     |

---

##  Project Structure

```
portfolio/
├── client/                   # React frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx          # Home hero section
│   │   │   ├── FeaturedProjects.jsx
│   │   │   ├── AboutSnippet.jsx  # Home about preview
│   │   │   ├── Capabilities.jsx  # Skill bars
│   │   │   ├── Experience.jsx    # Timeline
│   │   │   ├── Contact.jsx       # Contact form
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── About.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css             # Tailwind + custom styles
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── server/                   # Express backend
│   ├── models/
│   │   ├── Contact.js            # Contact form schema
│   │   └── Project.js            # Project schema
│   ├── routes/
│   │   ├── contact.js            # POST /api/contact
│   │   └── projects.js           # CRUD /api/projects
│   ├── server.js                 # Main server entry
│   ├── .env.example
│   └── package.json
│
├── package.json              # Root — run both at once
└── README.md
```

---

## Getting Started

### Prerequisites
- **Node.js** v18+
- **MongoDB** running locally OR a [MongoDB Atlas](https://cloud.mongodb.com) URI

### 1. Clone & Install

```bash
# Install all dependencies (root + client + server)
npm run install:all
```

### 2. Configure Environment

```bash
cd server
cp .env.example .env
```

Edit `server/.env`:

```env
MONGO_URI=mongodb://localhost:27017/portfolio
PORT=5000
CLIENT_ORIGIN=http://localhost:5173
NODE_ENV=development

# Optional email notifications
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_app_password
EMAIL_TO=your_email@example.com
```

> **Gmail App Password**: Go to Google Account → Security → 2-Step Verification → App Passwords

### 3. Run in Development

```bash
# From the root folder — runs both client and server
npm run dev
```

-  Frontend: http://localhost:5173
-  Backend API: http://localhost:5000

---

##  Pages

| Page     | Route    | Sections                                              |
|----------|----------|-------------------------------------------------------|
| Home     | `/`      | Hero, Stats, Featured Projects, About Preview, Contact |
| About    | `/about` | Bio + Photo, Skills (animated bars), Experience Timeline, Contact |

---

## 🔌 API Endpoints

### Contact
| Method | Endpoint        | Description                    |
|--------|-----------------|--------------------------------|
| POST   | `/api/contact`  | Submit contact form            |
| GET    | `/api/contact`  | Retrieve all messages (admin)  |
| PATCH  | `/api/contact/:id` | Update message status       |

**POST `/api/contact` body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hey, I'd love to work with you!"
}
```

### Projects
| Method | Endpoint              | Description                        |
|--------|-----------------------|------------------------------------|
| GET    | `/api/projects`       | Get all projects                   |
| GET    | `/api/projects?featured=true` | Get featured projects only |
| GET    | `/api/projects/:id`   | Get single project                 |
| POST   | `/api/projects`       | Create project                     |
| PUT    | `/api/projects/:id`   | Update project                     |
| DELETE | `/api/projects/:id`   | Delete project                     |

---

##  Design System

| Token        | Value        | Usage                          |
|--------------|--------------|--------------------------------|
| `--accent`   | `#CBFF00`    | Buttons, highlights, bars      |
| `--dark`     | `#0a0a0a`    | Page background                |
| `--card`     | `#111111`    | Card backgrounds               |
| `--border`   | `#222222`    | Borders and dividers           |
| Font Display | Bebas Neue   | Headings, section titles       |
| Font Body    | DM Sans      | Body text, labels, buttons     |

---

## Production Build

```bash
# Build the React frontend
npm run build

# Start the Express server (serves the built React app)
NODE_ENV=production npm start
```

The server will serve the React app from `client/dist` in production.

---

##  Features

-  Fully responsive (mobile-first)
-  Smooth CSS animations with staggered entry
-  Animated skill bars triggered on scroll (Intersection Observer)
-  Contact form → MongoDB + optional email notification
-  Rate limiting on contact form (5 submissions/hour)
-  Security headers via Helmet
-  Dark theme with neon-yellow (`#CBFF00`) accent
-  Projects CMS-ready (CRUD API)
-  Production-ready Express setup

---

##  Customization

1. **Change name/bio**: Edit `Hero.jsx`, `AboutSnippet.jsx`, `About.jsx`
2. **Change projects**: Edit the `projects` array in `FeaturedProjects.jsx` (or wire up the `/api/projects` endpoint)
3. **Add your photo**: Replace the SVG in `Hero.jsx` / `About.jsx` with `<img src="your-photo.jpg" />`
4. **Update socials**: Search for `href: "https://github.com"` etc. and replace
5. **Colors**: Change `accent`, `dark`, `card` in `tailwind.config.js`

---

##  License

MIT — free to use and customize for your own portfolio.
