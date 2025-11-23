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
                title="Galatasaray Üniversitesi Matematik Topluluğu'na Hoş Geldiniz"
                subtitle="Bağlanın. Öğrenin. Birlikte Büyüyün."
                description="Matematik meraklılarından oluşan canlı bir topluluğa katılın. Atölyelere katılın, projelerde iş birliği yapın ve diğer öğrenciler ve öğretim üyeleriyle kalıcı bağlantılar kurun."
                primaryCTA={{
                    label: 'Etkinlikleri Keşfedin',
                    href: '/events',
                }}
                secondaryCTA={{
                    label: 'Takvimi Görüntüle',
                    href: '/events',
                }}
            />

            {/* Stats Section */}
            <section className="py-16 bg-muted/40">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                                <Users className="h-8 w-8 text-primary mb-2" />
                                <p className="text-3xl font-bold">{COMMUNITY_STATS.activeMembers}+</p>
                                <p className="text-sm text-muted-foreground">Aktif Üyeler</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                                <Calendar className="h-8 w-8 text-primary mb-2" />
                                <p className="text-3xl font-bold">{COMMUNITY_STATS.eventsPerSemester}+</p>
                                <p className="text-sm text-muted-foreground">Etkinlikler/Yarıyıl</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                                <BookOpen className="h-8 w-8 text-primary mb-2" />
                                <p className="text-3xl font-bold">{COMMUNITY_STATS.studyHoursOffered}</p>
                                <p className="text-sm text-muted-foreground">Çalışma Saatleri</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                                <p className="text-3xl font-bold">{COMMUNITY_STATS.successRate}%</p>
                                <p className="text-sm text-muted-foreground">Başarı Oranı</p>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </section>

            {/* Featured Events Section */}
            <section className="py-20">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Yaklaşan Etkinlikler</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Matematik yolculuğunuzu geliştirmek için tasarlanmış ilgi çekici atölyelere, çalışma oturumlarına ve sosyal etkinliklere katılın.
                        </p>
                    </div>
                    <EventGrid events={featuredEvents} />
                    <div className="text-center mt-8">
                        <Button size="lg" asChild>
                            <Link href="/events" className="flex items-center gap-2">
                                Tüm Etkinlikleri Görüntüle
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Topluluğumuza Katılmaya Hazır mısınız?
                        </h2>
                        <p className="text-lg mb-8 opacity-90">
                            İster kalkülüsle mücadele ediyor olun, ister ileri konuları keşfediyor olun, matematik yolculuğunuzu desteklemek için buradayız.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/about">Hakkımızda Daha Fazla Bilgi Edinin</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="bg-transparent hover:bg-primary-foreground/10">
                                <Link href="/contact">İletişime Geçin</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
