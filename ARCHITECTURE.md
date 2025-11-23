# University Community Platform - Technical Documentation

## Architecture Overview

This project follows a meticulously structured architecture based on Atomic Design principles and clean code practices.

## Design Patterns

### Atomic Design Pattern

```
Atoms (ui/) → Molecules (features/) → Organisms (layout/) → Pages (app/)
```

**Atoms (src/components/ui/)**
- Basic building blocks (Button, Card, Badge, Avatar)
- No business logic
- Highly reusable
- Styled with Tailwind CSS

**Molecules (src/components/features/)**
- Combinations of atoms with specific purpose
- EventCard = Card + Badge + Icons + Event data
- BoardMemberCard = Avatar + Card + Social links
- Contains basic interactivity

**Organisms (src/components/layout/)**
- Complex components from molecules/atoms
- Navbar, Footer, EventGrid, MemberGrid
- Handle layout and composition

**Pages (src/app/)**
- Full pages assembled from organisms
- Route-specific logic
- Data fetching (currently mock data)

## File Organization

### Type Definitions Strategy

```typescript
// src/types/events.ts - Domain-specific types
export interface Event {
  id: string;
  title: string;
  // ... event-specific fields
}

// src/types/members.ts - Member types
export interface Member {
  id: string;
  name: string;
  // ... member-specific fields
}

// src/types/index.d.ts - Global/shared types
export interface SiteConfig {
  name: string;
  // ... site configuration
}
```

### Separation of Concerns

**Data Layer** (`src/lib/`)
- `constants.ts` - Static configuration
- `mock-data.ts` - Development data (replace with API)
- `utils.ts` - Pure utility functions

**UI Layer** (`src/components/`)
- Components receive data via props
- No direct data fetching in components
- Business logic separated from presentation

**Routing Layer** (`src/app/`)
- Server/Client component decisions
- Data fetching coordination
- Page-level metadata

## Component Patterns

### Data-Driven Components

❌ **Avoid:**
```typescript
function EventCard() {
  return <h1>Math Workshop</h1>; // Hardcoded
}
```

✅ **Prefer:**
```typescript
interface EventCardProps {
  event: Event;
}

function EventCard({ event }: EventCardProps) {
  return <h1>{event.title}</h1>; // Data-driven
}
```

### Prop Interface Convention

```typescript
// Always define props interface
interface ComponentNameProps {
  required: string;
  optional?: number;
  children?: React.ReactNode;
}

// Use TypeScript for type safety
export function ComponentName({
  required,
  optional = 10
}: ComponentNameProps) {
  // Implementation
}
```

### Composition Over Inheritance

```typescript
// Good: Composable components
<Card>
  <CardHeader>
    <CardTitle>{title}</CardTitle>
  </CardHeader>
  <CardContent>{content}</CardContent>
</Card>

// Better: Reusable patterns
<EventCard event={event} />
```

## State Management

### Client vs Server Components

```typescript
// Server Component (default)
export default function Page() {
  // Can directly access backend
  // Better performance
  return <StaticContent />;
}

// Client Component (when needed)
'use client';
export function InteractiveWidget() {
  const [state, setState] = useState();
  return <DynamicContent />;
}
```

### When to Use Client Components

- User interactions (onClick, onChange)
- Browser APIs (localStorage, window)
- React hooks (useState, useEffect)
- Third-party libraries requiring browser

### Current State Architecture

```
Server Components: Most pages, static content
Client Components: Navbar (scroll), FilterBar (search), HeroSection (animation)
```

## Styling Strategy

### Tailwind CSS Best Practices

```typescript
// Use cn() utility for conditional classes
import { cn } from '@/lib/utils';

className={cn(
  'base-classes',
  condition && 'conditional-classes',
  className // Allow override
)}
```

### Design Tokens

All colors defined in `globals.css`:
```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
}
```

Used in Tailwind:
```html
<div className="bg-primary text-primary-foreground">
```

## Routing Strategy

### App Router Structure

```
app/
├── layout.tsx          # Root layout (Navbar + Footer)
├── page.tsx            # Landing page (/)
├── events/
│   ├── page.tsx        # Events list (/events)
│   └── [slug]/
│       └── page.tsx    # Event detail (/events/calculus-workshop)
└── about/
    └── page.tsx        # About page (/about)
```

### Dynamic Routes

```typescript
// Generate static paths at build time
export async function generateStaticParams() {
  return UPCOMING_EVENTS.map((event) => ({
    slug: event.slug,
  }));
}

// Page receives params
export default function EventPage({ params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug);
  return <EventDetail event={event} />;
}
```

## Data Flow

### Current (Development)

```
mock-data.ts → Page Component → Feature Component → UI Component
```

### Future (Production)

```
API/Database → Server Action → Page Component → Feature Component → UI Component
```

### Migration Path

1. Keep interface definitions unchanged
2. Replace mock data imports with API calls
3. Add loading/error states
4. Implement caching strategy

Example:
```typescript
// Current
import { UPCOMING_EVENTS } from '@/lib/mock-data';

// Future
const events = await fetchEvents();
// Interface Event stays the same!
```

## Performance Optimization

### Image Optimization

```typescript
import Image from 'next/image';

<Image
  src="/images/event.jpg"
  alt="Event"
  width={400}
  height={300}
  priority={isFeatured}
/>
```

### Code Splitting

```typescript
// Automatic with App Router
// Each route is its own bundle
// Components lazy-loaded as needed
```

### Caching Strategy

```typescript
// Static pages cached indefinitely
export const revalidate = false;

// Dynamic content revalidated
export const revalidate = 3600; // 1 hour
```

## Testing Strategy (Future)

### Unit Tests
- Test utilities (`utils.ts`)
- Test pure functions
- Mock external dependencies

### Component Tests
- Test UI components in isolation
- Verify prop handling
- Test user interactions

### Integration Tests
- Test page rendering
- Test navigation flow
- Test data flow

## Security Considerations

### Input Validation
```typescript
// Validate user input
function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

### XSS Prevention
- Next.js escapes content by default
- Use `dangerouslySetInnerHTML` only when necessary
- Sanitize markdown/HTML content

### Environment Variables
```bash
# .env.local (never commit)
DATABASE_URL=...
API_KEY=...
```

## Accessibility (a11y)

### Semantic HTML
```typescript
<nav>              // Navigation
<main>             // Main content
<article>          // Event details
<button>           // Interactive elements
```

### ARIA Labels
```typescript
<button aria-label="Close menu">
  <X className="h-4 w-4" />
</button>
```

### Keyboard Navigation
- All interactive elements focusable
- Tab order logical
- Escape key closes modals

## Deployment Checklist

- [ ] Environment variables configured
- [ ] Fonts loaded correctly
- [ ] Images optimized
- [ ] API endpoints configured
- [ ] Error boundaries implemented
- [ ] Loading states added
- [ ] Analytics integrated
- [ ] SEO metadata complete
- [ ] Performance tested
- [ ] Accessibility audited

## Maintenance Guidelines

### Adding New Features

1. **Define Types First**
   ```typescript
   // src/types/newfeature.ts
   export interface NewFeature { }
   ```

2. **Add Mock Data**
   ```typescript
   // src/lib/mock-data.ts
   export const NEW_FEATURES: NewFeature[] = [];
   ```

3. **Create Components**
   ```typescript
   // Atom → Molecule → Organism → Page
   ```

4. **Update Constants**
   ```typescript
   // Add to navigation, categories, etc.
   ```

### Code Review Checklist

- [ ] TypeScript types defined
- [ ] Props interface documented
- [ ] No hardcoded text/data
- [ ] Responsive design tested
- [ ] Accessibility considered
- [ ] Performance optimized
- [ ] Error handling present
- [ ] Comments for complex logic

## Future Enhancements

### Phase 1: Backend Integration
- Replace mock data with API calls
- Implement authentication
- Add database integration

### Phase 2: Advanced Features
- Event registration system
- User profiles
- Email notifications
- Calendar integration

### Phase 3: Admin Features
- Content management system
- Analytics dashboard
- User management

### Phase 4: Advanced UX
- Real-time updates
- Progressive Web App
- Offline support
- Push notifications

---

**Last Updated:** November 2025
**Version:** 1.0.0
