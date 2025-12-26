# CloudRelic - AI-Ready Product Requirements Document (PRD)

> **Purpose:** This document is optimized for AI assistants (Gemini, GitHub Copilot, Lovable) to prevent hallucinations and ensure accurate, consistent development.

---

## 🎯 Project Metadata

| Field            | Value                                                   |
| ---------------- | ------------------------------------------------------- |
| **Project Name** | CloudRelic                                              |
| **Tagline**      | Where Cloud Meets Code - Technical Insights That Matter |
| **Type**         | AI-Powered Technical Knowledge Platform                 |
| **Competition**  | Google Build the Future Showcase                        |
| **Deadline**     | December 31st, 2025, 23:59 IST                          |
| **Team Size**    | 1 founder - 1 co-founder                                |
| **Stage**        | MVP Development                                         |

---

## 🏢 Company Information (Verified Data)

### Basic Details

- **Legal Name:** CloudRelic
- **Industry:** Technology, Information and Internet
- **Headquarters:** New Delhi, Delhi 110091, India
- **Founded:** 2025
- **Company Size:** 0-1 employees (startup)
- **LinkedIn Followers:** 220
- **LinkedIn URL:** https://www.linkedin.com/company/cloudrelic/

### Workplace Policy

- **Type:** Remote-first with flexible hours
- **Core Hours:** 10AM-2PM (collaboration time)
- **Communication:** Async-first approach
- **Culture:** Inclusive, security-first, learning-focused

---

## 👥 Team Members (Verified)

### Co-founder 1: Yusuf

- **Role:** Frontend Lead / Developer
- **Title:** 2x Oracle Certified | Java Backend Developer
- **LinkedIn:** https://www.linkedin.com/in/cybrous/
- **Followers:** 1K+
- **Location:** India
- **Education:** Guru Nanak Dev University, Amritsar
- **Expertise:**
  - Spring Boot specialization
  - Microservices architecture
  - React development
  - Docker expertise
  - AWS expertise
  - Scalable, secure, high-performance applications

### founder 2: Md Yunus

- **Role:** Product Lead / DevOps Architect
- **Title:** DevOps Engineer & Platform Architect
- **Followers:** 2K+
- **Certifications:** 4x Oracle Certified
- **Expertise:**
  - Infrastructure scaling
  - CI/CD optimization (60% faster deployments achieved)
  - Startup and enterprise infrastructure building
  - Platform architecture

### Contact Information

- **Yusuf:** yusuf@cloudrelic.io
- **Md Yunus:** md.yunus@cloudrelic.io

---

## 🎯 Problem Statement

### The Challenge

DevOps engineers struggle with:

1. **Information Fragmentation** - Multiple documentation sources scattered across platforms
2. **Time-Consuming Research** - Manual research for infrastructure solutions
3. **Knowledge Gaps** - Difficulty keeping up with new cloud technologies (AWS, Azure, GCP)
4. **Inconsistent Best Practices** - Varied standards across teams and organizations
5. **Real-Time Guidance Need** - Lack of expert-level help during critical deployments

### Market Gap

Current solutions lack AI-powered personalization and real-time context awareness for infrastructure challenges.

---

## 💡 Solution Overview

### Core Concept

An AI-powered platform that acts as an expert DevOps consultant, providing:

1. **Intelligent Problem Solving** - AI analyzes infrastructure challenges and provides targeted solutions
2. **Personalized Learning Paths** - Content adapts based on user expertise level
3. **Real-Time Guidance** - Instant solutions during infrastructure issues
4. **Best Practices Engine** - Recommendations aligned with AWS/Azure/GCP standards
5. **Community Knowledge Integration** - Expert blogs, case studies, troubleshooting guides

---

## 👤 Target Users

### Primary Users

| User Type             | Need                                      | Pain Point                      |
| --------------------- | ----------------------------------------- | ------------------------------- |
| DevOps Engineers      | Rapid solutions for infrastructure issues | Time-consuming manual debugging |
| Cloud Architects      | Best practice recommendations             | Fragmented documentation        |
| System Administrators | Managing Linux/Windows at scale           | Knowledge gaps in new tools     |
| Development Teams     | Implementing CI/CD pipelines              | Inconsistent team practices     |

### User Segments by Budget

- **Startups:** $5-20k annual spend - Cost-conscious, need efficient scaling
- **SMBs:** $20-100k annual spend - Growing infrastructure complexity
- **Enterprises:** $100k+ annual spend - Large-scale deployments, compliance requirements

---

## 🚀 MVP Features (Must Have by Dec 31)

### Core Features Checklist

- [ ] Homepage with clear value proposition
- [ ] "Ask the Expert" AI chatbot (Google AI Studio powered)
- [ ] Basic problem troubleshooting interface
- [ ] Integration with CloudRelic blog articles
- [ ] User authentication (Google Sign-in)
- [ ] 5-10 pre-configured prompt templates
- [ ] Response history tracking
- [ ] Mobile-responsive design

### AI-Powered Features

#### 1. Smart Infrastructure Assistant

- **Input:** Describe infrastructure challenge, error logs, current setup
- **AI Output:** Targeted solutions, step-by-step guides, code snippets
- **Example:** "My CI/CD pipeline is failing with Docker image push errors" → AI provides diagnostics + solutions

#### 2. Real-Time Troubleshooting Engine

- Paste error messages → AI identifies root cause
- Provides multiple solution paths with pros/cons
- Links to relevant CloudRelic blog articles

#### 3. Best Practices Generator

- AI reviews user's current setup description
- Generates customized best practices checklist
- Categories: DevOps Excellence, Cloud Mastery, Linux & Network Security

#### 4. Learning Path Recommender

- Assessment of current knowledge level
- AI-generated personalized curriculum
- Progressive skill development
- Estimated time-to-completion

---

## 🛠 Technical Specifications

### Frontend Stack (DO NOT DEVIATE)

| Technology      | Purpose           | Version |
| --------------- | ----------------- | ------- |
| React.js        | UI Framework      | 18.x    |
| Vite            | Build Tool        | Latest  |
| TypeScript      | Type Safety       | 5.x     |
| Tailwind CSS    | Styling           | 3.x     |
| shadcn/ui       | Component Library | Latest  |
| React Router    | Navigation        | 6.x     |
| TanStack Query  | Data Fetching     | 5.x     |
| Zustand/Context | State Management  | Latest  |

### Backend Stack

| Technology             | Purpose              |
| ---------------------- | -------------------- |
| Supabase/Lovable Cloud | Backend as a Service |
| PostgreSQL             | Database             |
| Edge Functions         | Serverless Logic     |
| Google AI Studio       | AI Integration       |

### Deployment

- **Primary:** Lovable Cloud / Google Cloud Run
- **CDN:** CloudFlare / Google Cloud CDN
- **CI/CD:** GitHub Actions

---

## 🎨 Design System Requirements

### Brand Identity

- **Primary Color:** Deep blue/navy (professional, trustworthy)
- **Accent Color:** Cyan/teal (tech-forward, modern)
- **Style:** Clean, minimal, developer-focused
- **Typography:** Monospace for code, Sans-serif for content

### Design Principles

1. **Dark Mode First** - Developer preference
2. **Code-Friendly** - Proper syntax highlighting
3. **Scannable** - Clear hierarchy, bullet points
4. **Mobile Responsive** - Works on all devices
5. **Accessible** - WCAG 2.1 AA compliant

### UI Components Needed

- Navigation header with logo and auth
- Hero section with value proposition
- AI chat interface with message bubbles
- Code block component with syntax highlighting
- Service cards with icons
- Team member cards
- Footer with links and social

---

## 📄 Page Structure

### Required Pages

#### 1. Homepage (`/`)

**Sections:**

- Hero with tagline and CTA
- Problem/Solution overview
- Key features (3-4 cards)
- AI chat preview/demo
- Team introduction (brief)
- Call to action

#### 2. About Page (`/about`)

**Sections:**

- Company mission and vision
- Team bios with photos/avatars
- Company values
- Timeline/milestones

#### 3. Services Page (`/services`)

**Content:**

- DevOps Excellence (CI/CD, automation, monitoring)
- Cloud Mastery (AWS, Azure, GCP best practices)
- Linux Fundamentals (System administration & security)
- Network Intelligence (Infrastructure design & troubleshooting)
- Consulting services starting at $5/hr

#### 4. AI Chat Page (`/chat` or `/ask`)

**Features:**

- AI conversation interface
- Prompt templates
- Response history
- Share/export functionality

#### 5. Blog Page (`/blog`) - Optional for MVP

- Article listings
- Category filters
- Search functionality

#### 6. Contact Page (`/contact`)

- Contact form
- Email addresses
- LinkedIn link
- Location info

---

## 🤖 AI Integration Specifications

### The Golden Prompt (System Prompt for AI)

```
You are CloudRelic, an expert DevOps and Cloud Architecture consultant with 10+ years of experience across AWS, Azure, GCP, Kubernetes, Docker, CI/CD pipelines, Linux administration, and infrastructure security.

Your role is to provide actionable, expert-level guidance for infrastructure challenges. When users describe their problems or questions, follow these principles:

1. UNDERSTAND THE CONTEXT
   - Ask clarifying questions if needed (current setup, environment, constraints, budget)
   - Consider team size, organization type, and maturity level
   - Identify the underlying business goal, not just the technical problem

2. PROVIDE EXPERT SOLUTIONS
   - Offer multiple solution paths with pros/cons for each
   - Include code snippets, configurations, and implementation steps
   - Reference industry best practices (AWS Well-Architected Framework, Azure Cloud Adoption Framework, GCP Architecture Framework)
   - Provide specific tool recommendations (Terraform, Ansible, Jenkins, GitLab CI, Kubernetes, etc.)

3. EXPLAIN THE 'WHY'
   - Explain architectural decisions and trade-offs
   - Discuss performance, cost, and security implications
   - Link to relevant DevOps concepts and patterns

4. INCLUDE PRACTICAL DETAILS
   - Step-by-step implementation guides
   - Common pitfalls and how to avoid them
   - Monitoring and alerting recommendations
   - Troubleshooting tips for common issues

5. PERSONALIZE TO THEIR LEVEL
   - For beginners: Simplify explanations, provide more context
   - For advanced users: Discuss edge cases, optimization techniques, and complex scenarios
   - Suggest learning resources from CloudRelic blog when appropriate

6. FORMAT FOR CLARITY
   - Use bullet points and numbered lists
   - Include code blocks for configurations and scripts
   - Highlight important warnings and best practices
   - Provide links to relevant CloudRelic articles

When responding, always be:
- Practical and actionable
- Honest about limitations and trade-offs
- Encouraging of learning and skill development
- Current with latest cloud trends and tools
```

### AI Model Configuration

- **Primary Model:** Google Gemini (via Lovable AI Gateway)
- **Fallback:** Keep responses cached for common questions
- **Rate Limiting:** Implement queue system
- **Streaming:** Enable for real-time response display

---

## 💰 Monetization Tiers (Future Reference)

| Tier       | Price    | Features                                         | Target                |
| ---------- | -------- | ------------------------------------------------ | --------------------- |
| Free       | $0       | 10 AI consultations/month, blog access           | Individual developers |
| Pro        | $9.99/mo | 100 consultations, priority response, exports    | Active practitioners  |
| Teams      | $299/mo  | Unlimited, collaboration, monitoring integration | Startups & SMBs       |
| Enterprise | Custom   | Everything + custom integrations, SLA            | Large enterprises     |

---

## 📊 Success Metrics

### Product KPIs

- **Session Time:** 5+ minutes average
- **Helpfulness Rating:** 4.5+ stars
- **Return Users:** 60%+ within 7 days
- **Conversion:** 10-15% free to paid (future)

### Technical KPIs

- **Lighthouse Score:** 90+
- **API Response:** <200ms
- **Bundle Size:** <500KB main JS
- **Uptime:** 99.9%

---

## 🔒 Security Requirements

### Must Implement

- [ ] No hardcoded secrets or API keys
- [ ] Input validation and sanitization
- [ ] XSS protection (sanitized output)
- [ ] CORS configuration (restricted origins)
- [ ] HTTPS enforcement
- [ ] Rate limiting implementation
- [ ] Secure authentication flow

### Data Privacy

- GDPR-compliant data handling
- No sensitive data storage beyond necessary
- Clear privacy policy
- User data deletion capability

---

## ⚠️ Anti-Hallucination Rules for AI Assistants

### DO NOT:

1. ❌ Invent team members or employees not listed above
2. ❌ Create fake testimonials or case studies
3. ❌ Add features not in the MVP checklist
4. ❌ Use technologies not in the approved stack
5. ❌ Create fake social proof or statistics
6. ❌ Add payment processing without explicit request
7. ❌ Implement authentication before backend is ready
8. ❌ Use placeholder images - generate real ones

### DO:

1. ✅ Use exact company information from this document
2. ✅ Follow the approved technology stack
3. ✅ Implement only MVP features first
4. ✅ Use the exact team member names and roles
5. ✅ Reference actual LinkedIn URLs provided
6. ✅ Keep design consistent with brand guidelines
7. ✅ Prioritize mobile responsiveness
8. ✅ Generate appropriate placeholder content for blog posts

---

## 📁 File Structure (Recommended)

```
src/
├── assets/                 # Images, icons, generated assets
├── components/
│   ├── layout/            # Header, Footer, Layout
│   ├── sections/          # Hero, Features, Team, etc.
│   ├── chat/              # AI chat components
│   └── ui/                # shadcn/ui components
├── pages/
│   ├── Index.tsx          # Homepage
│   ├── About.tsx          # About page
│   ├── Services.tsx       # Services page
│   ├── Chat.tsx           # AI chat page
│   ├── Contact.tsx        # Contact page
│   └── NotFound.tsx       # 404 page
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities, API clients
├── types/                 # TypeScript type definitions
└── styles/                # Global styles (if needed)
```

---

## 🚀 Development Phases

### Phase 1: MVP (Dec 25-31, 2025) ← CURRENT

- Complete homepage with all sections
- Basic about and services pages
- AI chat interface (can be mock for demo)
- Mobile responsive design
- Deploy to production

### Phase 2: Post-Contest (Jan 2026+)

- Full AI integration with Lovable AI Gateway
- User authentication
- Response history
- Blog section
- Analytics integration

### Phase 3: Growth (Q1 2026+)

- Payment integration
- Team features
- Advanced AI features
- API integrations

---

## 📝 Content Guidelines

### Tone of Voice

- **Professional** but approachable
- **Technical** but accessible
- **Confident** but humble
- **Educational** without being condescending

### Key Messages

1. "Where Cloud Meets Code"
2. "Technical Insights That Matter"
3. "Expert DevOps guidance at your fingertips"
4. "Built by DevOps engineers, for DevOps engineers"

### Avoid

- Jargon without explanation
- Overpromising capabilities
- Vague or generic marketing speak
- Comparing directly to competitors

---

## ✅ Pre-Launch Checklist

### Design

- [ ] All pages mobile responsive
- [ ] Dark/light mode working
- [ ] Loading states implemented
- [ ] Error states designed
- [ ] 404 page styled

### Technical

- [ ] Zero console errors
- [ ] All links working
- [ ] Forms validated
- [ ] Performance optimized
- [ ] SEO meta tags added

### Content

- [ ] All text proofread
- [ ] Images optimized
- [ ] Contact info correct
- [ ] Social links working
- [ ] Legal pages (Privacy, Terms) - if needed

---

## 📚 Reference Links

- **Company LinkedIn:** https://www.linkedin.com/company/cloudrelic/
- **Yusuf LinkedIn:** https://www.linkedin.com/in/cybrous/
- **Competition:** Google Build the Future Showcase
- **Tech Stack Docs:** React, Vite, Tailwind, shadcn/ui

---

_Last Updated: December 26, 2025_
_Document Version: 1.0_
_For: AI Development Assistants (Gemini, GitHub Copilot, Lovable)_
