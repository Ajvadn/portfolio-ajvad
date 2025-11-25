# AJVAD N. - Cybersecurity Analyst Portfolio

A modern, high-performance personal portfolio website built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). This portfolio showcases my journey as a Cybersecurity Analyst and Ethical Hacker, featuring my projects, certifications, and educational background.

Live Preview : https://vercel.com/ajvadns-projects/portfolio-ajvad/8umvzTMLhmMxAkQGPzMrGqs4s41h

## 🚀 Features

-   **Modern "Midnight Slate" Theme**: A sleek, dark-themed design optimized for visual comfort and professional appeal.
-   **Interactive Animations**:
    -   **Glitch Effect**: Applied to the main heading for a cyberpunk/security aesthetic.
    -   **Typewriter Effect**: Dynamic text animation in the hero section.
    -   **Scroll Reveal**: Smooth fade-in and slide-up animations as you scroll.
-   **Responsive Design**: Fully responsive layout that looks great on mobile, tablet, and desktop devices.
-   **Performance First**: Built with Astro for lightning-fast load times and minimal JavaScript.
-   **Modular Components**: Clean code structure using Astro components for easy maintenance and scalability.

## 🛠️ Tech Stack

-   **Framework**: [Astro](https://astro.build)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com)
-   **Icons**: [Lucide React](https://lucide.dev)
-   **Fonts**: [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts)

## 📂 Project Structure

```text
/
├── public/             # Static assets (images, favicon, resume)
├── src/
│   ├── components/     # Reusable UI components (Hero, About, Projects, etc.)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Application pages (index.astro)
│   └── styles/         # Global styles (CSS variables, animations)
├── astro.config.mjs    # Astro configuration
└── tailwind.config.mjs # Tailwind CSS configuration
```

## 💻 Getting Started

### Prerequisites

-   Node.js (v18.14.1 or higher)
-   npm, pnpm, or yarn

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Ajvadn/portfolio-ajvad.git
    cd portfolio-ajvad
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:4321`.

### Building for Production

To create a production build:

```bash
npm run build
```

The output will be in the `dist/` directory, ready for deployment.

## 📝 Customization

-   **Personal Details**: Update `src/components/Hero.astro`, `About.astro`, and `Contact.astro`.
-   **Projects**: Edit the `projects` array in `src/components/Projects.astro`.
-   **Certifications**: Update `src/components/Certifications.astro`.
-   **Education**: Update `src/components/Education.astro`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Designed & Built by **Ajvad N.**
