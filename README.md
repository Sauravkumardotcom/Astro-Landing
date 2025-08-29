# Landing Page Assignment

This is my developer assignment where I converted a Figma design into a responsive landing page using Next.js, Tailwind CSS, and JavaScript.  
The landing page also integrates mock APIs for the Hero section and Client Testimonials.

---

## Tech Stack

- Next.js (App Router)
- Tailwind CSS
- Swiper.js for testimonials carousel
- Lucide React for icons
- Mock APIs (using Next.js API routes)

---

## Features

1. **Hero Section**  
   - Content is fetched dynamically from a mock API (`/api/hero`).  
   - Handles loading and error states.  

2. **Client Testimonials**  
   - Data is fetched from `/api/testimonials`.  
   - Implemented as a responsive carousel using Swiper.js.  

3. **Stats, Services, and Offer Sections**  
   - Built as modular and reusable components.  
   - Fully responsive layout.  

4. **Dark Mode Support**  
   - Uses Tailwind’s dark mode configuration.  

---

## Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Sauravkumardotcom/Astro-Landing

2. Navigate into the project:
   ```bash
   cd my-project

3. Install dependencies:   
   ```bash
   npm install

4. Run the development server:
   ```bash
   npm run dev
5. Open your browser and go to:

   http://localhost:3000
   




**Project Structure**
src/
├─ app/
│ └─ page.js
│ └─ layout.js
│ └─ global.css
│ └─ provider.jsx
├─ components/
│ └─ landing/
│ | ├─ Hero.jsx
│ | ├─ Testimonials.jsx
│ | ├─ Stats.jsx
│ | ├─ Services.jsx
│ | └─ Offer.jsx
│ └─ ui/
│ | └─ button.jsx
│ └─ ThemeToggle.jsx
└─ pages/
│ └─ api/
│ ├─ hero.js
│ └─ testimonials.js
└─ lib/
└─ utils.js