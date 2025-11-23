# GSU Math Community Platform - Installation & Setup Guide

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.17 or later
- **npm** or **yarn** or **pnpm**
- **Git** (for version control)

## 🚀 Quick Start

### 1. Install Dependencies

Navigate to the project directory and install all required packages:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Download Required Fonts

The project uses Geist fonts. Download them from:
- [Geist Sans & Mono](https://vercel.com/font)

Place the font files in:
- `src/app/fonts/GeistVF.woff`
- `src/app/fonts/GeistMonoVF.woff`

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
gsumath/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (landing)/         # Landing page route group
│   │   ├── events/            # Events listing & details
│   │   ├── about/             # About page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── ui/               # shadcn/ui primitives (atoms)
│   │   ├── layout/           # Layout components (organisms)
│   │   └── features/         # Feature components (molecules)
│   ├── lib/
│   │   ├── utils.ts          # Utility functions
│   │   ├── constants.ts      # Site configuration
│   │   └── mock-data.ts      # Mock data for development
│   ├── types/                # TypeScript type definitions
│   └── hooks/                # Custom React hooks
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## 🎨 Customization

### Update Site Information

Edit `src/lib/constants.ts` to update:
- Site name and description
- Navigation links
- Social media URLs
- Contact information

```typescript
export const SITE_CONFIG: SiteConfig = {
  name: 'Your Community Name',
  description: 'Your description',
  // ... other settings
};
```

### Add/Modify Events

Edit `src/lib/mock-data.ts`:

```typescript
export const UPCOMING_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Your Event',
    description: 'Event description',
    date: '2025-12-05',
    time: '18:00',
    location: 'Your Location',
    category: 'workshop',
    slug: 'your-event-slug',
    // ... other fields
  },
];
```

### Add Board Members

Edit `src/lib/mock-data.ts`:

```typescript
export const BOARD_MEMBERS: Member[] = [
  {
    id: '1',
    name: 'Member Name',
    role: 'president',
    position: 'President',
    bio: 'Member biography',
    // ... other fields
  },
];
```

### Modify Theme Colors

Edit `src/app/globals.css` to customize CSS variables:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  /* ... other colors */
}
```

## 🏗️ Building for Production

### 1. Build the Application

```bash
npm run build
```

### 2. Test Production Build Locally

```bash
npm start
```

### 3. Deploy

The application can be deployed to:

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`

#### Self-Hosted
1. Build the application
2. Copy the `.next` folder and `public` folder
3. Run with Node.js: `node .next/standalone/server.js`

## 🔧 Development Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📦 Adding New Pages

### Create a new route:

```typescript
// src/app/newpage/page.tsx
import { Container } from '@/components/layout/container';

export default function NewPage() {
  return (
    <div className="py-16">
      <Container>
        <h1>New Page</h1>
      </Container>
    </div>
  );
}
```

### Add to navigation:

```typescript
// src/lib/constants.ts
navigation: [
  { label: 'New Page', href: '/newpage' },
]
```

## 🎯 Key Features

### ✅ Implemented
- ✅ Responsive navigation with mobile menu
- ✅ Event listing with filtering and search
- ✅ Dynamic event detail pages
- ✅ Board member showcase
- ✅ About page with mission and values
- ✅ Animated hero section
- ✅ Type-safe TypeScript throughout
- ✅ Atomic Design component structure

### 🔄 Ready for Integration
- Backend API connection (replace mock data)
- User authentication
- Event registration system
- Admin dashboard
- Database integration

## 🐛 Troubleshooting

### TypeScript Errors After Installation
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### Font Not Loading
Ensure font files are placed in `src/app/fonts/` directory and paths in `layout.tsx` are correct.

### Build Errors
```bash
# Check Node.js version
node --version  # Should be 18.17 or higher

# Clear Next.js cache
rm -rf .next
npm run build
```

## 📚 Tech Stack Reference

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Headless UI components
- **Lucide React** - Icon library
- **Framer Motion** - Animation library

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is part of a university initiative.

## 💡 Tips

- Use `cn()` utility from `@/lib/utils` to merge Tailwind classes
- All data is in `mock-data.ts` - replace with API calls when backend is ready
- Components follow Atomic Design: ui/ (atoms) → features/ (molecules) → layout/ (organisms)
- TypeScript types are in `src/types/` - extend as needed

---

For questions or support, contact: info@gsumath.edu
