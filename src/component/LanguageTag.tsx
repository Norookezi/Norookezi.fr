import type { IconType } from '@icons-pack/react-simple-icons';
import React from 'react';

interface LanguageTagProps {
    icon: IconType
    name: string
    className: string
    style: { [key: string]: unknown }
}

export function LanguageTag({ icon, name, className, style }: LanguageTagProps) {

    return (
        <strong className={`flex items-center gap-2 px-4 py-2 rounded-full shadow hover:scale-105 transition-transform border font-semibold ${className}`} style={style}>
            {React.createElement(icon)}
            {name}
        </strong>
    );
}

