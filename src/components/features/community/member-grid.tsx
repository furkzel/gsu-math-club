import type { Member } from '@/types/members';
import { BoardMemberCard } from './board-member-card';

interface MemberGridProps {
    members: Member[];
    title?: string;
}

/**
 * Grid layout for board member cards
 * Responsive grid with proper spacing
 * Follows Atomic Design - Organism
 */
export function MemberGrid({ members, title }: MemberGridProps) {
    return (
        <div>
            {title && (
                <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member) => (
                    <BoardMemberCard key={member.id} member={member} />
                ))}
            </div>
        </div>
    );
}
