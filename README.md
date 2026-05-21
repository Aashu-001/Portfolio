# Aashutosh Sharma - Portfolio

A modern, fully-featured portfolio website built with React, Vite, and Tailwind CSS concepts. Showcasing projects, skills, achievements, and experience as a MERN stack developer and competitive programmer.

## Features

✨ **Modern Design** - Clean, dark theme with gradient accents  
🎯 **Responsive** - Works seamlessly on desktop, tablet, and mobile  
⚡ **Fast** - Built with Vite for lightning-fast development and production builds  
🎨 **Interactive** - Smooth animations and hover effects  
📱 **Mobile Optimized** - Hamburger menu and responsive layouts  
🔗 **Social Integration** - Links to GitHub, LinkedIn, LeetCode, and email  

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Variables
- **Icons**: React Icons
- **Responsive**: CSS Grid & Flexbox

## Project Structure

```
src/
├── components/
│   ├── Header.jsx & Header.css
│   ├── Hero.jsx & Hero.css
│   ├── About.jsx & About.css
│   ├── Education.jsx & Education.css
│   ├── Projects.jsx & Projects.css
│   ├── Skills.jsx & Skills.css
│   ├── Achievements.jsx & Achievements.css
│   ├── Contact.jsx & Contact.css
│   └── Footer.jsx & Footer.css
├── App.jsx
├── index.css
└── main.jsx
├── vite.config.js
├── package.json
└── index.html
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aashutosh-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Customization

### Update Personal Information
Edit the data in each component:
- **Hero.jsx** - Name, subtitle, and social links
- **About.jsx** - Personal bio and stats
- **Education.jsx** - Education details
- **Projects.jsx** - Project information
- **Skills.jsx** - Technical skills
- **Achievements.jsx** - Achievements
- **Contact.jsx** - Contact information

### Update Social Links
Replace placeholder URLs in:
- Header.jsx
- Hero.jsx
- Footer.jsx

### Customize Colors
Edit CSS variables in `index.css`:
```css
:root {
  --primary-color: #0f172a;
  --secondary-color: #1e293b;
  --accent-color: #3b82f6;
  --accent-light: #60a5fa;
  --text-light: #f1f5f9;
  --text-muted: #cbd5e1;
  --border-color: #334155;
}
```

## Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to GitHub Pages
```bash
npm run build
# Push dist folder to gh-pages branch
```

## Features Breakdown

### Header
- Fixed navigation with smooth scroll links
- Mobile hamburger menu
- Gradient logo

### Hero Section
- Eye-catching title with gradient text
- Call-to-action buttons
- Social media links
- Floating animated stats cards

### About
- Personal bio
- Key statistics
- Highlights of mission and approach

### Education
- Timeline layout
- Education details with coursework
- Hover effects

### Projects
- Project cards with hover animations
- Technology tags
- Key highlights
- Links to GitHub and live demos

### Skills
- Organized by categories
- Interactive skill tags
- Visual hierarchy

### Achievements
- Achievement cards with icons
- Animated icons
- Bounce animations

### Contact
- Contact information with icons
- Contact form with email integration
- Responsive layout

### Footer
- Quick links
- Social icons
- Year auto-update
- Copyright information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized with Vite for fast builds
- CSS-in-JS for minimal bundle size
- Smooth animations with GPU acceleration
- Responsive images and lazy loading ready

## License

This portfolio template is open source and available for personal and commercial use.

## Contact

- **Email**: aashush800660@gmail.com
- **Phone**: +91 6396915820
- **Location**: Greater Noida, India

---

Made with ❤️ using React & Vite
