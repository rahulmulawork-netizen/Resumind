<div align="center">

  <img src="./public/favicon.ico" alt="Resumind Logo" width="80" />

  <h1>✨ Resumind</h1>

  <p><strong>AI-Powered Resume Analysis & Application Tracker</strong></p>
  <p><em>Drop your resume. Get smart feedback. Land your dream job.</em></p>

  <br/>

  ![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
  ![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)

</div>

---

## 🚀 What is Resumind?

**Resumind** is an AI-powered application tracking system that analyzes your resume against any job description and gives you **real, actionable feedback** — just like a recruiter would. Upload your PDF resume, paste the job details, and let the AI do the heavy lifting.

No more guessing why you didn't get a callback.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📄 **PDF Resume Upload** | Drag & drop or browse to upload your resume in PDF format |
| 🤖 **AI-Powered Analysis** | Powered by `claude-sonnet-4` via Puter.js for deep resume feedback |
| 📊 **ATS Score Visualization** | See your resume's ATS compatibility via gauges, circles, and score badges |
| 🗂️ **Application Tracker** | Track all your past resume submissions with their job details in one dashboard |
| 🔐 **Secure Authentication** | Seamless sign-in/sign-out via Puter's built-in auth system |
| 🖼️ **PDF → Image Preview** | Automatically converts your PDF into an image for visual display |
| 💾 **Persistent Storage** | All resumes and feedback are saved to Puter's cloud KV store |
| 🗑️ **Data Wipe** | Clean slate option to delete all stored resume data |

---

## 🛠️ Tech Stack

### Frontend
- **[React 19](https://react.dev/)** — Latest React with concurrent features
- **[React Router v7](https://reactrouter.com/)** — Full-stack framework with SSR support
- **[TypeScript 5](https://www.typescriptlang.org/)** — Type-safe development throughout
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first styling with the new Vite plugin
- **[Zustand](https://zustand-demo.pmnd.rs/)** — Lightweight, scalable global state management

### Backend & AI
- **[Puter.js](https://puter.com/)** — Cloud OS SDK powering auth, file storage, KV store, and AI
- **[Claude Sonnet 4](https://www.anthropic.com/)** — The LLM behind resume feedback analysis (via Puter AI)
- **[pdfjs-dist](https://mozilla.github.io/pdf.js/)** — Client-side PDF rendering and image conversion

### Tooling
- **[Vite 8](https://vitejs.dev/)** — Lightning-fast dev server and bundler
- **[Docker](https://www.docker.com/)** — Multi-stage production-ready containerization

---

## 📁 Project Structure

```
resumind/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── ATS.tsx          # ATS score display
│   │   ├── Accordion.tsx    # Expandable feedback sections
│   │   ├── Details.tsx      # Resume detail view
│   │   ├── FileUploader.tsx # Drag & drop PDF uploader
│   │   ├── Navbar.tsx       # Top navigation bar
│   │   ├── ResumeCard.tsx   # Resume card in the dashboard
│   │   ├── ScoreBadge.tsx   # Score badge component
│   │   ├── ScoreCircle.tsx  # Circular score chart
│   │   ├── ScoreGauge.tsx   # Gauge chart for ATS score
│   │   └── Summary.tsx      # Resume feedback summary
│   ├── lib/
│   │   ├── puter.ts         # Puter.js Zustand store (auth, fs, ai, kv)
│   │   ├── pdf2img.ts       # PDF-to-image conversion utility
│   │   └── formatSize.ts    # File size formatter & UUID generator
│   ├── routes/
│   │   ├── home.tsx         # Dashboard — view all tracked resumes
│   │   ├── upload.tsx       # Upload & analyze a new resume
│   │   ├── resume.tsx       # View feedback for a specific resume
│   │   ├── auth.tsx         # Authentication page
│   │   └── wipe.tsx         # Clear all stored data
│   ├── types/               # Global TypeScript type definitions
│   ├── root.tsx             # App root layout, fonts & favicon
│   └── app.css              # Global styles
├── public/
│   ├── favicon.ico          # App favicon
│   ├── icons/               # Icon assets
│   ├── images/              # Background and animation assets
│   └── pdf.worker.mjs       # PDF.js worker (client-side)
├── Dockerfile               # Multi-stage production Docker build
├── vite.config.ts           # Vite + Tailwind + React Router config
├── react-router.config.ts   # React Router SSR config
└── package.json
```

---

## ⚡ Getting Started

### Prerequisites

- **Node.js** v20 or higher
- **npm** v10 or higher
- A [Puter.com](https://puter.com) account (free) for auth & cloud storage

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/resumind.git
cd resumind

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Your app will be running at **`http://localhost:5173`** 🎉

---

## 🏗️ Building for Production

```bash
npm run build
npm run start
```

The production server runs via `react-router-serve` on port **3000**.

---

## 🐳 Docker Deployment

The project includes an optimized **multi-stage Dockerfile** that minimizes the final image size by separating build and runtime dependencies.

```bash
# Build the Docker image
docker build -t resumind .

# Run the container
docker run -p 3000:3000 resumind
```

The app will be accessible at **`http://localhost:3000`**.

### Deploy Anywhere

This Docker image is compatible with all major cloud platforms:

| Platform | Notes |
|---|---|
| 🟠 AWS ECS | Use Fargate for serverless container hosting |
| 🔵 Google Cloud Run | Auto-scales to zero, great for low traffic |
| 🟣 Azure Container Apps | Native Azure container deployment |
| 🟡 Railway | Simplest git-based Docker deployment |
| 🔴 Fly.io | Low-latency edge deployment |
| 🌊 DigitalOcean App Platform | One-click Docker app deployment |

---

## 🧠 How It Works

```
User uploads PDF resume
        │
        ▼
  PDF converted to image (pdfjs-dist)
        │
        ▼
  Both files uploaded to Puter Cloud FS
        │
        ▼
  Job details + resume path sent to Claude Sonnet 4 AI
        │
        ▼
  AI returns structured JSON feedback
        │
        ▼
  Feedback stored in Puter KV store
        │
        ▼
  Results displayed with ATS scores, tips & improvements
```

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with HMR |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run typecheck` | Run TypeScript type checking |

---

## 📄 License

This project is private and proprietary.

---

<div align="center">
  <p>Built with ❤️ using <strong>React Router</strong> + <strong>Puter.js</strong> + <strong>Claude AI</strong></p>
  <p><em>Smart feedback for your dream job.</em></p>
</div>
