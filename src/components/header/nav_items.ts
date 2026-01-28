export type NAV_ITEM = {
    id: string;
    label: string;
    href: string;
    active?: boolean;
    external?: boolean;
}

export const NAV_ITEMS: NAV_ITEM[] = [
    {
        id: '01',
        label: 'Programs',
        href: '/programs',
        active: true,
    },
    {
        id: '02',
        label: 'Submission',
        href: '/submission',
        active: true
    },
    {
        id: '03',
        label: 'Prizes',
        href: '/prizes',
        active: true
    },
    {
        id: '04',
        label: 'Membership',
        href: '/join-us',
        active: true
    },
    {
        id: '05',
        label: 'News',
        href: '/news',
        active: true
    },
    {
        id: '06',
        label: 'About Us',
        href: '/about-us',
        active: true
    },
    {
        id: '07',
        label: 'Contact Us',
        href: '/contact-us',
        active: true
    }
]