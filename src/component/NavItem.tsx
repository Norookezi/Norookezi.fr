interface NavItemProps {
    name: string;
    activeSection?: string
}

export function NavItem({ name, activeSection }: NavItemProps) {
    return (
        <li className="flex flex-1 w-auto flex-col items-center relative group">
            <a
                href={`#${name.toLowerCase()}`}
                className={`transition-colors px-2 py-1 rounded ${activeSection == name.toLowerCase() ? 'font-bold text-black dark:text-white' : 'text-gray-700 dark:text-gray-300 group-hover:text-neutral-800'}`}
            >
                {name}
            </a>
            {activeSection == name.toLowerCase() &&
                <span className={'absolute bottom-0 h-[0.2rem] w-full block bg-black dark:bg-white duration-150'}></span>
            }
            <span className={'absolute bottom-0 h-[0.1rem] w-0 group-hover:w-full  block bg-gray-700 dark:bg-gray-300 duration-150'}></span>
        </li>
    );
}
