import { useEffect, useState } from 'react';
import type { SectionProps } from '../section';
import { getData } from '../fetchData';
import { ErrorFetch } from '../component/ErrorFetch';
import { LoadingFetch } from '../component/LoadingFetch';
import { activeTranslation } from '../translation';

interface Studies {
    title: string
    period: string
    company: string
    location: string
    description: string | string[]
}

export function Studies({ isSelected = false }: SectionProps) {
    if (isSelected) {
        document.documentElement.style = 'scroll-snap-type: y proximity;';
    }

    const [studies, updateStudies] = useState<{ loading: boolean, error?: string, data?: Studies[] }>({ loading: true });

    useEffect(() => {
        getData(`/assets/studies-${activeTranslation.lang}.json`, updateStudies);
    }, []);

    return (
        <section id="studies" className="w-screen min-h-screen flex flex-col justify-center bg-white/95 dark:bg-gray-900/95 snap-start pb-[5vh]">
            <div className="w-full h-fit max-w-2xl md:max-w-2/3 mx-auto p-10 mt-10 flex flex-col gap-6 sticky top-10">
                <h2 className="font-extrabold text-3xl md:text-4xl text-gray-900 dark:text-white mb-2 tracking-tight">
                    {activeTranslation.studies.title}
                </h2>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed md:text-lg md:leading-relaxed font-medium">
                    {activeTranslation.studies.description}
                </p>
                <ul className="list-disc pl-5 space-y-4">
                    {studies.loading && (<LoadingFetch />)}
                    {studies.error && <ErrorFetch message="Fail fetch studies" description={studies.error} />}
                    {studies.data && studies.data!.map((item, index) => (
                        <li key={index} className="text-gray-700 dark:text-gray-300 snap-center animate-once animate-on-scroll animate-resume-on-back animate-slide-left">
                            <div className="space-y-2">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                    <strong className="text-lg">{item.title}</strong>
                                    <span className="text-sm text-gray-500">({item.period})</span>
                                </div>
                                <strong className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                                    <span>{item.company}</span> <span className="mx-1">|</span> <span>{item.location}</span>
                                </strong>
                                {
                                    typeof item.description === 'string' ? item.description : <>
                                        {item.description.map((line, i) => (
                                            <p key={i} className="*:font-medium" dangerouslySetInnerHTML={{ __html: line }}></p>
                                        ))}
                                    </>
                                }
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}