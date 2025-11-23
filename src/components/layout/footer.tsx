import Link from 'next/link';
import { Instagram, Twitter, Linkedin, Github, Mail, MapPin } from 'lucide-react';
import { Container } from './container';
import { Separator } from '@/components/ui/separator';
import { SITE_CONFIG } from '@/lib/constants';

const iconMap = {
    instagram: Instagram,
    twitter: Twitter,
    linkedin: Linkedin,
    github: Github,
};

/**
 * Footer component with links, social media, and contact info
 * Follows Atomic Design - Layout Organism
 */
export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t bg-muted/40 mt-auto">
            <Container>
                <div className="py-12 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                        {/* Brand Section */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-primary">
                                {SITE_CONFIG.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {SITE_CONFIG.description}
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                {SITE_CONFIG.links.navigation.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="font-semibold mb-4">Contact</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                    <a
                                        href={`mailto:${SITE_CONFIG.contact.email}`}
                                        className="hover:text-primary transition-colors"
                                    >
                                        {SITE_CONFIG.contact.email}
                                    </a>
                                </li>
                                {SITE_CONFIG.contact.address && (
                                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                        <span>{SITE_CONFIG.contact.address}</span>
                                    </li>
                                )}
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="font-semibold mb-4">Follow Us</h4>
                            <div className="flex gap-3">
                                {SITE_CONFIG.links.social.map((social) => {
                                    const Icon = iconMap[social.icon as keyof typeof iconMap];
                                    return (
                                        <a
                                            key={social.href}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-md bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                                            aria-label={social.label}
                                        >
                                            <Icon className="h-4 w-4" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <Separator className="my-8" />

                    {/* Copyright */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                        <p>
                            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-primary transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
