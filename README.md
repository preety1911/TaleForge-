# 📖 StoryBuddy

> **"Turn learning into an adventure!"**
>
> *Learn through stories. Discover what you understand. Get a story made just for you.*

---

## 🌟 The Core Differentiator: Not Just an AI Story Generator

Most EdTech platforms simply give students a generic quiz score (e.g., *"60%"*) with no actionable next steps. 

**StoryBuddy** implements a complete closed learning loop:

$$\text{TEACH} \longrightarrow \text{TEST} \longrightarrow \text{ANALYZE} \longrightarrow \text{ADAPT} \longrightarrow \text{RE-TEACH} \longrightarrow \text{RETEST} \longrightarrow \text{MASTERY}$$

1. **TEACH**: The student reads an interactive digital comic book rather than dry textbook paragraphs.
2. **TEST**: The student takes an engaging quiz where every single question maps directly to a specific learning concept.
3. **ANALYZE**: The system calculates **concept-by-concept diagnostic mastery** (e.g., *Evaporation: 100%*, *Condensation: 50%*, *Collection: 0%*).
4. **ADAPT**: The system isolates only the weak concepts needing practice or review without wasting time on concepts already mastered.
5. **RE-TEACH**: Generates a **personalized micro-story** with fresh analogies and characters (e.g. *Coco the Droplet*) specifically designed for the child's weak spot.
6. **RETEST**: A targeted 2-question mini quiz checks comprehension.
7. **MASTERY**: Visualizes before-and-after improvement (*0% → 100%*) with confetti celebration!

---

## 🏗️ Architecture & Technology Stack

### Frontend
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS with custom comic-book design tokens (`shadow-comic`, custom font typography, cheerful color palettes)
- **Routing**: React Router v7 (`/`, `/setup`, `/story`, `/quiz`, `/result`, `/reteach`, `/mastery`)
- **Animations**: Framer Motion (page slides, floating badges, interactive cards)
- **Icons & Celebration**: Lucide React + Canvas Confetti
- **HTTP Client**: Axios with fallback resilience

### Backend
- **Framework**: ASP.NET Core Web API (.NET 8)
- **Language**: C#
- **Pattern**: Controller-Service architecture with Dependency Injection
- **AI Abstraction**: `IAIService` with `MockAIService` (offline & reliable hackathon MVP) and pluggable `RealAIService` support
- **CORS**: Configured for local development

---

## 🚀 Running the Project

### 1. Backend (ASP.NET Core Web API)
```bash
cd backend
dotnet run --urls "http://localhost:5000"
```
The API will be live at `http://localhost:5000/api` with endpoints:
- `POST /api/story/generate`
- `POST /api/quiz/evaluate`
- `POST /api/story/reteach`

### 2. Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
```
Open your browser at `http://127.0.0.1:5173`.

---

## 🎬 2-Minute Hackathon Demo Script for Judges

1. **Home (`/`)**:
   - Welcome from **Milo the Mascot**.
   - Review the visible 7-Step Learning Loop architecture.
   - Click **"Start Learning"**.

2. **Student Setup (`/setup`)**:
   - Click the shortcut: **"⚡ Click to Pre-Fill Official Demo (Aarav • Grade 5 • Water Cycle)"**.
   - Click **"Create My Story"**.

3. **Interactive Comic Story (`/story`)**:
   - Flip through the 5 comic panels:
     1. *Leo the Water Droplet*
     2. *Evaporation (Mr. Sun)*
     3. *Condensation (Cloud Castle)*
     4. *Precipitation (The Sky Ride)*
     5. *Collection (The River Stream)*
   - Click **"Take the Challenge!"**.

4. **Quiz (`/quiz`)**:
   - Click **"⚡ Judge Demo Auto-Fill"** (or answer questions).
   - This intentionally triggers:
     - Evaporation: Correct (100%)
     - Condensation: 1 of 2 Correct (50% - Needs Practice)
     - Precipitation: Correct (100%)
     - Collection: Incorrect (0% - Needs Review)

5. **Learning Report (`/result`)**:
   - Show judges the **concept-level breakdown** rather than just a single number score.
   - Notice the prompt: *"You need a little more practice with Collection"*.
   - Click **"Teach Me Again (Collection)"**.

6. **Personalized Re-Teaching (`/reteach`)**:
   - Notice the system **did not re-generate the entire lesson**!
   - It zoomed in on *Collection* with a new character (*Coco*) and a playground slide analogy.
   - Click **"Take Mini Quiz"** and answer the 2 mini questions.
   - Click **"See Mastery Result! 🎉"**.

7. **Mastery (`/mastery`)**:
   - Enjoy the **confetti celebration** and Milo's cheer!
   - Highlight the **Before vs After Transformation**:
     - *Collection: 0% → 100% (+100 percentage points!)*
   - Finish with the closing tagline:
     > *"StoryBuddy doesn't just teach. It discovers how each child learns."*
