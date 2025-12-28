import express from 'express';
import nunjucks from 'nunjucks';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isDev = process.env.NODE_ENV !== 'production';

// Configure Nunjucks
const njkEnv = nunjucks.configure(path.join(__dirname, '../views'), {
  autoescape: true,
  express: app,
  watch: isDev, // Auto-reload templates in development
  noCache: isDev
});

// Add custom filters (optional)
njkEnv.addFilter('uppercase', (str) => str.toUpperCase());

// Load data
const siteData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/data.json'), 'utf-8')
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Pass DEV_MODE to all templates
app.use((req, res, next) => {
  res.locals.DEV_MODE = isDev;
  next();
});

// Serve static assets
if (!isDev) {
  // In production: serve from dist
  app.use(express.static(path.join(__dirname, '../dist')));
}

// Serve images
app.use('/images', express.static(path.join(__dirname, '../src/public/images')));

// Routes
app.get('/', (req, res) => {
  res.render('pages/index.njk', {
    ...siteData,
    pageTitle: 'Home',
    activePage: 'home'
  });
});

app.get('/about', (req, res) => {
  res.render('pages/about.njk', {
    ...siteData,
    pageTitle: 'About',
    activePage: 'about'
  });
});

app.get('/contact', (req, res) => {
  res.render('pages/contact.njk', {
    ...siteData,
    pageTitle: 'Contact',
    activePage: 'contact'
  });
});

// Contact form submission
app.post('/contact', (req, res) => {
  const { name, email, preference } = req.body;
  console.log('Form submitted:', { name, email, preference });
  // Add email service integration here (e.g., Nodemailer, SendGrid)
  res.redirect('/contact?success=true');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📦 Mode: ${isDev ? 'development' : 'production'}`);
});
