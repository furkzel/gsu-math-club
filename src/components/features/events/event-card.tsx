import Link from 'next/link';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Event } from '@/types/events';
import { CATEGORY_COLORS, CATEGORY_LABELS } from '@/lib/constants';
import { formatDate, formatTime } from '@/lib/utils';

interface EventCardProps {
    event: Event;
}

/**
 * Event card component displaying event details
 * Combines Card + Badge + Icon components
 * Follows Atomic Design - Molecule
 */
export function EventCard({ event }: EventCardProps) {
    const categoryColor = CATEGORY_COLORS[event.category];
    const categoryLabel = CATEGORY_LABELS[event.category];

    return (
        <Card className="group hover:shadow-xl transition-all duration-300 h-full flex flex-col border-2 hover:border-primary/50">
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-3">
                    <Badge className={categoryColor} variant="secondary">
                        {categoryLabel}
                    </Badge>
                    {event.capacity && event.attendees && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                            <Users className="h-3 w-3" />
                            <span className="font-medium">{event.attendees}/{event.capacity}</span>
                        </div>
                    )}
                </div>
                <CardTitle className="line-clamp-2 text-xl group-hover:text-primary transition-colors leading-tight">
                    {event.title}
                </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 pb-4">
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
                    {event.description}
                </p>

                <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="font-medium">{formatDate(event.date)}</span>
                        <span className="text-muted-foreground">·</span>
                        <span>{formatTime(event.time)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="line-clamp-1">{event.location}</span>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="pt-0">
                <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    <Link href={`/events/${event.slug}`} className="flex items-center justify-center gap-2">
                        Detayları Gör
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
