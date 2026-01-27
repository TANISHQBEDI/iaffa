export type ProgramHighlight = {
    id: number;
    label: string;
    description?: string;
    href: string;
}

export const PROGRAM_HIGHLIGHTS: ProgramHighlight[] = [
    {
        id: 1,
        label: 'Workshops & Masterclasses',
        href: '/programs#workshops-masterclasses',
    },
    {
        id: 2,
        label: 'Mentorship Programs',
        href: '/programs#mentorship-programs',
    },
    {
        id: 3,
        label: 'Training & Capacity Building',
        href: '/programs#training-capacity-building',
    },
    {
        id: 4,
        label: 'Industry Networking & Market Access',
        href: '/programs#industry-networking-market-access',
    },
    {
        id: 5,
        label: 'Talent & Cultural Development',
        href: '/programs#talent-cultural-development',
    },
    {
        id: 6,
        label: 'Curated Film Showcases',
        href: '/programs#curated-film-showcases',
    }
]