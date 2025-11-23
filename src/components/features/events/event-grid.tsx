import type { Event } from '@/types/events';
import { EventCard } from './event-card';

interface EventGridProps {
    events: Event[];
    emptyMessage?: string;
}

/**
 * Grid layout for event cards
 * Responsive grid that adapts to screen size
 * Follows Atomic Design - Organism
 */
export function EventGrid({ events, emptyMessage = 'No events found' }: EventGridProps) {
    if (events.length === 0) {
        return (
            <div className="text-center py-16">
                <p className="text-muted-foreground">{emptyMessage}</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    );
}
