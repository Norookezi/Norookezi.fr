import { useEffect } from 'react';
import { faTwitch, faDiscord, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { SocialButton } from '../component/SocialButton';

let runstate = false;
const jobTitles = [
    'DevOps',
    'Full Stack Developer',
    'Data Analyst',
    'System Administrator',
    'Photographer'
];

function parseJobTitle(title: string) {
    const element: HTMLElement = document.querySelector('#heroJobTitle')!;

    const disapearingChars = element.textContent!.split('');

    disapearingChars.forEach((_, index) => {
        setTimeout(() => {
            element.textContent = element.textContent!.substring(0, disapearingChars.length - index - 1);
        }, index * 80);
    });

    title.split('').forEach((_, index) => {
        setTimeout(() => {
            element.textContent = title.substring(0, index + 1);
        }, ((disapearingChars.length + index) * 100) + 500);
    });

    setTimeout(() => {
        jobTitles.push(jobTitles.shift()!);
        parseJobTitle(jobTitles[0]);
    }, (disapearingChars.length * 80) + (title.length * 100) + 500 + 5000);
}

export function Hero() {
    useEffect(() => {
        if (runstate) return;

        runstate = true;

        parseJobTitle(jobTitles[0]);
    }, []);

    return (
        <section id="hero" className="snap-center w-screen min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-950 via-green-900 to-green-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
            <div className="flex flex-col-reverse md:flex-row items-center gap-10 py-16 px-6 max-w-5xl w-full">
            <div className="flex-1 flex flex-col items-start">
                <h1 className="text-4xl md:text-5xl font-extrabold text-green-100 dark:text-gray-100 mb-4">
                Hi, I'm Norookezi
                </h1>
                <h2 className="h-4 text-xl md:text-2xl font-medium text-green-300 dark:text-gray-300 mb-6 after:h-6 after:translate-y-1/4 after:w-1 after:inline-block after:animate-blink after:bg-green-500 dark:after:bg-gray-400" id="heroJobTitle"></h2>
                <p className="text-green-400 dark:text-gray-400 mb-8 max-w-md">
                I automate, deploy, and scale modern infrastructure. Passionate about CI/CD, cloud-native solutions, and building reliable systems.
                </p>
                <div className='w-full grid grid-cols-2 md:flex md:flex-row flex-wrap justify-center'>
                <SocialButton name="Github" icon={faGithub} className="text-[#181717] hover:bg-[#18171755] dark:text-gray-100 dark:hover:bg-gray-700" />
                <SocialButton name="Twitch" icon={faTwitch} className="text-[#9146FF] hover:bg-[#9146FF55] dark:hover:bg-[#9146FF33]" />
                <SocialButton name="Instagram" icon={faInstagram} className="text-[#E4405F] hover:bg-[#E4405F55] dark:hover:bg-[#E4405F33]" />
                <SocialButton name="Linkedin" icon={faLinkedin} className="text-[#0077B5] hover:bg-[#0077B555] dark:hover:bg-[#0077B533]" />
                <SocialButton name="Discord" icon={faDiscord} className="text-[#5865F2] hover:bg-[#5865F255] dark:hover:bg-[#5865F233]" />
                <SocialButton name="BlueSky" icon={faCloud} className="text-[#0099FF] hover:bg-[#0099FF55] dark:hover:bg-[#0099FF33]" />
                </div>
            </div>
            <div className="flex-1 flex justify-center">
                <div className='relative group'>
                <div
                    className="rotate-[5deg] group-hover:rotate-0 duration-300 rounded-3xl shadow-2xl max-md:max-h-[25vh] w-auto aspect-square h-72 object-cover bg-green-950 dark:bg-gray-900 absolute"
                />
                <div
                    className="rotate-[10deg] group-hover:rotate-0 duration-300 rounded-3xl shadow-2xl max-md:max-h-[25vh] w-auto aspect-square h-72 object-cover bg-green-950/80 dark:bg-gray-800/80 absolute"
                />
                <div
                    className="rotate-[15deg] group-hover:rotate-0 duration-300 rounded-3xl shadow-2xl max-md:max-h-[25vh] w-auto aspect-square h-72 object-cover bg-green-950/60 dark:bg-gray-700/60 absolute"
                />
                <img
                    src="/assets/norookezi.jpg"
                    alt="Norookezi's profile picture"
                    className="max-md:max-h-[25vh] w-auto aspect-square z-30 relative rounded-3xl shadow-2xl h-72 object-cover bg-green-900 dark:bg-gray-800"
                />
                </div>
            </div>
            </div>
        </section>
    );
}