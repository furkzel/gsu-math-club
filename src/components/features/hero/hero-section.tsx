'use client';

import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface HeroSectionProps {
    title: string;
    subtitle: string;
    description: string;
    primaryCTA?: {
        label: string;
        href: string;
    };
    secondaryCTA?: {
        label: string;
        href: string;
    };
}

/**
 * Hero section component for landing page
 * Features animated content and call-to-action buttons
 * Follows Atomic Design - Organism
 */
export function HeroSection({
    title,
    subtitle,
    description,
    primaryCTA,
    secondaryCTA,
}: HeroSectionProps) {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 -z-10" />

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-primary font-semibold mb-4"
                    >
                        {subtitle}
                    </motion.p>

                    {/* Main title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-balance"
                    >
                        {title}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg md:text-xl text-muted-foreground mb-8 text-balance"
                    >
                        {description}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        {primaryCTA && (
                            <Button size="lg" asChild>
                                <Link href={primaryCTA.href} className="flex items-center gap-2">
                                    {primaryCTA.label}
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        )}
                        {secondaryCTA && (
                            <Button size="lg" variant="outline" asChild>
                                <Link href={secondaryCTA.href} className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    {secondaryCTA.label}
                                </Link>
                            </Button>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
