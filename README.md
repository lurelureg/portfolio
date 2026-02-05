# Portfolio Engine | React + Vite

This project is a bridge between design and code. To explain how it works, I’ve broken down the features through two different lenses: the **User Experience** and the **Technical Execution.**

---

## 🚀 Feature Breakdown

### 1. The Graphics Showcase

> **UX:** "I wanted the gallery to feel like a living space where the viewer discovers something new every time they refresh, rather than just seeing a static list."
> **Dev:** "To achieve this, I built a **shuffling algorithm** that intercepts the asset array on mount. It reorders the indexes before mapping them to the UI, ensuring a unique DOM structure for every session without manual input."

### 2. Branding Project Logic

> **UX:** "The branding section needs to feel professional and organized, allowing the work to speak for itself without the layout getting in the way."
> **Dev:** "I implemented a **Data-Driven Architecture**. By centralizing project metadata in `projectsList.js`, I’ve decoupled the content from the view. The UI simply consumes a JSON-like object, making the entire system scalable and easy to maintain."

### 3. Seamless Transitions

> **UX:** "In a Single Page Application, it’s frustrating when you click a link and the scroll position doesn't reset—it breaks the illusion of moving to a new 'page'."
> **Dev:** "I solved this by injecting a **`ScrollToTop` lifecycle component**. It listens for route changes via React Router and force-resets the window coordinates to `(0,0)`, mimicking standard browser behavior within a virtual environment."

---

## 🧠 Architectural Choices

* **Vite Implementation**
* *UX:* "The site needs to feel snappy; no one likes waiting for a loading spinner."
* *Dev:* "I moved away from CRA in favor of **Vite’s Esbuild-powered engine**. It provides near-instant HMR (Hot Module Replacement) and highly optimized production chunks."


* **Component Modularity**
* *UX:* "Consistency is key. The Navbar and Footer should feel like permanent anchors while the content flows between them."
* *Dev:* "I utilized a **`PageWrapper` Higher-Order Component** pattern. This ensures structural consistency and props-drilling efficiency across all top-level routes."



---

## 📁 The Project Blueprint

* **`/src/pages`**: The functional views (About, Projects, Gallery).
* **`/src/components`**: Reusable UI modules built for maximum DRY (*Don't Repeat Yourself*) code.
* **`/src/data`**: The 'Source of Truth' for all portfolio content.

---

## 🛠️ Build Instructions

1. `npm install` — Installs the dependency tree.
2. `npm run dev` — Fires up the local development server.
3. `npm run build` — Compiles and minifies the site for production.


## 🤝 Let's Connect

Did you like it? Used it? Please get in touch, I'd love to hear from you.

* **LinkedIn:** [Connect with me here](https://www.linkedin.com/in/lucreciagarino/?locale=en_US)

---

## 🛠️ Credits

A big shout-out to **[Rodri](https://github.com/rpgos)**, who jumped into the codebase and fixed the gallery in seconds. 
