'use client';

import { useState, useMemo } from 'react';
import { Container } from '@/components/layout/container';
import { EventGrid } from '@/components/features/events/event-grid';
import { EventFilterBar } from '@/components/features/events/event-filter-bar';
import { UPCOMING_EVENTS } from '@/lib/mock-data';
import type { EventCategory } from '@/types/events';

/**
 * Events listing page
 * Features filtering and search functionality
 */
export default function EventsPage() {
    const [selectedCategory, setSelectedCategory] = useState<EventCategory | 'all'>('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Filter events based on category and search query
    const filteredEvents = useMemo(() => {
        return UPCOMING_EVENTS.filter((event) => {
            const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
            const matchesSearch =
                event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                event.location.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <div className="py-16">
            <Container>
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Discover upcoming workshops, study sessions, social gatherings, and career opportunities.
                        Filter by category or search for specific events.
                    </p>
                </div>

                {/* Filter Bar */}
                <div className="mb-8">
                    <EventFilterBar
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                        searchQuery={searchQuery}
                        onSearchChange={setSearchQuery}
                    />
                </div>

                {/* Events Grid */}
                <EventGrid
                    events={filteredEvents}
                    emptyMessage="No events match your filters. Try adjusting your search or category selection."
                />
            </Container>
        </div>
    );
}
