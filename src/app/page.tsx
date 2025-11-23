'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/features/hero/hero-section';
import { EventGrid } from '@/components/features/events/event-grid';
import { Container } from '@/components/layout/container';
import { UPCOMING_EVENTS, COMMUNITY_STATS } from '@/lib/mock-data';
import { ArrowRight, Users, Calendar, BookOpen, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

/**
 * Landing page - Home route
 * Showcases hero, featured events, stats, and CTAs
 */
export default function HomePage() {
    const featuredEvents = UPCOMING_EVENTS.slice(0, 3);

    return (
        <div>
            {/* Hero Section */}
            <HeroSection
                title="Matematik Topluluğu'na Hoş Geldiniz"
                subtitle="Galatasaray Üniversitesi"
                description="Matematik meraklılarından oluşan canlı bir topluluğa katılın. Atölyelere katılın, projelerde iş birliği yapın ve kalıcı bağlantılar kurun."
                primaryCTA={{
                    label: 'Etkinlikleri Keşfet',
                    href: '/events',
                }}
                secondaryCTA={{
                    label: 'Hakkımızda',
                    href: '/about',
                }}
            />

            {/* Stats Section */}
            <section className="py-20 bg-muted/20">
                <Container>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        <Card className="border-none shadow-lg">
                            <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                                <Users className="h-10 w-10 text-primary mb-3" />
                                <p className="text-4xl font-bold mb-1">{COMMUNITY_STATS.activeMembers}+</p>
                                <p className="text-sm text-muted-foreground font-medium">Aktif Üye</p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-lg">
                            <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                                <Calendar className="h-10 w-10 text-primary mb-3" />
                                <p className="text-4xl font-bold mb-1">{COMMUNITY_STATS.eventsPerSemester}+</p>
                                <p className="text-sm text-muted-foreground font-medium">Etkinlik/Yarıyıl</p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-lg">
                            <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                                <BookOpen className="h-10 w-10 text-primary mb-3" />
                                <p className="text-4xl font-bold mb-1">{COMMUNITY_STATS.studyHoursOffered}</p>
                                <p className="text-sm text-muted-foreground font-medium">Çalışma Saati</p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-lg">
                            <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                                <TrendingUp className="h-10 w-10 text-primary mb-3" />
                                <p className="text-4xl font-bold mb-1">{COMMUNITY_STATS.successRate}%</p>
                                <p className="text-sm text-muted-foreground font-medium">Başarı Oranı</p>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </section>

            {/* Featured Events Section */}
            <section className="py-24">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Yaklaşan Etkinlikler</h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Matematik yolculuğunuzu geliştirmek için tasarlanmış ilgi çekici atölyelere katılın.
                        </p>
                    </div>
                    <EventGrid events={featuredEvents} />
                    <div className="text-center mt-12">
                        <Button size="lg" asChild className="shadow-lg">
                            <Link href="/events" className="inline-flex items-center gap-2">
                                Tüm Etkinlikleri Gör
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Topluluğumuza Katıl
                        </h2>
                        <p className="text-xl mb-10 opacity-95">
                            Matematik yolculuğunuzu desteklemek için buradayız. Birlikte öğrenelim, gelişelim.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" asChild className="shadow-lg">
                                <Link href="/about">Hakkımızda</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="bg-transparent border-2 hover:bg-white/10 shadow-lg">
                                <Link href="/contact">İletişim</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
