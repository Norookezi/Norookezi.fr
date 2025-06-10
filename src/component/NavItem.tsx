interface NavItemProps {
    name: string;
    activeSection?: string
}

export function NavItem({ name, activeSection }: NavItemProps) {
    const isHero = activeSection === 'hero';

    return (
        <li className="flex flex-1 w-auto flex-col items-center relative group">
            <a
                href={`#${name.toLowerCase()}`}
                className={`transition-colors px-2 py-1 rounded ${activeSection == name.toLowerCase() ? `font-bold ${!isHero ? 'text-black' : 'text-white'}` : `${!isHero ? 'text-neutral-500' : 'text-neutral-200'} group-hover:text-neutral-800`}`}
            >
                {name}
            </a>
            {activeSection == name.toLowerCase() &&
                <span className={`absolute bottom-0 h-[0.2rem] w-full block ${!isHero ? 'bg-black' : 'bg-white'} duration-150`}></span>
            }
            <span className={`absolute bottom-0 h-[0.1rem] w-0 group-hover:w-full  block ${!isHero ? 'bg-neutral-800' : 'bg-neutral-500'} duration-150`}></span>
        </li>
    );
}
