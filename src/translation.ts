import translation from './translations.json';

let language = navigator.language.split('-')[0];

if (!Object.keys(translation).includes(language)) language = 'en';

export const activeTranslation = translation[language as keyof typeof translation];