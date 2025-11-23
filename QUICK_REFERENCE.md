# 🚀 Quick Reference Guide

## Essential Commands

```bash
# Development
npm install              # Install dependencies
npm run dev             # Start dev server (http://localhost:3000)
npm run build           # Build for production
npm start               # Run production build
npm run lint            # Check code quality

# Deployment
vercel                  # Deploy to Vercel
netlify deploy         # Deploy to Netlify
```

## File Locations Cheat Sheet

```
📁 Update Content
├── src/lib/constants.ts        → Site name, links, contact
├── src/lib/mock-data.ts        → Events, members, stats
└── src/app/globals.css         → Colors, theme

📁 Add Components
├── src/components/ui/          → Reusable UI elements
├── src/components/features/    → Feature-specific components
└── src/components/layout/      → Layout components

📁 Add Pages
└── src/app/newpage/page.tsx   → New route

📁 Add Types
└── src/types/newtype.ts       → TypeScript interfaces

📁 Add Images
├── public/images/events/       → Event photos
└── public/images/team/         → Team photos
```

## Common Tasks

### Add New Event
```typescript
// src/lib/mock-data.ts
export const UPCOMING_EVENTS: Event[] = [
  {
    id: 'unique-id',
    title: 'Event Name',
    description: 'Event description',
    date: '2025-12-05',
    time: '18:00',
    location: 'Room 101',
    category: 'workshop', // academic|social|workshop|sports|cultural|career|volunteer
    slug: 'event-name-slug',
    organizer: 'Organizer Name',
    capacity: 30,
    attendees: 15,
    tags: ['tag1', 'tag2'],
  },
  // ... existing events
];
```

### Add New Board Member
```typescript
// src/lib/mock-data.ts
export const BOARD_MEMBERS: Member[] = [
  {
    id: 'unique-id',
    name: 'Full Name',
    role: 'president', // president|vice-president|secretary|treasurer|coordinator|member
    position: 'Position Title',
    bio: 'Short biography',
    department: 'Department',
    year: 4,
    email: 'email@gsu.edu',
    links: {
      linkedin: 'https://linkedin.com/in/username',
      github: 'https://github.com/username',
    },
    image: '/images/team/photo.jpg',
  },
  // ... existing members
];
```

### Add Navigation Link
```typescript
// src/lib/constants.ts
export const SITE_CONFIG: SiteConfig = {
  // ...
  links: {
    navigation: [
      { label: 'New Page', href: '/newpage' },
      // ... existing links
    ],
  },
};
```

### Change Theme Colors
```css
/* src/app/globals.css */
:root {
  --primary: 221.2 83.2% 53.3%;     /* Blue */
  --secondary: 210 40% 96.1%;       /* Light gray */
  /* Change these HSL values */
}
```

## Component Usage Examples

### Button
```tsx
import { Button } from '@/components/ui/button';

<Button variant="default">Click Me</Button>
<Button variant="outline">Outline</Button>
<Button size="lg">Large</Button>
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>
```

### EventCard
```tsx
import { EventCard } from '@/components/features/events/event-card';

<EventCard event={eventObject} />
```

### Container
```tsx
import { Container } from '@/components/layout/container';

<Container>
  <h1>Centered content</h1>
</Container>

<Container size="small">Narrow</Container>
<Container size="large">Wide</Container>
```

## Styling Quick Reference

### Tailwind Classes
```tsx
// Spacing
className="p-4 m-2 gap-3"        // padding, margin, gap

// Layout
className="flex flex-col"         // flexbox column
className="grid grid-cols-3"      // 3-column grid

// Responsive
className="text-sm md:text-lg"    // small on mobile, large on desktop

// Colors
className="text-primary"          // theme primary color
className="bg-muted"              // muted background

// Dark mode
className="dark:text-white"       // white text in dark mode
```

### Using cn() Utility
```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  'base-classes',
  isActive && 'active-classes',
  className  // allow prop override
)} />
```

## TypeScript Patterns

### Define Component Props
```tsx
interface MyComponentProps {
  title: string;
  count?: number;              // optional
  onClick: () => void;         // function
  children?: React.ReactNode;  // child elements
}

export function MyComponent({
  title,
  count = 0,               // default value
  onClick,
  children
}: MyComponentProps) {
  // ...
}
```

### Import Types
```tsx
import type { Event } from '@/types/events';
import type { Member } from '@/types/members';
```

## Routing Patterns

### Link to Another Page
```tsx
import Link from 'next/link';

<Link href="/events">Events</Link>
```

### Dynamic Route
```tsx
// File: app/events/[slug]/page.tsx
interface PageProps {
  params: { slug: string };
}

export default function Page({ params }: PageProps) {
  // params.slug available here
}
```

## Data Fetching (Future)

### Replace Mock Data
```tsx
// Current (mock data)
import { UPCOMING_EVENTS } from '@/lib/mock-data';

// Future (API)
async function getEvents() {
  const res = await fetch('https://api.example.com/events');
  return res.json();
}

export default async function EventsPage() {
  const events = await getEvents();
  return <EventGrid events={events} />;
}
```

## Environment Setup

### Create .env.local
```bash
# Never commit this file!
DATABASE_URL=your_database_url
API_KEY=your_api_key
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

### Use in Code
```tsx
// Server-side only
const dbUrl = process.env.DATABASE_URL;

// Client-side (must start with NEXT_PUBLIC_)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
```

## Debugging Tips

### Check for Errors
```bash
npm run lint           # ESLint errors
npm run build          # Build errors
```

### Common Fixes
```bash
# Clear cache
rm -rf .next node_modules
npm install

# Type errors
npm run build          # See all TypeScript errors

# Port already in use
# Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

## Git Workflow

```bash
# Initial setup
git init
git add .
git commit -m "Initial commit"

# Create feature branch
git checkout -b feature/new-feature

# Commit changes
git add .
git commit -m "Add new feature"

# Push to GitHub
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

## Deployment Quick Start

### Vercel (Recommended)
```bash
npm i -g vercel
vercel login
vercel
```

### Manual Deploy
1. Build: `npm run build`
2. Upload `.next/` and `public/` folders
3. Run: `npm start`

## Performance Checklist

- [ ] Images optimized (use next/image)
- [ ] Unused dependencies removed
- [ ] Build warnings resolved
- [ ] Lighthouse score > 90
- [ ] Meta tags configured

## Accessibility Checklist

- [ ] All images have alt text
- [ ] Semantic HTML used
- [ ] Keyboard navigation works
- [ ] ARIA labels present
- [ ] Color contrast sufficient

---

## Need Help?

1. **Installation**: See `INSTALLATION.md`
2. **Architecture**: See `ARCHITECTURE.md`
3. **Overview**: See `PROJECT_SUMMARY.md`
4. **Code Comments**: Check inline documentation

---

**Tip**: Bookmark this file for quick reference during development!
