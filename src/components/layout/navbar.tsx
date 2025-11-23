'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SITE_CONFIG } from '@/lib/constants';
import { useScroll } from '@/hooks/use-scroll';
import { Container } from './container';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/theme-toggle';

/**
 * Mobile navigation menu component
 * Uses Sheet component from shadcn/ui for slide-in drawer
 */
export function MobileMenu() {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                    {SITE_CONFIG.links.navigation.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                'text-lg font-medium transition-colors hover:text-primary',
                                pathname === link.href
                                    ? 'text-primary'
                                    : 'text-muted-foreground'
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

/**
 * Main navigation component
 * Features scroll-based styling and responsive menu
 */
export function Navbar() {
    const pathname = usePathname();
    const { scrolled } = useScroll(20);

    return (
        <header
            className={cn(
                'sticky top-0 z-50 w-full transition-all duration-300',
                scrolled
                    ? 'border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
                    : 'bg-transparent'
            )}
        >
            <Container>
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/images/logos/gsu.png"
                                alt="GSU Logo"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                            <Image
                                src="/images/logos/gsumathsoc.png"
                                alt="GSU Math Society Logo"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            GSU Matematik
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {SITE_CONFIG.links.navigation.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    'text-sm font-medium transition-colors hover:text-primary',
                                    pathname === link.href
                                        ? 'text-primary'
                                        : 'text-muted-foreground'
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side - Theme Toggle and Mobile Menu */}
                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        <MobileMenu />
                    </div>
                </div>
            </Container>
        </header>
    );
}
