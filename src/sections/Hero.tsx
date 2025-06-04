import { useEffect } from 'react';

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
        <section id="hero" className="w-screen min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-950 via-green-900 to-green-800">
                <div className="flex flex-col-reverse md:flex-row items-center gap-10 py-16 px-6 max-w-5xl w-full">
                    <div className="flex-1 flex flex-col items-start">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-green-100 mb-4">
                            Hi, I'm Norookezi
                        </h1>
                        <h2 className="h-4 text-xl md:text-2xl font-medium text-green-300 mb-6 after:h-6 after:translate-y-1/4 after:w-1 after:inline-block after:animate-blink after:bg-green-500" id="heroJobTitle"></h2>
                        <p className="text-green-400 mb-8 max-w-md">
                            I automate, deploy, and scale modern infrastructure. Passionate about CI/CD, cloud-native solutions, and building reliable systems.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className='relative group'>
                            <div
                                className="rotate-[5deg] group-hover:rotate-0 duration-300 rounded-3xl shadow-2xl w-72 h-72 object-cover bg-green-950 absolute"
                            />
                            <div
                                className="rotate-[10deg] group-hover:rotate-0 duration-300 rounded-3xl shadow-2xl w-72 h-72 object-cover bg-green-950/80 absolute"
                            />
                            <div
                                className="rotate-[15deg] group-hover:rotate-0 duration-300 rounded-3xl shadow-2xl w-72 h-72 object-cover bg-green-950/60 absolute"
                            />
                            <img
                                src="https://norookezi.com/image/norookezi.jpg"
                                alt="Norookezi's profile picture"
                                className="z-30 relative rounded-3xl shadow-2xl w-72 h-72 object-cover bg-green-900"
                            />
                        </div>
                    </div>
                </div>
            </section>
    );
}