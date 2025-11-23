export interface Member {
    id: string;
    name: string;
    role: MemberRole;
    position: string;
    bio: string;
    image?: string;
    email?: string;
    links?: SocialLinks;
    department?: string;
    year?: number;
}

export type MemberRole =
    | 'president'
    | 'vice-president'
    | 'secretary'
    | 'treasurer'
    | 'coordinator'
    | 'member';

export interface SocialLinks {
    linkedin?: string;
    twitter?: string;
    github?: string;
    portfolio?: string;
    instagram?: string;
}
