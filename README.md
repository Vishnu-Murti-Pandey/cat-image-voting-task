# 🐾 Cat Image Voting App

An interactive and responsive web app to browse and vote on cat images using [TheCatAPI](https://thecatapi.com).  
Built with modern tools: React, TypeScript, Zustand, and Tailwind CSS.

---

## 🚀 Features

- 🐱 Fetch random cat images from TheCatAPI
- ❤️ Vote for your favorite cats
- 📦 Persist votes using Zustand
- 🔀 Drag-and-drop support with dnd-kit
- 🪟 Virtualized list rendering with react-window
- 📱 Fully responsive and mobile-friendly

---

## 🧰 Tech Stack

- ⚛️ React 18 + Vite
- 💅 Tailwind CSS
- 🧠 Zustand (state management)
- ✨ TypeScript
- 🧩 dnd-kit (drag-and-drop)
- 🪟 react-window (virtualized list)
- 🐱 TheCatAPI

---

## ⚙️ Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/cat-voting-app.git
cd cat-voting-app

You can use any of the following package managers:
npm install
yarn install

Create a .env file using the provided example:
cp .env.example .env

Then, paste your key into the file from - [TheCatAPI](https://thecatapi.com) 
VITE_CAT_API_KEY=your_api_key_here
```

---

## 🧠 Self-Reflection: Trade-offs

While building the Cat Image Voting App, I made intentional trade-offs to balance performance, simplicity, and developer experience.

I used Zustand for state management instead of heavier options like Redux. While this made the codebase leaner and more intuitive, it lacks middleware and devtools by default, which I had to work around during debugging.

For performance, I chose react-window to virtualize the vote list. This improved rendering for large datasets but required custom logic to support dynamic heights and drag-and-drop interactions via dnd-kit, adding complexity.

Using Vite for tooling provided lightning-fast dev builds, but configuring testing (with Jest/Vitest) required extra effort, especially to support TypeScript paths and environment variables.

Finally, I prioritized responsiveness and interactivity (e.g., mobile support, hover effects) using Tailwind CSS. While Tailwind made styling efficient, it increased HTML verbosity, which could affect readability for newcomers.

Each decision aimed to maximize user experience and maintainability while accepting some trade-offs in flexibility and learning curve.