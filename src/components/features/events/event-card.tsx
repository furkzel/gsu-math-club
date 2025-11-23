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
        <Card className="group hover:shadow-lg transition-all duration-300 h-full flex flex-col">
            <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge className={categoryColor} variant="secondary">
                        {categoryLabel}
                    </Badge>
                    {event.capacity && event.attendees && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Users className="h-3 w-3" />
                            <span>{event.attendees}/{event.capacity}</span>
                        </div>
                    )}
                </div>
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {event.title}
                </CardTitle>
            </CardHeader>

            <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {event.description}
                </p>

                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{formatDate(event.date)} at {formatTime(event.time)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="line-clamp-1">{event.location}</span>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="pt-0">
                <Button asChild variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Link href={`/events/${event.slug}`} className="flex items-center justify-center gap-2">
                        View Details
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
