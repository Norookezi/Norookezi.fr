import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

interface SocialButtonProps {
    href: string;
    name: string;
    icon: IconProp;
    className: string;
}

export function SocialButton({ href, name, icon, className }: SocialButtonProps) {
    return (
        <a
            href={href}
            className={`${className} bg-white/10 flex flex-col md:flex-row items-center text-center px-4 py-2 m-2 md:ml-0 rounded-lg font-semibold shadow transition-colors duration-200`}
        >
            <FontAwesomeIcon icon={icon} className='text-lg mr-2' />
            <span className='text-white'>{name}</span>
        </a>
    );
}
