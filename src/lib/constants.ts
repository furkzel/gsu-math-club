import type { SiteConfig } from '@/types';

export const SITE_CONFIG: SiteConfig = {
    name: 'Galatasaray Üniversitesi Matematik Topluluğu',
    description: 'Galatasaray Üniversitesi Matematik Topluluğu resmi web sitesi.',
    url: 'https://gsumath.edu',
    links: {
        navigation: [
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Etkinlikler', href: '/events' },
            { label: 'Hakkımızda', href: '/about' },
            { label: 'Kaynaklar', href: '/resources' },
            { label: 'İletişim', href: '/contact' },
        ],
        social: [
            {
                label: 'Instagram',
                href: 'https://instagram.com/gsumath',
                icon: 'instagram'
            },
            {
                label: 'Twitter',
                href: 'https://twitter.com/gsumath',
                icon: 'twitter'
            },
            {
                label: 'LinkedIn',
                href: 'https://linkedin.com/company/gsumath',
                icon: 'linkedin'
            },
            {
                label: 'GitHub',
                href: 'https://github.com/gsumath',
                icon: 'github'
            },
        ],
    },
    contact: {
        email: 'info@gsumath.edu',
        phone: '+90 (212) 123 45 67',
        address: 'Galatasaray Üniversitesi, İstanbul, Türkiye',
    },
};

export const CATEGORY_LABELS: Record<string, string> = {
    academic: 'Akademik',
    social: 'Sosyal',
    workshop: 'Atölye',
    sports: 'Spor',
    cultural: 'Kültürel',
    career: 'Kariyer Gelişimi',
    volunteer: 'Gönüllülük',
    all: 'Tüm Etkinlikler',
};

export const CATEGORY_COLORS: Record<string, string> = {
    academic: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    social: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    workshop: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    sports: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    cultural: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
    career: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
    volunteer: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
};
