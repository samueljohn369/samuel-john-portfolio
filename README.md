# 👨‍💻 Samuel John — Personal Portfolio

A modern, responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. Designed with a glassmorphic dark-mode aesthetic featuring smooth animations, dynamic content, and interactive sections.

🌐 **Live Site:** samueljohn369.github.io/samuel-john-portfolio  
💼 **LinkedIn:** linkedin.com/in/samueljohn1  
🐙 **GitHub:** github.com/samueljohn369  
📸 **Instagram:** @achi_ll_es  
📧 **Email:** samueljohn0727@gmail.com

---

## 📁 Project Structure

```
Samuel John Portfolio/
│
├── index.html          # Main HTML file — full single-page structure
├── style.css           # All custom styling, animations, and responsive layout
├── app.js              # JavaScript logic for dynamic content and interactions
├── .gitignore          # Git ignore rules (excludes Python scripts, OS files, etc.)
├── README.md           # Project documentation (this file)
│
└── images/             # All media assets used across the portfolio
    ├── samuel_john.jpg         # Profile photo (Hero section)
    ├── scms_campus.jpg         # SCMS School of Engineering campus photo
    ├── scms_logo.png           # SCMS university official logo
    ├── don_bosco_campus.jpg    # Don Bosco H.S. School campus photo
    ├── don_bosco_logo.png      # Don Bosco school official logo
    ├── netball_certificate.jpg # National Netball participation certificate
    ├── netball_team.jpg        # Kerala team photo — 65th National School Games
    ├── plus_two_certificate.jpg# +2 academic achievement certificate
    ├── award_newspaper.jpg     # Newspaper clipping — Best Student of the Year
    ├── interstellar.jpg        # Favourite movie — Interstellar (Favorites section)
    ├── salaar.jpg              # Favourite movie — Salaar (Favorites section)
    ├── messi.jpg               # Favourite athlete — Lionel Messi
    ├── jordan.jpg              # Favourite athlete — Michael Jordan
    ├── pitt.jpg                # Favourite actor — Brad Pitt
    ├── prabhas.jpg             # Favourite actor — Prabhas
    ├── onepiece.jpg            # Favourite anime — One Piece
    └── travis.jpg              # Favourite artist — Travis Scott
```

---

## 🛠️ Tools & Technologies Used

### Core
| Tool | Purpose |
|------|---------|
| **HTML5** | Page structure and semantic markup |
| **CSS3** | Styling, animations, glassmorphism effects, responsive layout |
| **JavaScript (ES6+)** | Dynamic content rendering, tab switching, lightbox, scroll animations |

### Fonts & Icons
| Tool | Purpose |
|------|---------|
| **Google Fonts** | Typography — Outfit, Plus Jakarta Sans, Space Grotesk |
| **Font Awesome 6** | Icons used throughout the UI |

### Design Style
| Concept | Description |
|---------|-------------|
| **Glassmorphism** | Frosted-glass card effects with `backdrop-filter: blur()` |
| **Dark Mode** | Deep navy/purple color palette throughout |
| **Micro-animations** | Hover effects, scroll reveals, typing rotator in hero |
| **Responsive Design** | Mobile-first layout using CSS Grid and Flexbox |

### Development & Deployment
| Tool | Purpose |
|------|---------|
| **Git** | Version control |
| **GitHub** | Code hosting and repository management |
| **GitHub Pages** | Free static site hosting |
| **Python HTTP Server** | Local development server (`python -m http.server 8080`) |
| **Google Antigravity IDE** | AI-powered IDE used to build and iterate on the portfolio |

---

## 📄 File Descriptions

### `index.html`
The main and only HTML file. Contains the full single-page layout with the following sections:
- **Navbar** — Sticky top navigation with smooth scroll links
- **Hero** — Animated intro with profile card, typing rotator, and stats
- **About** — Personal background, goals, and introduction
- **Education & Achievements** — Tabbed section with academic milestones and national sports achievement
- **Technical Arsenal** — Skills, tools, and soft strengths grid
- **Featured Projects** — Real GitHub project cards with live links
- **Favorites Lounge** — Personal interests across 8 categories
- **Contact** — Social links and email

### `style.css`
All visual styling for the portfolio:
- CSS custom properties (design tokens) for consistent theming
- Glassmorphic card styles with blur and transparency
- Responsive grid layouts for all screen sizes
- Keyframe animations (fade-in, slide-up, glow effects)
- Lightbox modal styles for certificate/photo zoom
- Education section tab styles and sub-page transitions

### `app.js`
All JavaScript functionality:
- **`initHero()`** — Typing text rotator animation
- **`initAbout()`** — Renders about content dynamically
- **`initEducationTabs()`** — Tab switching logic for Education sub-sections
- **`initSkills()`** — Skill bar and tool card rendering
- **`initProjects()`** — GitHub project cards with links
- **`initFavorites()`** — Favorites lounge category rendering
- **`initContact()`** — Contact section with social links
- **`openLightbox()` / `closeLightbox()`** — Image zoom modal for certificates and photos
- **Scroll animations** — Intersection Observer for reveal-on-scroll effects

### `.gitignore`
Specifies files excluded from version control:
- Python cache files and the `download_assets.py` utility script
- OS-generated files (`.DS_Store`, `Thumbs.db`)
- IDE config folders (`.vscode/`, `.idea/`)

---

## 🚀 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/samueljohn369/samuel-john-portfolio.git
   cd samuel-john-portfolio
   ```

2. **Start a local server:**
   ```bash
   python -m http.server 8080
   ```

3. **Open in browser:**
   ```
   http://localhost:8080
   ```

> No build tools or package managers required — pure HTML/CSS/JS!

---

## 📌 Featured Projects

| Project | Description |
|---------|-------------|
| **Hand Gesture Controlling System** | Control system using hand gestures via computer vision |
| **Retail Sales Analytics** | Data analytics dashboard for retail sales insights |
| **Face QR Detector** | Real-time face and QR code detection system |
| **Customer Churn Analysis** | ML model to predict and analyze customer churn |

---

## 🏆 About Me

- 🎓 B.Tech graduate in **Computer Science & Data Science** — SCMS School of Engineering and Technology, Kochi
- 🏐 **National-level Netball player** — Represented Kerala at the 65th National School Games (2019-20)
- 🥇 **Best Student of the Year** — Scored 1200/1200 (100%) in +2 exams
- 🔬 Interested in **AI/ML, Data Analytics, Software Development, and Web Development**

---

## 📜 License

This project is open source and available under the MIT License.
