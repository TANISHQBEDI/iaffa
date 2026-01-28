export type PRIZE = {
    id: number;
    label: string;
    description: string;
    reward: string;
    href: string;
}

export const PRIZES: PRIZE[] = [
    {
        id: 1,
        label: 'Best Feature Film',
        reward: 'Up to $5,000 AUD',
        description: 'Development or post-production assistance',
        href: '/prizes'
    },
    {
        id: 2,
        label: 'Best Short Film',
        reward: 'Up to $2,500 AUD',
        description: 'Creative tools or professional mentorship',
        href: '/prizes'
    },
    {
        id: 3,
        label: 'Best Documentary',
        reward: 'Up to $3,000 AUD',
        description: 'Research, development, or distribution guidance',
        href: '/prizes'
    },
    {
        id: 4,
        label: 'Best Animation',
        reward: 'Up to $2,500 AUD',
        description: 'Animation software or creative tools',
        href: '/prizes'
    },
    {
        id: 5,
        label: 'Best Student Film',
        reward: 'Up to $1,500 AUD',
        description: 'Workshops, mentorship, or equipment access',
        href: '/prizes'
    },
    {
        id: 6,
        label: 'Cinematography Excellence',
        reward: 'Up to $2,000 AUD',
        description: 'Camera or production equipment',
        href: '/prizes'
    }
]