# 📄 SyncAI CohortLab

A blazing fast, real-time **Resume + Cover Letter Generator** and **Mock Interview Analyzer** powered by **Next.js**, **Gemini API**, and **PostgreSQL** — built for modern job seekers and optimized for Applicant Tracking Systems (ATS).

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-syncai--cohortlab.vercel.app-brightgreen?style=for-the-badge)](https://syncai-cohortlab.vercel.app/)

---

## ✨ Features

- ⚡ **AI-Powered Resume + Cover Letter Generation**: Instantly create high-quality, ATS-friendly documents.
- 🎯 **ATS-Friendly Formatting**: Optimized to pass applicant tracking system filters.
- 🔍 **Keyword-Based Testing**: Match and analyze job description keywords.
- 🧠 **Mock Interviews + Performance Insights**: Simulate interviews and get feedback on answers.
- 📊 **Scoring Analytics**: Real-time scoring breakdowns and keyword matches.
- 🧑‍💼 **Authentication**: Fully integrated with **Clerk** for seamless sign-in/up.
- 🔁 **Background Jobs**: Handled using **Inngest** for scoring and analysis.

---

## 🛠️ Tech Stack

| Tech               | Purpose                                   |
|--------------------|-------------------------------------------|
| **Next.js**        | Full-stack React framework                |
| **React.js**       | UI development                            |
| **Tailwind CSS**   | Beautiful, responsive styling             |
| **PostgreSQL**     | Relational database                       |
| **Prisma**         | Type-safe ORM                             |
| **Gemini API**     | AI generation for resume/cover letters    |
| **Inngest**        | Background tasks (like scoring)           |
| **Clerk**          | Authentication and session management     |

---

## 🔗 Live Website

🌐 [https://syncai-cohortlab.vercel.app/](https://syncai-cohortlab.vercel.app/)

---


## 🧪 Environment Variables
To run the project locally, create a .env file in the root directory and add the following environment variables:
```
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZXRoaWNhbC1jaGVldGFoLTEuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_MuU6EPLu9Mv4KF0iB5qaZu7gVv9zIKrztGOjldjNAx

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up 
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Database
DATABASE_URL=postgresql://neondb_owner:npg_aN0BnrxSF6pi@ep-aged-dream-a4e1xzwy-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require

# Gemini AI Key
GEMINI_API_KEY=AIzaSyDYr3bZCis1DzyNaDCrPVIYpekGnsltXy0

```

## 🙌 Credits
#### Built for modern professionals — powered by Next.js, Gemini, Prisma, Clerk, and Inngest.
