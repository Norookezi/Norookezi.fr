import translation from './translations.json';

let language = 'en';

if (typeof navigator !== 'undefined' && navigator.language) {
    language = navigator.language.split('-')[0];
}

if (!Object.keys(translation).includes(language)) language = 'en';

export const activeTranslation = translation[language as keyof typeof translation];