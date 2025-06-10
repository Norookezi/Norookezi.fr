interface NavItemProps {
    name: string;
    activeSection?: string
}

export function NavItem({ name, activeSection }: NavItemProps) {

    return (
        <li className={`flex flex-1 w-auto flex-col items-center relative group ${activeSection == 'hero' ? 'invert' : ''}`}>
            <a
                href={`#${name.toLowerCase()}`}
                className={`transition-colors px-2 py-1 rounded ${activeSection == name.toLowerCase() ? 'font-bold text-black' : 'text-neutral-500 group-hover:text-neutral-800'}`}
            >
                {name}
            </a>
            {activeSection == name.toLowerCase() &&
                <span className="absolute bottom-0 h-[0.2rem] w-full block bg-black duration-150"></span>
            }
            <span className="absolute bottom-0 h-[0.1rem] w-0 group-hover:w-full  block bg-neutral-800 duration-150"></span>
        </li>
    );
}
