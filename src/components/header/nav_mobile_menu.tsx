import { NAV_ITEMS } from "./nav_items";
import { Button } from "../ui/button";
import Link from "next/link";

const NavMobileMenu = () => {
    return (
        <div className='h-[calc(100vh-5rem)] w-screen z-10 bg-background'>
            <ul className='w-full flex flex-col gap-3 text-black'>
                {
                    NAV_ITEMS.map(({ id, label, href }) => {
                        return (
                            <li key={id}>
                                <Button variant='link' size='lg' asChild>
                                    <Link className='text-lg font-extrabold' href={href}>{label}</Link>
                                </Button>

                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default NavMobileMenu