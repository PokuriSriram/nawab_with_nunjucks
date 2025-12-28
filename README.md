🍽️ Nawab Kitchens | Premium Indian Catering

🌿 Nawab Kitchens is a clean, modern, and responsive web application designed for a luxury Indian catering brand.
This project has been refactored from a static HTML/CSS/JS website into a modular, data-driven application using Nunjucks templating and Vite bundler, simulating a real-world frontend migration task.

🎯 Project Objective

Improve maintainability and scalability of an existing static website

Introduce server-side templating using Nunjucks

Use Vite for modern asset bundling and development workflow

Preserve and enhance UI/UX quality while restructuring the codebase

📝 Project Reflection
🔄 Migration Journey (Step-by-Step)
1️⃣ Initial Setup

Started with a static multi-page website:

index.html

about.html

contact.html

UI built using Bootstrap 5 (CDN) with custom CSS.

2️⃣ Introduction of Nunjucks Templating

Converted static HTML files into .njk templates

Created reusable layouts and partials:

layout.njk (base layout)

partials/navbar.njk

partials/footer.njk

Reduced code duplication and improved consistency across pages.

3️⃣ Project Restructuring

Organized files into a scalable structure:

Pages

Layouts

Partials

Static assets

4️⃣ Vite Integration

Added Vite as the bundler for:

JavaScript modules

CSS assets

Development server with fast reload

Ensured assets are correctly served alongside Nunjucks-rendered pages.

5️⃣ UI Customization & Polishing

Remixed Bootstrap components instead of copy-pasting templates:

Navbar

Hero sections

Cards

Applied custom CSS:

Arch-top image styling

High-contrast Emerald & Gold color palette

Ensured responsiveness across devices.

🛠️ Technologies Used

HTML5

CSS3

Bootstrap 5

JavaScript (ES6)

Nunjucks (Templating Engine)

Vite (Bundler & Dev Server)

Node.js + Express

Git & GitHub

📁 Project Structure

├── src/
│   ├── pages/          # Nunjucks page templates
│   ├── layouts/        # Base layout
│   ├── partials/       # Navbar, footer, reusable UI
│   ├── assets/
│   │   ├── css/
│   │   └── js/
│   └── data/           # Optional JSON data
├── public/
├── server.js           # Express server
├── vite.config.js
├── package.json
└── README.md

▶️ How to Run the Project (Execution Steps)
Prerequisites

Node.js (v16+ recommended)

npm

Installation
git clone https://github.com/<your-username>/Catering-Services.git
cd Catering-Services
npm install

Run in Development Mode
npm run dev


Starts the Vite dev server

Runs Express with Nunjucks rendering

Open browser at:
http://localhost:3000
 (or the port configured)
