import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, MapPin, Users, Clock, ArrowLeft, ExternalLink } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { UPCOMING_EVENTS } from '@/lib/mock-data';
import { CATEGORY_COLORS, CATEGORY_LABELS } from '@/lib/constants';
import { formatDate, formatTime } from '@/lib/utils';

interface EventPageProps {
    params: Promise<{
        slug: string;
    }>;
}

/**
 * Dynamic event detail page
 * Shows full event information with registration option
 */
export default async function EventPage({ params }: EventPageProps) {
    const { slug } = await params;
    const event = UPCOMING_EVENTS.find((e) => e.slug === slug);

    if (!event) {
        notFound();
    }

    const categoryColor = CATEGORY_COLORS[event.category];
    const categoryLabel = CATEGORY_LABELS[event.category];

    return (
        <div className="py-16">
            <Container size="small">
                {/* Back Button */}
                <Button variant="ghost" asChild className="mb-6">
                    <Link href="/events" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Events
                    </Link>
                </Button>

                {/* Event Header */}
                <div className="mb-8">
                    <Badge className={categoryColor} variant="secondary">
                        {categoryLabel}
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">{event.title}</h1>
                    <p className="text-xl text-muted-foreground">{event.description}</p>
                </div>

                {/* Event Details Card */}
                <Card className="mb-8">
                    <CardContent className="pt-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                                    <div>
                                        <p className="font-semibold">Date & Time</p>
                                        <p className="text-muted-foreground">
                                            {formatDate(event.date)} at {formatTime(event.time)}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                                    <div>
                                        <p className="font-semibold">Location</p>
                                        <p className="text-muted-foreground">{event.location}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {event.capacity && event.attendees && (
                                    <div className="flex items-start gap-3">
                                        <Users className="h-5 w-5 text-primary mt-0.5" />
                                        <div>
                                            <p className="font-semibold">Capacity</p>
                                            <p className="text-muted-foreground">
                                                {event.attendees} / {event.capacity} registered
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-start gap-3">
                                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                                    <div>
                                        <p className="font-semibold">Organizer</p>
                                        <p className="text-muted-foreground">{event.organizer}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {event.registrationUrl && (
                            <>
                                <Separator className="my-6" />
                                <Button size="lg" asChild className="w-full">
                                    <a
                                        href={event.registrationUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2"
                                    >
                                        Register for Event
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                </Button>
                            </>
                        )}
                    </CardContent>
                </Card>

                {/* Tags */}
                {event.tags && event.tags.length > 0 && (
                    <div>
                        <h3 className="font-semibold mb-3">Topics</h3>
                        <div className="flex flex-wrap gap-2">
                            {event.tags.map((tag) => (
                                <Badge key={tag} variant="outline">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );
}

/**
 * Generate static params for all events
 */
export async function generateStaticParams() {
    return UPCOMING_EVENTS.map((event) => ({
        slug: event.slug,
    }));
}
