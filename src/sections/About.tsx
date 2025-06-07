import type { SectionProps } from '../section';
import { activeTranslation } from '../translation';

export function About({ isSelected = false }: SectionProps) {
    if (isSelected) {
        document.documentElement.style = 'scroll-snap-type: y proximity;';
    }

    return (
        <section id="about" className="w-screen min-h-screen flex flex-col justify-center bg-white/95 dark:bg-gray-900/95 snap-start pb-[10vh]">
            <div className="w-full h-fit max-w-2xl md:max-w-2/3 mx-auto p-10 mt-10 flex flex-col gap-6 sticky top-10">
                <h2 className="font-extrabold text-3xl md:text-4xl text-gray-900 dark:text-white mb-2 tracking-tight">
                    {activeTranslation.aboutMe.title}
                </h2>
                <div className="flex flex-col md:flex-row md:items-center gap-8 bg-gray-300/20 dark:bg-gray-800/40 rounded-2xl p-6 shadow-lg animate-on-scroll animate-slide-left animate-resume-on-back">
                    <div className="relative w-32 h-32 mx-auto md:mx-0">
                        <img
                            title="Norookezi's profile picture"
                            src="/assets/norookezi.webp"
                            alt="Timothé Anquetil"
                            className="w-32 h-32 rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                        />
                        <img title="france flag" className="w-8 h-8 object-contain absolute bottom-2 right-2 bg-primary bg-white dark:bg-gray-900 text-xs px-2 py-0.5 rounded-full shadow-md" src="/assets/france.webp" alt="France flag" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                        <p className="text-xl md:text-2xl text-gray-900 dark:text-white font-extrabold mb-1 tracking-tight">
                            {activeTranslation.aboutMe.cardTitle}
                        </p>
                        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-1 [&_b]:font-bold [&_b]:text-gray-900 [&_b]:dark:text-white" dangerouslySetInnerHTML={{
                            __html: activeTranslation.aboutMe.cardDescription.replace(
                                '{}',
                                Math.floor((new Date().getTime() - new Date(1056499201000).getTime()) / (31536e6)).toString()
                            ),
                        }}></p>
                        <div className="flex gap-2 mt-2">
                            <span className="inline-block bg-green-700/20 dark:bg-green-700/40 text-gray-900 dark:text-white text-xs font-medium px-3 py-1 rounded-full">TypeScript</span>
                            <span className="inline-block bg-green-700/20 dark:bg-green-700/40 text-gray-900 dark:text-white text-xs font-medium px-3 py-1 rounded-full">React</span>
                            <span className="inline-block bg-green-700/20 dark:bg-green-700/40 text-gray-900 dark:text-white text-xs font-medium px-3 py-1 rounded-full">Node.js</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed md:text-lg md:leading-relaxed font-medium [&_b]:font-semibold [&_b]:text-gray-900 [&_b]:dark:text-white" dangerouslySetInnerHTML={{
                        __html: activeTranslation.aboutMe.description
                    }}>

                    </p>
                    <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg font-medium">
                        {activeTranslation.aboutMe.description2}
                    </p>
                    <div className="bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 shadow-xl flex flex-col gap-6 backdrop-blur-md">
                        <div>
                            <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-2 tracking-tight">{activeTranslation.aboutMe.QNATitle1}</h3>
                            <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">{activeTranslation.aboutMe.QNADescription1}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-2 tracking-tight">{activeTranslation.aboutMe.QNATitle2}</h3>
                            <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">{activeTranslation.aboutMe.QNADescription2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}