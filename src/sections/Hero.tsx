// Changes for migrating from Vite to Next.js:
// 1. Remove direct DOM manipulation (document.querySelector, element.textContent, etc.)
// 2. Use React state and refs for dynamic content updates
// 3. Use Next.js <Image> for optimized images
// 4. Use 'public' folder for static assets (e.g., /public/assets/norookezi.webp)
// 5. Remove direct style assignment to document.documentElement
// 6. Remove any code that assumes browser APIs are available at module scope

import { useEffect, useRef, useState } from 'react';
import { faTwitch, faDiscord, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { SocialButton } from '../component/SocialButton';
import { activeTranslation } from '../translation';
// Next.js image import
import Image from 'next/image';

const jobTitles = [...activeTranslation.heroJobTitles]; // Copy to avoid mutation issues

export function Hero() {
    // 1. Use state for job title animation
    const [displayedTitle, setDisplayedTitle] = useState('');
    const jobTitleIndex = useRef(0);
    const animating = useRef(false);

    // 2. Animate job title using state instead of direct DOM manipulation
    useEffect(() => {
        const timeoutIds: ReturnType<typeof setTimeout>[] = [];
        animating.current = true;

        function animateTitle(title: string, prevTitle: string) {
            // Remove previous title
            for (let i = 0; i <= prevTitle.length; i++) {
                timeoutIds.push(setTimeout(() => {
                    setDisplayedTitle(prevTitle.substring(0, prevTitle.length - i));
                }, i * 80));
            }
            // Add new title
            for (let i = 0; i <= title.length; i++) {
                timeoutIds.push(setTimeout(() => {
                    setDisplayedTitle(title.substring(0, i));
                }, (prevTitle.length * 80) + i * 100 + 500));
            }
            // Schedule next animation
            timeoutIds.push(setTimeout(() => {
                jobTitleIndex.current = (jobTitleIndex.current + 1) % jobTitles.length;
                animateTitle(jobTitles[jobTitleIndex.current], title);
            }, (prevTitle.length * 80) + (title.length * 100) + 500 + 5000));
        }

        animateTitle(jobTitles[0], '');

        return () => {
            animating.current = false;
            timeoutIds.forEach(clearTimeout);
        };
    }, []);

    // 3. Remove direct style assignment to document.documentElement (Next.js handles scroll snap in CSS)
    // 4. Use Next.js <Image> for optimized images and move image to /public/assets/norookezi.webp

    return (
        <section id="hero" className="snap-center w-screen min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-950 via-green-900 to-green-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
            <div className="flex flex-col-reverse md:flex-row items-center gap-10 py-16 px-6 max-w-5xl w-full">
                <div className="flex-1 flex flex-col items-start">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-green-100 dark:text-gray-100 mb-4">
                        {activeTranslation.heroTitle}<strong>Norookezi</strong>
                    </h1>
                    <strong className='hidden'>{activeTranslation.heroJobTitles.join(', ')}</strong>
                    <h2 aria-disabled="true" className="h-4 text-xl md:text-2xl font-medium text-green-300 dark:text-gray-300 mb-6 after:h-6 after:translate-y-1/4 after:w-1 after:inline-block after:animate-blink after:bg-green-500 dark:after:bg-gray-400" id="heroJobTitle">
                        {displayedTitle}
                    </h2>
                    <p className="text-green-400 dark:text-gray-400 mb-8 max-w-md *:font-medium!" dangerouslySetInnerHTML={{ __html: activeTranslation.heroDescription }} ></p>
                    <div className='w-full grid grid-cols-2 md:flex md:flex-row flex-wrap justify-center'>
                        <SocialButton href="https://www.twitch.tv/norookezi" name="Github" icon={faGithub} className="text-[#181717] hover:bg-[#18171755] dark:text-gray-100 dark:hover:bg-gray-700" />
                        <SocialButton href="https://discord.gg/R8xutC2e5u" name="Twitch" icon={faTwitch} className="text-[#9146FF] hover:bg-[#9146FF55] dark:hover:bg-[#9146FF33]" />
                        <SocialButton href="https://www.instagram.com/norookezi" name="Instagram" icon={faInstagram} className="text-[#E4405F] hover:bg-[#E4405F55] dark:hover:bg-[#E4405F33]" />
                        <SocialButton href="https://bsky.app/profile/norookezi.bsky.social" name="Linkedin" icon={faLinkedin} className="text-[#0077B5] hover:bg-[#0077B555] dark:hover:bg-[#0077B533]" />
                        <SocialButton href="https://github.com/norookezi" name="Discord" icon={faDiscord} className="text-[#5865F2] hover:bg-[#5865F255] dark:hover:bg-[#5865F233]" />
                        <SocialButton href="https://www.linkedin.com/in/timoth%C3%A9-anquetil-5220a5341/" name="BlueSky" icon={faCloud} className="text-[#0099FF] hover:bg-[#0099FF55] dark:hover:bg-[#0099FF33]" />
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className='relative group'>
                        <div
                            className="rotate-[5deg] group-hover:rotate-0 duration-300 rounded-3xl shadow-2xl max-md:max-h-[25vh] w-auto aspect-square h-72 object-cover bg-green-950 dark:bg-gray-700 absolute"
                        />
                        <div
                            className="rotate-[10deg] group-hover:rotate-0 duration-300 rounded-3xl shadow-2xl max-md:max-h-[25vh] w-auto aspect-square h-72 object-cover bg-green-950/80 dark:bg-gray-700/80 absolute"
                        />
                        <div
                            className="rotate-[15deg] group-hover:rotate-0 duration-300 rounded-3xl shadow-2xl max-md:max-h-[25vh] w-auto aspect-square h-72 object-cover bg-green-950/60 dark:bg-gray-700/60 absolute"
                        />
                        <Image
                            title="Norookezi's profile picture"
                            src="/assets/norookezi.webp"
                            alt="Norookezi's profile picture"
                            width={288} // h-72 = 18rem = 288px
                            height={288}
                            className="max-md:max-h-[25vh] w-auto aspect-square z-30 relative rounded-3xl shadow-2xl h-72 object-cover bg-green-900 dark:bg-gray-800"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

// Summary of changes:
// - Replaced direct DOM manipulation with React state/refs for job title animation
// - Used Next.js <Image> for profile picture
// - Removed document.documentElement.style assignment
// - Ensured static assets are referenced from /public