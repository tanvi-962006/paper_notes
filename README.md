# 📝 PaperNotes — Your Quick Note

A clean and beautiful note-taking app built with React. Jot down your thoughts, ideas, and to-dos on realistic-looking notepad cards — and delete them when you're done!

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)

---

## ✨ What It Does

- **Add Notes** — Type a title and description, hit "Add note", and your note appears instantly on a beautiful notepad-style card.
- **View Notes** — All your notes are displayed as paper cards with a realistic spiral notebook background.
- **Delete Notes** — Done with a note? Hit the red "Delete" button and it's gone.

## 🛠️ Built With

- **React** — For building the UI with components and state management
- **Vite** — Lightning-fast dev server and build tool
- **Tailwind CSS** — For styling everything without writing separate CSS files

## 📂 How It's Organized

```
project-notes/
├── src/
│   ├── App.jsx              → Main app — holds the shared notes data
│   ├── components/
│   │   ├── section_1.jsx    → Left panel — the form to add new notes
│   │   └── section_2.jsx    → Right panel — displays all your note cards
│   └── index.css            → Global styles
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 How to Run It

1. **Clone or download** this project
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the dev server:**
   ```bash
   npm run dev
   ```
4. **Open** `http://localhost:5173` in your browser

## 🧠 How It Works (In Simple Words)

The app has **3 main files** that work together:

### App.jsx — The Boss
This is the parent component. It holds the **shared list of notes** (`tasks`) in its state. It passes this list down to both the left panel and the right panel so they can both access the same data.

### Section_1 (Left Panel) — The Form
This is where you type your note's **title** and **description**. When you click "Add note":
1. It copies the current notes list
2. Pushes your new note into the copy
3. Updates the shared state — which makes the right panel re-render with the new note

### Section_2 (Right Panel) — The Display
This takes the notes list and **loops through it** using `.map()`, creating a beautiful notepad card for each note. Each card has a Delete button that uses `.splice()` to remove that specific note.

### Why Does App.jsx Hold the Data?

Because Section_1 (form) and Section_2 (display) are **sibling components** — they can't talk to each other directly. So the data lives in their parent (App.jsx), which passes it down to both. This is a React pattern called **"lifting state up"**.

```
App.jsx  ← holds the notes array
  ├── Section_1  ← adds notes (calls setTasks)
  └── Section_2  ← shows & deletes notes (reads tasks, calls setTasks)
```

## 📸 Preview

The app has a dark theme with a split layout:
- **Left side** — A sleek black form panel to add notes
- **Right side** — Notes displayed as realistic paper notepad cards with spiral binding

---
