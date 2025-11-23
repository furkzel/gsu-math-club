export interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    category: EventCategory;
    image?: string;
    slug: string;
    registrationUrl?: string;
    capacity?: number;
    attendees?: number;
    organizer: string;
    tags?: string[];
}

export type EventCategory =
    | 'academic'
    | 'social'
    | 'workshop'
    | 'sports'
    | 'cultural'
    | 'career'
    | 'volunteer';

export interface EventFilterOptions {
    category?: EventCategory | 'all';
    searchQuery?: string;
    dateRange?: {
        start: Date;
        end: Date;
    };
}
