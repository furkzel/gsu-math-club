export interface NavLink {
    label: string;
    href: string;
    external?: boolean;
}

export interface SiteConfig {
    name: string;
    description: string;
    url: string;
    links: {
        navigation: NavLink[];
        social: {
            label: string;
            href: string;
            icon: string;
        }[];
    };
    contact: {
        email: string;
        phone?: string;
        address?: string;
    };
}

export interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
}
