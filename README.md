# 🚀 Fresher.AI

> **AI-powered career preparation platform for interviews, resumes, performance analysis, and personalized learning roadmaps.**

Fresher.AI is a full-stack AI career preparation platform designed to help students and job seekers prepare for the complete hiring journey — from building an ATS-friendly resume to practicing realistic interviews and identifying the skills required to reach their target role.

The platform uses **specialized AI agents**, **LangGraph workflows**, and a **microservices-based backend** to provide personalized career assistance.

---

## ✨ Features

### 🎤 AI Interview Simulator

Practice realistic interviews with AI-powered interview agents.

* HR / behavioral interviews
* Technical interviews
* Coding interview support
* Dynamic AI-generated questions
* Interview session management
* Timed interview experience
* Code editor for coding rounds
* AI-generated interview reports
* Performance scoring and analysis

---

### 🤖 Multi-Agent AI System

Fresher.AI separates different career tasks into specialized AI agents.

| AI Agent           | Responsibility                               |
| ------------------ | -------------------------------------------- |
| 📝 Resume Agent    | Resume analysis and ATS-focused improvements |
| 🎤 Interview Agent | Conducts AI-powered interviews               |
| 📊 Feedback Agent  | Evaluates answers and provides feedback      |
| 🗺️ Roadmap Agent  | Generates personalized learning roadmaps     |
| 📚 Resource Agent  | Finds useful learning resources              |

This modular architecture makes it easier to extend the platform with additional AI capabilities.

---

### 📄 AI Resume Builder

Create and improve professional resumes directly inside the platform.

**Features include:**

* ATS-friendly resume template
* Structured resume editor
* Resume preview
* PDF export
* AI-powered resume assistance
* Resume data management

---

### 📊 Interview Analytics Dashboard

Track interview preparation and performance through a centralized dashboard.

The dashboard provides:

* Total interviews
* Questions answered
* Completed interviews
* Average interview score
* Technical interview performance
* HR / behavioral performance
* Interview history
* Performance graphs

---

### 🗺️ Personalized Career Roadmaps

Generate customized learning roadmaps based on your career goals and current skills.

The roadmap system can:

* Generate structured learning paths
* Break goals into modules
* Recommend learning resources
* Integrate external resources
* Track roadmap-related information

---

### 🔐 Authentication & User Management

Secure user authentication and account management using:

* Firebase Authentication
* Firebase Admin SDK
* Cookie-based authentication
* Protected API routes
* User session management

---

### 💳 Subscription & Billing

Integrated billing infrastructure for handling premium functionality.

* Razorpay integration
* Subscription/payment management
* Billing records
* User plan management

---

## 🏗️ Architecture

Fresher.AI follows a **microservices-oriented backend architecture**.

```text
                         ┌─────────────────────┐
                         │      React UI       │
                         │   Vite + Tailwind   │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │     API Gateway     │
                         │   Node.js + Express │
                         └──────────┬──────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     ▼
      ┌──────────────┐      ┌──────────────┐      ┌──────────────┐
      │ Auth Service │      │Interview Svc │      │ Resume Svc   │
      └──────────────┘      └──────┬───────┘      └──────┬───────┘
                                   │                     │
                                   ▼                     ▼
                            ┌─────────────┐       ┌─────────────┐
                            │ LangGraph   │       │ AI / RAG    │
                            │ AI Agents   │       │ Pipeline     │
                            └─────────────┘       └─────────────┘

              ┌─────────────────────┼─────────────────────┐
              │                                           │
              ▼                                           ▼
      ┌──────────────┐                            ┌──────────────┐
      │Roadmap Svc   │                            │Billing Svc   │
      └──────┬───────┘                            └──────────────┘
             │
             ▼
      ┌──────────────┐
      │ AI + Search  │
      └──────────────┘

                 ┌──────────────────────┐
                 │ MongoDB + Redis      │
                 │ Persistent Data      │
                 │ & Caching            │
                 └──────────────────────┘
```

---

## 🧠 AI Architecture

The platform uses **LangChain and LangGraph** to build structured AI workflows.

### Interview Workflow

```text
User starts interview
        ↓
Interview Agent
        ↓
Question Generation
        ↓
Candidate Answer
        ↓
Answer Evaluation
        ↓
Feedback Agent
        ↓
Performance Analysis
        ↓
Interview Report
```

### Roadmap Workflow

```text
Career Goal
    ↓
Current Skills
    ↓
Roadmap Agent
    ↓
Learning Plan Generation
    ↓
Resource Agent
    ↓
Learning Resources
    ↓
Personalized Roadmap
```

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Redux Toolkit
* React Router
* Axios
* Motion
* Recharts
* Monaco Editor
* Firebase Authentication

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Redis
* Docker
* REST APIs
* Microservices Architecture

### AI / LLM

* LangChain
* LangGraph
* Groq
* Google Gemini
* Qdrant
* Retrieval-Augmented Generation (RAG)
* AI Agents
* Tavily

### Authentication & Payments

* Firebase Admin
* Razorpay

### Developer Tools

* Git
* GitHub
* Docker
* npm
* ESLint
* Nodemon

---

## 📁 Project Structure

```text
fresherAI/
│
├── backend/
│   │
│   ├── gateway/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   └── utils/
│   │
│   ├── services/
│   │   │
│   │   ├── auth-service/
│   │   ├── billing-service/
│   │   ├── interview-service/
│   │   ├── resume-service/
│   │   └── roadmap-service/
│   │
│   ├── shared/
│   │   └── redis/
│   │
│   └── docker-compose.yml
│
└── frontend/
    │
    ├── src/
    │   ├── api/
    │   ├── components/
    │   ├── pages/
    │   ├── redux/
    │   └── utils/
    │
    └── public/
```

---

## ⚙️ Getting Started

### 1. Start Terminal

```bash
cd fresherAI
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

Start the frontend:

```bash
npm run dev
```

---

### 3. Install backend dependencies

Each backend service maintains its own dependencies.

For example:

```bash
cd backend/services/auth-service
npm install
npm run dev
```

Repeat the installation for the required backend services.

---

### 4. Start Redis

From the backend directory:

```bash
docker compose up -d
```

Redis will be available on:

```text
localhost:6379
```

---

## 🔑 Environment Variables

Create `.env` files for the required services.

Typical configuration includes:

```env
MONGO_URI=your_mongodb_connection_string

GROQ_API_KEY=your_groq_api_key

GOOGLE_API_KEY=your_google_api_key

TAVILY_API_KEY=your_tavily_api_key

QDRANT_URL=your_qdrant_url

QDRANT_API_KEY=your_qdrant_api_key

REDIS_URL=redis://localhost:6379

RAZORPAY_KEY_ID=your_razorpay_key

RAZORPAY_KEY_SECRET=your_razorpay_secret
```

> Never commit real API keys, credentials, Firebase service-account files, or `.env` files to GitHub.

---

## 🔒 Security

Fresher.AI uses environment-based configuration for sensitive credentials and supports protected backend routes through authentication middleware.

For production deployments:

* Store secrets using environment variables or a secrets manager.
* Never commit `.env` files.
* Never commit Firebase service-account credentials.
* Rotate credentials immediately if they are accidentally exposed.

---

## 🚀 Future Improvements

* Real-time voice interviews
* Resume-to-job matching
* Job description analysis
* LinkedIn profile optimization
* More programming languages for coding interviews
* Advanced interview analytics
* Personalized job recommendations
* Interview difficulty adaptation
* Real-time AI interviewer
* Production-grade observability and monitoring

---

## 🎯 Why Fresher.AI?

Most interview preparation platforms focus on only one part of the hiring process.

**Fresher.AI brings the preparation workflow together:**

```text
Resume
   ↓
Skill Gap
   ↓
Learning Roadmap
   ↓
Interview Practice
   ↓
AI Feedback
   ↓
Performance Analytics
   ↓
Better Interview Preparation
```

The goal is to provide job seekers with a single AI-powered platform for continuous career preparation.

---

## 👨‍💻 Author

**Harsh Pathak**

B.Tech Computer Science Engineering | Full-Stack Developer | AI & Backend Enthusiast

---

