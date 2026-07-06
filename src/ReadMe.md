# Personal Website Landing Page Architecture

This document outlines the folder structure and implementation details for the personal website landing page using Next.js (App Router) and Tailwind CSS.

## 📂 Folder Structure

```text
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx                 # Imports all sections here
└── sections/
└── home/
├── topbar/
│   └── index.tsx        # Navigation, Logo, Theme switcher
├── hero/
│   └── index.tsx        # Introduction, CTA, Profile Picture
├── highlights/
│   └── index.tsx        # Social proof, Stats, Company logos
├── featured-articles/
│   └── index.tsx        # Recent/Top blog posts
├── experiences/
│   └── index.tsx        # Work history timeline
├── contact/
│   └── index.tsx        # Reach out methods, Social links
└── footer/
└── index.tsx        # Copyright, minor links

---

## 🧩 Section Implementations

### 1. Topbar (`src/sections/home/topbar/index.tsx`)
**Purpose:** Global navigation and user preferences.
**What to include:**
*   **Logo/Brand:** Your Name (e.g., "John Doe" or a stylized "JD").
*   **Navigation Links:** Array of links `[{ label: 'Articles', href: '#articles' }, { label: 'Experience', href: '#experience' }, { label: 'Contact', href: '#contact' }]`.
*   **Actions:** Dark/Light Theme Switcher icon, and optionally a "Resume" download button.

tsx
// Example Skeleton
export default function Topbar() {
  const links = [
{ name: 'Articles', href: '#articles' },
{ name: 'Experience', href: '#experience' },
{ name: 'Contact', href: '#contact' },
  ];

  return (
<header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800">
<div className="container mx-auto px-4 h-16 flex items-center justify-between">
<div className="font-bold text-xl tracking-tighter">Your Name</div>
<nav className="hidden md:flex gap-6">
{links.map((link) => (
<a key={link.name} href={link.href} className="text-sm font-medium hover:text-blue-500 transition-colors">
{link.name}
</a>
))}
</nav>
<div>
{/* Theme Switcher Component Here */}
<button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">🌓</button>
</div>
</div>
</header>
  );
}

### 2. Hero (`src/sections/home/hero/index.tsx`)
**Purpose:** First impression and primary value proposition.
**What to include:**
*   **Greeting:** "Hi, I'm [Name]"
*   **Headline:** High-impact statement of what you do (e.g., "Building digital products with React & Node.js").
*   **Sub-headline:** 1-2 sentences about your passion or current status.
*   **Call to Action (CTA):** Primary button ("Get in touch"), Secondary button ("View GitHub").
*   **Visual:** Professional headshot, avatar, or an abstract 3D element.

### 3. Highlights / Proof (`src/sections/home/highlights/index.tsx`)
**Purpose:** Build trust instantly.
**What to include:**
*   **Stats Array:** `[{ label: 'Years Experience', value: '5+' }, { label: 'Projects Shipped', value: '30+' }]`.
*   **Logos:** Grayscale logos of companies you've worked for, clients, or open-source projects you've contributed to.
*   *Tip:* Use a flex container with `justify-between` or a CSS grid, keeping opacity slightly lowered for a sleek look.

### 4. Featured Articles (`src/sections/home/featured-articles/index.tsx`)
**Purpose:** Showcase your knowledge and writing.
**What to include:**
*   **Section Title:** "Latest Writing" or "Featured Articles".
*   **Cards Grid:** Display 2 to 3 cards.
*   **Card Data:** Title, brief excerpt (2 lines max), publication date, and reading time.
*   **Link:** "Read all articles ->" linking to your blog page.

### 5. Experiences (`src/sections/home/experiences/index.tsx`)
**Purpose:** Detail your professional journey.
**What to include:**
*   **Layout:** A vertical timeline or clean list.
*   **Experience Item:**
*   Job Title
*   Company Name & Logo
*   Duration (e.g., "Jan 2022 - Present")
*   Key achievements (bullet points, limit to 2-3 per role).

### 6. Contact (`src/sections/home/contact/index.tsx`)
**Purpose:** Make it frictionless to reach you.
**What to include:**
*   **Header:** "Let's work together" or "Say Hello".
*   **Email Link:** A large, highly visible `mailto:` link.
*   **Social Array:** Icons linking to GitHub, LinkedIn, Twitter/X.
*   *(Optional)*: A simple form (Name, Email, Message) using a service like Formspree or Resend.

### 7. Footer (`src/sections/home/footer/index.tsx`)
**Purpose:** Page conclusion.
**What to include:**
*   **Copyright:** `© {new Date().getFullYear()} Your Name. All rights reserved.`
*   **Built with:** "Built with Next.js & Tailwind CSS" (optional, but nice for dev sites).

---

## 🏗️ Assembling the Page (`src/app/page.tsx`)

Once all sections are created, stitch them together in your main page file.

tsx
import Topbar from '@/sections/home/topbar';
import Hero from '@/sections/home/hero';
import Highlights from '@/sections/home/highlights';
import FeaturedArticles from '@/sections/home/featured-articles';
import Experiences from '@/sections/home/experiences';
import Contact from '@/sections/home/contact';
import Footer from '@/sections/home/footer';

export default function HomePage() {
  return (
<div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 flex flex-col">
<Topbar />

<main className="flex-1 flex flex-col gap-24 md:gap-32 py-12 md:py-24">
<Hero />
<Highlights />
<FeaturedArticles />
<Experiences />
<Contact />
</main>

<Footer />
</div>
  );
}

## 💡 Clean Code Best Practices for this Setup
1. **Data Separation:** Create a `src/lib/data.ts` or `src/config/site.ts` file to hold your static data (links, experiences, articles). Do not hardcode massive arrays directly into the React components.
2. **Reusable Components:** If you notice your "Section Title" or "Card" looks the same across Featured Articles and Experiences, extract them into a `src/components/ui/` folder.
3. **Responsive Design:** Use Tailwind's `md:` and `lg:` prefixes to ensure sections look good on mobile first, then expand for desktop.
```
