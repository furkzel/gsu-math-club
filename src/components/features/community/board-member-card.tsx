import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Linkedin, Github, Twitter, Globe, Mail } from 'lucide-react';
import type { Member } from '@/types/members';

interface BoardMemberCardProps {
    member: Member;
}

const iconMap = {
    linkedin: Linkedin,
    github: Github,
    twitter: Twitter,
    portfolio: Globe,
    instagram: Twitter, // Using Twitter icon as fallback for Instagram
};

/**
 * Board member card displaying member info and social links
 * Combines Avatar + Card components
 * Follows Atomic Design - Molecule
 */
export function BoardMemberCard({ member }: BoardMemberCardProps) {
    // Generate initials for avatar fallback
    const initials = member.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase();

    return (
        <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-lg">{initials}</AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-primary font-medium">{member.position}</p>
                    {member.year && (
                        <p className="text-xs text-muted-foreground mt-1">
                            Year {member.year} • {member.department}
                        </p>
                    )}
                </div>
            </CardHeader>

            <CardContent>
                <p className="text-sm text-muted-foreground text-center line-clamp-4">
                    {member.bio}
                </p>
            </CardContent>

            <CardFooter className="flex justify-center gap-2">
                {member.email && (
                    <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="h-8 w-8"
                    >
                        <a href={`mailto:${member.email}`} aria-label="Email">
                            <Mail className="h-4 w-4" />
                        </a>
                    </Button>
                )}
                {member.links && Object.entries(member.links).map(([platform, url]) => {
                    const Icon = iconMap[platform as keyof typeof iconMap];
                    if (!Icon || !url) return null;
                    return (
                        <Button
                            key={platform}
                            variant="ghost"
                            size="icon"
                            asChild
                            className="h-8 w-8"
                        >
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={platform}
                            >
                                <Icon className="h-4 w-4" />
                            </a>
                        </Button>
                    );
                })}
            </CardFooter>
        </Card>
    );
}
