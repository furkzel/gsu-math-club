'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import type { EventCategory } from '@/types/events';
import { CATEGORY_LABELS } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface EventFilterBarProps {
    selectedCategory: EventCategory | 'all';
    onCategoryChange: (category: EventCategory | 'all') => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

/**
 * Filter bar for events with category pills and search
 * Follows Atomic Design - Molecule
 */
export function EventFilterBar({
    selectedCategory,
    onCategoryChange,
    searchQuery,
    onSearchChange,
}: EventFilterBarProps) {
    const categories: (EventCategory | 'all')[] = [
        'all',
        'academic',
        'social',
        'workshop',
        'sports',
        'cultural',
        'career',
        'volunteer',
    ];

    return (
        <div className="space-y-4">
            {/* Search */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search events..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="pl-10"
                />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <Badge
                        key={category}
                        variant={selectedCategory === category ? 'default' : 'outline'}
                        className={cn(
                            'cursor-pointer transition-all',
                            selectedCategory === category && 'bg-primary text-primary-foreground'
                        )}
                        onClick={() => onCategoryChange(category)}
                    >
                        {CATEGORY_LABELS[category]}
                    </Badge>
                ))}
            </div>
        </div>
    );
}
