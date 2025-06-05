import { SiAngular, SiCss, SiDebian, SiDocker, SiExpress, SiFastify, SiFigma, SiFlutter, SiGitforwindows, SiHtml5, SiJavascript, SiJira, SiLaravel, SiMariadb, SiMongodb, SiMysql, SiNodedotjs, SiPhp, SiPostgresql, SiPostman, SiPython, SiReact, SiSymfony, SiTypescript, SiVuedotjs } from '@icons-pack/react-simple-icons';
import type { SectionProps } from '../section';

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
                    {/* Front end */}
                    <div className="bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow flex flex-col gap-3">
                        <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Front end</p>
                        <div className="flex flex-wrap gap-2 items-center snap-center">
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow hover:scale-105 transition-transform border border-yellow-400/40 text-gray-900 font-semibold">
                                <SiJavascript />
                                Javascript
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow hover:scale-105 transition-transform border border-blue-400/40 text-white font-semibold">
                                <SiTypescript />
                                TypeScript
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 shadow hover:scale-105 transition-transform border border-orange-400/40 text-white font-semibold">
                                <SiHtml5 />
                                HTML5
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 shadow hover:scale-105 transition-transform border border-blue-300/40 text-white font-semibold">
                                <SiCss />
                                CSS3
                            </span>
                        </div>
                    </div>
                    {/* BackEnd */}
                    <div className="bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow flex flex-col gap-3">
                        <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">BackEnd</p>
                        <div className="flex flex-wrap gap-2 items-center snap-center">
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 shadow hover:scale-105 transition-transform border border-green-400/40 text-white font-semibold">
                                {/* NodeJS */}
                                <SiNodedotjs />
                                NodeJS
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow hover:scale-105 transition-transform border border-blue-400/40 text-white font-semibold">
                                {/* Python */}
                                <SiPython />
                                Python
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 shadow hover:scale-105 transition-transform border border-indigo-400/40 text-white font-semibold">
                                {/* PHP */}
                                <SiPhp />
                                PHP
                            </span>
                        </div>
                    </div>
                    {/* Frameworks */}
                    <div className="bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow flex flex-col gap-3">
                        <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Frameworks</p>
                        <div className="flex flex-wrap gap-2 items-center snap-center">
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 shadow hover:scale-105 transition-transform border border-sky-400/40 text-white font-semibold">
                                <SiReact />
                                React
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 shadow hover:scale-105 transition-transform border border-green-400/40 text-white font-semibold">
                                <SiVuedotjs />
                                VueJS
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-400 via-red-500 to-red-600 shadow hover:scale-105 transition-transform border border-red-400/40 text-white font-semibold">
                                <SiAngular />
                                Angular
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow hover:scale-105 transition-transform border border-gray-700/40 text-white font-semibold">
                                <SiExpress />
                                Express.js
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow hover:scale-105 transition-transform border border-yellow-400/40 text-gray-900 font-semibold">
                                <SiFastify />
                                Fastify
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 shadow hover:scale-105 transition-transform border border-cyan-400/40 text-white font-semibold">
                                <SiFlutter />
                                Flutter
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 shadow hover:scale-105 transition-transform border border-pink-400/40 text-white font-semibold">
                                <SiLaravel />
                                Laravel
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 shadow hover:scale-105 transition-transform border border-gray-400/40 text-white font-semibold">
                                <SiSymfony />
                                Symfony
                            </span>
                        </div>
                    </div>
                    {/* Database */}
                    <div className="bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow flex flex-col gap-3">
                        <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Database</p>
                        <div className="flex flex-wrap gap-2 items-center snap-center">
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-800 via-cyan-900 to-cyan-950 shadow hover:scale-105 transition-transform border border-cyan-800/40 text-white font-semibold">
                                {/* MariaDB/MySQL */}
                                <SiMariadb />
                                MariaDB/MySQL
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 shadow hover:scale-105 transition-transform border border-green-400/40 text-white font-semibold">
                                {/* MongoDB */}
                                <SiMongodb />
                                MongoDB
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow hover:scale-105 transition-transform border border-blue-500/40 text-white font-semibold">
                                {/* Postgresql */}
                                <SiPostgresql />
                                Postgresql
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow hover:scale-105 transition-transform border border-blue-400/40 text-white font-semibold">
                                {/* MSSQL */}
                                <SiMysql />
                                MSSQL
                            </span>
                        </div>
                    </div>
                    {/* Softwares and OS */}
                    <div className="bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow flex flex-col gap-3">
                        <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">OS</p>
                        <div className="flex flex-wrap gap-2 items-center snap-center">
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 shadow hover:scale-105 transition-transform border border-pink-400/40 text-white font-semibold">
                                {/* Debian */}
                                <SiDebian />
                                Debian
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow hover:scale-105 transition-transform border border-blue-400/40 text-white font-semibold">
                                {/* Windows */}
                                <SiGitforwindows />
                                Windows
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow hover:scale-105 transition-transform border border-blue-400/40 text-white font-semibold">
                                <SiDocker />
                                Docker
                            </span>
                        </div>
                    </div>
                    <div className="bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow flex flex-col gap-3">
                        <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Softwares</p>
                        <div className="flex flex-wrap gap-2 items-center snap-center">
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 shadow hover:scale-105 transition-transform border border-orange-400/40 text-white font-semibold">
                                {/* Figma */}
                                <SiFigma />
                                Figma
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow hover:scale-105 transition-transform border border-blue-400/40 text-white font-semibold">
                                <SiJira />
                                Jira
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 shadow hover:scale-105 transition-transform border border-orange-400/40 text-white font-semibold">
                                {/* PostMan */}
                                <SiPostman />
                                PostMan
                            </span>
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