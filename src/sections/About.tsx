export function About() {

    return (
        <section id="about" className="w-screen min-h-screen flex flex-col justify-center bg-white/95 dark:bg-gray-900/95 snap-start">
            <div className="w-full h-fit max-w-2xl md:max-w-2/3 mx-auto p-10 mt-10 flex flex-col gap-6 sticky top-10">
                <h2 className="font-extrabold text-3xl md:text-4xl text-gray-900 dark:text-white mb-2 tracking-tight">
                    About Me
                </h2>
                <div className="flex flex-col md:flex-row md:items-center gap-8 bg-gray-300/20 dark:bg-gray-800/40 rounded-2xl p-6 shadow-lg">
                    <div className="relative w-32 h-32 mx-auto md:mx-0">
                        <img
                            src="/assets/norookezi.jpg"
                            alt="Timothé Anquetil"
                            className="w-32 h-32 rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                        />
                        <img className="w-8 h-8 object-contain absolute bottom-2 right-2 bg-primary bg-white dark:bg-gray-900 text-xs px-2 py-0.5 rounded-full shadow-md" src="/assets/france.png" alt="France" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                        <p className="text-xl md:text-2xl text-gray-900 dark:text-white font-extrabold mb-1 tracking-tight">
                            Hi, I'm Timothé Anquetil
                        </p>
                        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-1">
                            <span className="font-bold text-gray-900 dark:text-white">{Math.floor((new Date().getTime() - new Date('06-28-2003').getTime()) / (1000 * 60 * 60 * 24 * 365))} y/o</span> developer from <span className="font-bold text-gray-900 dark:text-white">Le Havre, Normandy</span>.
                        </p>
                        <div className="flex gap-2 mt-2">
                            <span className="inline-block bg-green-700/20 dark:bg-green-700/40 text-gray-900 dark:text-white text-xs font-medium px-3 py-1 rounded-full">TypeScript</span>
                            <span className="inline-block bg-green-700/20 dark:bg-green-700/40 text-gray-900 dark:text-white text-xs font-medium px-3 py-1 rounded-full">React</span>
                            <span className="inline-block bg-green-700/20 dark:bg-green-700/40 text-gray-900 dark:text-white text-xs font-medium px-3 py-1 rounded-full">Node.js</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed md:text-lg md:leading-relaxed font-medium">
                        Passionate about programming and technology, I love building innovative solutions to complex problems.
                        Self-taught, I started with <span className="font-semibold text-gray-900 dark:text-white">Python</span> and <span className="font-semibold text-gray-900 dark:text-white">PHP</span>, and later expanded to <span className="font-semibold text-gray-900 dark:text-white">JavaScript</span> and <span className="font-semibold text-gray-900 dark:text-white">TypeScript</span>.
                    </p>
                    <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg font-medium">
                        Always curious and eager to learn, I spend my free time exploring new tech, frameworks, and languages.
                    </p>
                    <div className="bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 shadow-xl flex flex-col gap-6 backdrop-blur-md">
                        <div>
                            <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-2 tracking-tight">What am I up to now?</h3>
                            <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
                                Currently seeking new opportunities to apply my skills and contribute to exciting projects.
                                I'm especially interested in roles involving modern technologies and collaborative teams.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-2 tracking-tight">Any hobbies?</h3>
                            <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
                                When I'm not coding, I enjoy playing video games, exploring the outdoors, and taking pictures.
                                I also love to travel and discover new cultures.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}