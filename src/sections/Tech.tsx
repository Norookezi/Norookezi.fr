import { SiAngular, SiCss, SiDebian, SiDocker, SiExpress, SiFastify, SiFigma, SiFlutter, SiGitforwindows, SiHtml5, SiJavascript, SiJira, SiLaravel, SiMariadb, SiMongodb, SiMysql, SiNodedotjs, SiPhp, SiPostgresql, SiPostman, SiPython, SiReact, SiSymfony, SiTypescript, SiVuedotjs } from '@icons-pack/react-simple-icons';
import type { SectionProps } from '../section';
import { LanguageTag } from '../component/LanguageTag';

export function Tech({ isSelected = false }: SectionProps) {
    if (isSelected) {
        document.documentElement.style = 'scroll-snap-type: y proximity;';
    }

    return (
        <section id="technology" className="w-screen min-h-screen flex flex-col justify-center bg-white/95 dark:bg-gray-900/95 snap-start">
            <div className="w-full h-fit max-w-2xl md:max-w-2/3 mx-auto p-10 mt-10 flex flex-col gap-6 sticky top-10">
                <h2 className="font-extrabold text-3xl md:text-4xl text-gray-900 dark:text-white mb-2 tracking-tight">
                    Technologies I Use
                </h2>
                <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg font-medium">
                    I work with a variety of technologies to build robust and scalable applications. Here are some of the key technologies I use:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow flex flex-col gap-3">
                        <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Front end</p>
                        <div className="flex flex-wrap gap-2 items-center snap-center">
                            <LanguageTag style={{ animationDelay: '10ms' }} name="Javascript" icon={SiJavascript} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 border-yellow-400/40 text-gray-900" />
                            <LanguageTag style={{ animationDelay: '20ms' }} name="TypeScript" icon={SiTypescript} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow border-blue-400/40 text-white" />
                            <LanguageTag style={{ animationDelay: '30ms' }} name="HTML5" icon={SiHtml5} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 shadow border-orange-400/40 text-white" />
                            <LanguageTag style={{ animationDelay: '40ms' }} name="CSS3" icon={SiCss} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 shadow border-blue-300/40 text-white" />
                        </div>
                    </div>
                    <div className="bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow flex flex-col gap-3">
                        <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">BackEnd</p>
                        <div className="flex flex-wrap gap-2 items-center snap-center">
                            <LanguageTag style={{ animationDelay: '50ms' }} name="NodeJS" icon={SiNodedotjs} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-green-400 via-green-500 to-green-600 shadow border-green-400/40 text-white" />
                            <LanguageTag style={{ animationDelay: '60ms' }} name="Python" icon={SiPython} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow border-blue-400/40 text-white" />
                            <LanguageTag style={{ animationDelay: '70ms' }} name="PHP" icon={SiPhp} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 shadow border-indigo-400/40 text-white" />
                        </div>
                    </div>
                    <div className="bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow flex flex-col gap-3">
                        <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Frameworks</p>
                        <div className="flex flex-wrap gap-2 items-center snap-center">
                            <LanguageTag style={{ animationDelay: '80ms' }} name="React" icon={SiReact} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 shadow border-sky-400/40 text-white" />
                            <LanguageTag style={{ animationDelay: '90ms' }} name="VueJS" icon={SiVuedotjs} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-green-400 via-green-500 to-green-600 shadow border-green-400/40 text-white" />
                            <LanguageTag style={{ animationDelay: '100ms' }} name="Angular" icon={SiAngular} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-red-400 via-red-500 to-red-600 shadow border-red-400/40 text-white" />
                            <LanguageTag style={{ animationDelay: '110ms' }} name="Express.js" icon={SiExpress} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow border-gray-700/40 text-white" />
                            <LanguageTag style={{ animationDelay: '120ms' }} name="Fastify" icon={SiFastify} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow border-yellow-400/40 text-gray-900" />
                            <LanguageTag style={{ animationDelay: '130ms' }} name="Flutter" icon={SiFlutter} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 shadow border-cyan-400/40 text-white" />
                            <LanguageTag style={{ animationDelay: '140ms' }} name="Laravel" icon={SiLaravel} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 shadow border-pink-400/40 text-white" />
                            <LanguageTag style={{ animationDelay: '150ms' }} name="Symfony" icon={SiSymfony} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 shadow border-gray-400/40 text-white" />
                        </div>
                    </div>
                    <div className="bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow flex flex-col gap-3">
                        <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Database</p>
                        <div className="flex flex-wrap gap-2 items-center snap-center">
                            <LanguageTag style={{ animationDelay: '160ms' }} name="MariaDB/MySQL" icon={SiMariadb} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-cyan-800 via-cyan-900 to-cyan-950 shadow border-cyan-800/40 text-white" />
                            <LanguageTag style={{ animationDelay: '170ms' }} name="MongoDB" icon={SiMongodb} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-green-400 via-green-500 to-green-600 shadow border-green-400/40 text-white" />
                            <LanguageTag style={{ animationDelay: '180ms' }} name="Postgresql" icon={SiPostgresql} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow border-blue-500/40 text-white" />
                            <LanguageTag style={{ animationDelay: '190ms' }} name="MSSQL" icon={SiMysql} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow border-blue-400/40 text-white" />
                        </div>
                    </div>
                    <div className="bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow flex flex-col gap-3">
                        <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">OS</p>
                        <div className="flex flex-wrap gap-2 items-center snap-center">
                            <LanguageTag style={{ animationDelay: '200ms' }} name="Debian" icon={SiDebian} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 shadow border-pink-400/40 text-white" />
                            <LanguageTag style={{ animationDelay: '210ms' }} name="Windows" icon={SiGitforwindows} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow border-blue-400/40 text-white" />
                            <LanguageTag style={{ animationDelay: '220ms' }} name="Docker" icon={SiDocker} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow border-blue-400/40 text-white" />
                        </div>
                    </div>
                    <div className="bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow flex flex-col gap-3">
                        <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Softwares</p>
                        <div className="flex flex-wrap gap-2 items-center snap-center">
                            <LanguageTag style={{ animationDelay: '230ms' }} name="Figma" icon={SiFigma} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 shadow border-orange-400/40 text-white" />
                            <LanguageTag style={{ animationDelay: '240ms' }} name="Jira" icon={SiJira} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow border-blue-400/40 text-white" />
                            <LanguageTag style={{ animationDelay: '250ms' }} name="PostMan" icon={SiPostman} className="animate-on-scroll animate-resume-on-back animate-[hit_1s_ease-in-out] bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 shadow border-orange-400/40 text-white" />
                        </div>
                    </div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 shadow-xl flex flex-col gap-4 backdrop-blur-md mt-6">
                    <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-2 tracking-tight">Always Learning</h3 >
                    <p className="text-base text-gray-700 dark:text-gray-300  md:text-lg">
                        I regularly explore new frameworks, tools, and cloud services to stay up-to-date and deliver the best solutions.
                    </p>
                </div>
            </div >
        </section >
    );
}