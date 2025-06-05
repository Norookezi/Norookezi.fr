import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';

interface SocialButtonProps {
    name: string;
    icon: IconProp;
    className: string;
}

export function SocialButton({ name, icon, className }: SocialButtonProps) {
    return (
        <Link
            to={{ pathname: `/${name.toLowerCase()}` }}
            replace={true}
            className={`${className} bg-white/10 flex flex-col md:flex-row items-center text-center px-4 py-2 m-2 md:ml-0 rounded-lg font-semibold shadow transition-colors duration-200`}
        >
            <FontAwesomeIcon icon={icon} className='text-lg mr-2' />
            <span className='text-white'>{name}</span>
        </Link>
    );
}
