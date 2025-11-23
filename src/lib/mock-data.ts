import type { Event } from '@/types/events';
import type { Member } from '@/types/members';

/**
 * Mock event data simulating database responses
 * In production, this will be replaced with API calls
 */
export const UPCOMING_EVENTS: Event[] = [
    {
        id: '1',
        title: 'Küme Teorisi: Ordinaller',
        description: 'Derinlemesine bir atölye çalışması: Küme teorisinin temel kavramlarını, özellikle de ordinals\'ı keşfedin. Sonsuzluk ve sayılabilirlik üzerine tartışmalar içerir.',
        date: '2025-11-20',
        time: '12:00',
        location: 'H 304',
        category: 'academic',
        slug: 'kume-teorisi-ordinaller',
        organizer: 'Ahmet Emir Özışık',
        capacity: 30,
        attendees: 18,
        tags: ['kume-teorisi', 'ordinaller', 'atölye'],
        image: '/images/events/calculus-workshop.jpg',
    },
    {
        id: '2',
        title: 'Annual Math Department Mixer',
        description: 'Join us for an evening of networking, games, and pizza! Meet fellow math enthusiasts, professors, and learn about upcoming research opportunities.',
        date: '2025-12-10',
        time: '19:00',
        location: 'Student Center Ballroom',
        category: 'social',
        slug: 'annual-math-department-mixer',
        organizer: 'Math Student Association',
        capacity: 100,
        attendees: 67,
        tags: ['networking', 'social', 'pizza'],
        image: '/images/events/mixer.jpg',
    },
    {
        id: '3',
        title: 'Linear Algebra Study Group',
        description: 'Weekly study session covering eigenvalues, eigenvectors, and vector spaces. Perfect for students in MATH 2420.',
        date: '2025-12-03',
        time: '17:00',
        location: 'Library Study Room 3B',
        category: 'academic',
        slug: 'linear-algebra-study-group',
        organizer: 'Peer Tutoring Center',
        capacity: 15,
        attendees: 12,
        tags: ['linear-algebra', 'study-group', 'weekly'],
    },
    {
        id: '4',
        title: 'Career Fair: Mathematics in Industry',
        description: 'Explore career opportunities in data science, actuarial science, finance, and research. Representatives from top companies will be present.',
        date: '2025-12-15',
        time: '14:00',
        location: 'Career Services Center',
        category: 'career',
        slug: 'career-fair-mathematics-in-industry',
        organizer: 'Career Services & Math Department',
        capacity: 200,
        attendees: 89,
        tags: ['career', 'industry', 'networking'],
        registrationUrl: 'https://gsu.edu/career-fair',
    },
    {
        id: '5',
        title: 'Topology Seminar: Introduction to Manifolds',
        description: 'Graduate-level seminar exploring the foundations of differential topology. Open to advanced undergraduates with instructor permission.',
        date: '2025-12-08',
        time: '16:00',
        location: 'Classroom South, Room 301',
        category: 'academic',
        slug: 'topology-seminar-introduction-to-manifolds',
        organizer: 'Dr. Michael Chen',
        capacity: 20,
        attendees: 14,
        tags: ['topology', 'graduate', 'seminar'],
    },
    {
        id: '6',
        title: 'Math Tutoring Volunteer Training',
        description: 'Learn effective tutoring strategies and join our volunteer tutoring program. Help fellow students succeed in mathematics!',
        date: '2025-12-12',
        time: '18:30',
        location: 'Langdale Hall, Room 210',
        category: 'volunteer',
        slug: 'math-tutoring-volunteer-training',
        organizer: 'Community Outreach Program',
        capacity: 25,
        attendees: 19,
        tags: ['volunteer', 'tutoring', 'training'],
    },
];

/**
 * Mock board member data
 * Represents the leadership team of the math community
 */
export const BOARD_MEMBERS: Member[] = [
    {
        id: '1',
        name: 'Emily Rodriguez',
        role: 'president',
        position: 'President',
        bio: 'Senior Mathematics major with a passion for applied mathematics and community building. Leading initiatives to enhance student engagement.',
        department: 'Mathematics',
        year: 4,
        email: 'emily.rodriguez@gsu.edu',
        links: {
            linkedin: 'https://linkedin.com/in/emilyrodriguez',
            github: 'https://github.com/emilyrodriguez',
        },
        image: '/images/team/emily.jpg',
    },
    {
        id: '2',
        name: 'James Park',
        role: 'vice-president',
        position: 'Vice President',
        bio: 'Junior double-majoring in Mathematics and Computer Science. Focused on bridging theoretical concepts with practical applications.',
        department: 'Mathematics & Computer Science',
        year: 3,
        email: 'james.park@gsu.edu',
        links: {
            linkedin: 'https://linkedin.com/in/jamespark',
            portfolio: 'https://jamespark.dev',
        },
        image: '/images/team/james.jpg',
    },
    {
        id: '3',
        name: 'Aisha Thompson',
        role: 'secretary',
        position: 'Secretary',
        bio: 'Sophomore Mathematics Education major dedicated to making math accessible and engaging for all students.',
        department: 'Mathematics Education',
        year: 2,
        email: 'aisha.thompson@gsu.edu',
        links: {
            linkedin: 'https://linkedin.com/in/aishathompson',
            twitter: 'https://twitter.com/aishathompson',
        },
        image: '/images/team/aisha.jpg',
    },
    {
        id: '4',
        name: 'David Chen',
        role: 'treasurer',
        position: 'Treasurer',
        bio: 'Junior Actuarial Science major with strong financial management skills. Ensuring transparent budget allocation for community events.',
        department: 'Actuarial Science',
        year: 3,
        email: 'david.chen@gsu.edu',
        links: {
            linkedin: 'https://linkedin.com/in/davidchen',
        },
        image: '/images/team/david.jpg',
    },
    {
        id: '5',
        name: 'Maria Garcia',
        role: 'coordinator',
        position: 'Events Coordinator',
        bio: 'Senior Applied Mathematics major specializing in event planning and community outreach programs.',
        department: 'Applied Mathematics',
        year: 4,
        email: 'maria.garcia@gsu.edu',
        links: {
            instagram: 'https://instagram.com/mariagarcia',
            linkedin: 'https://linkedin.com/in/mariagarcia',
        },
        image: '/images/team/maria.jpg',
    },
    {
        id: '6',
        name: 'Ryan Mitchell',
        role: 'coordinator',
        position: 'Technology Coordinator',
        bio: 'Junior Mathematics major with web development expertise. Maintaining our digital presence and technical infrastructure.',
        department: 'Mathematics',
        year: 3,
        email: 'ryan.mitchell@gsu.edu',
        links: {
            github: 'https://github.com/ryanmitchell',
            portfolio: 'https://ryanmitchell.tech',
        },
        image: '/images/team/ryan.jpg',
    },
];

/**
 * Featured statistics for the landing page
 */
export const COMMUNITY_STATS = {
    activeMembers: 450,
    eventsPerSemester: 35,
    studyHoursOffered: 120,
    successRate: 94,
};

/**
 * Testimonials from community members
 */
export const TESTIMONIALS = [
    {
        id: '1',
        name: 'Alex Johnson',
        role: 'Senior, Mathematics',
        content: 'The study groups and workshops have been instrumental in my academic success. I went from struggling with calculus to tutoring other students!',
        avatar: '/images/testimonials/alex.jpg',
    },
    {
        id: '2',
        name: 'Sophie Lee',
        role: 'Junior, Applied Math',
        content: 'This community helped me discover my passion for data science. The career events connected me with industry professionals.',
        avatar: '/images/testimonials/sophie.jpg',
    },
    {
        id: '3',
        name: 'Marcus Williams',
        role: 'Graduate Student',
        content: 'As a graduate student, I appreciate the collaborative research environment and mentorship opportunities available here.',
        avatar: '/images/testimonials/marcus.jpg',
    },
];
