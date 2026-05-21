### Portfolio Main

A modern personal portfolio SPA built with React, React Router, and Create React App. This project showcases a clean, component-driven frontend architecture with a responsive navigation experience, project gallery, and about/contact sections designed for a developer portfolio.

### Live Demo
🔗 Vercel Link : https://react-portfolio-mauve-three.vercel.app/

### Features
- Client-side page routing with `react-router-dom`
- Responsive navbar with mobile hamburger menu
- Home, Projects, About, and Contact pages
- Data-driven project cards from `workcardData.js`
- Reusable UI components for consistent site structure
- Interactive About section with stacked imagery
- Footer and hero section layouts
- Component-level CSS styling
- Smooth scroll-based navbar background change

### Tech Stack

**Frontend**
- React
- Create React App
- React Router DOM

**Styling**
- CSS modules / component CSS
- Custom responsive layout styles

**UI**
- React Icons

**Data & State**
- Local component state
- JSX-driven component composition

**Deployment**
- Build output via `react-scripts build`
- Ready for static hosting on GitHub Pages, Netlify, Vercel

### Project Goal

The goal of this portfolio project is to build a polished personal brand website using React and modern frontend patterns. It is designed to present a developer’s work, skills, and contact path in a clean single-page application structure while practicing reusable components and responsive layout design.

### Folder Structure
src/
- `App.js`
- `index.js`
- `assets/`
- `Components/`
  - `AboutContent.js`
  - `Footer.js`
  - `Heroimg.js`
  - `Heroimg2.js`
  - `Navbar.js`
  - `contact.js`
  - `work.js`
  - `workcard.js`
  - `workcardData.js`
- `routes/`
  - `Home.js`
  - `Projects.js`
  - `About.js`
  - `Contact.js`
    
### Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/portfolio-main.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Build for production:

```bash
npm run build
```

### Future Improvements
- Add contact form submission with backend/email integration
- Implement dark/light theme support
- Migrate to TypeScript for stronger typing
- Add animations and scroll transitions
- Add unit/integration testing
- Improve accessibility and SEO metadata
- Make project gallery filterable/searchable

### Key Learnings
- Building a React SPA with route-based navigation
- Structuring reusable page and UI components
- Working with local component state and CSS styling
- Creating a responsive portfolio layout
- Organizing a React project for maintainability

### Author
Aketi Sai Krishna
Frontend developer focused on creating responsive, user-friendly React portfolio experiences.
