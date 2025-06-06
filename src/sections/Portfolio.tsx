import { useEffect, useState } from 'react';
import type { SectionProps } from '../section';
import { getData } from '../fetchData';
import { ErrorFetch } from '../component/ErrorFetch';
import { LoadingFetch } from '../component/LoadingFetch';


interface Project {
    name: string,
    cover: string,
    description: string,
    url: string
}

export function Portfolio({ isSelected = false }: SectionProps) {
    if (isSelected) {
        document.documentElement.style = 'scroll-snap-type: y proximity;';
    }

    const [projects, updateProjectList] = useState<{ loading: boolean, error?: string, data?: Project[] }>({ loading: true });

    useEffect(() => {
        getData('/assets/projects.json', updateProjectList);
    }, []);

    return (
        <section id="projects" className="w-screen min-h-screen flex flex-col bg-white/95 dark:bg-gray-900/95 snap-start pb-[5vh]">
            <div className="w-full h-fit max-w-2xl md:max-w-4xl xl:max-w-7xl mx-auto p-10 mt-10 flex flex-col gap-6">
                <h2 className="font-extrabold text-3xl md:text-4xl text-gray-900 dark:text-white mb-2 tracking-tight">
                    My Projects
                </h2>
                {projects.loading && (<LoadingFetch />)}
                {projects.error && <ErrorFetch message="Fail fetch projects" description={projects.error} />}
                <div className="flex flex-wrap gap-5 justify-center animate--on-scroll">
                    {
                        projects.data &&
                        projects.data?.length == 0 &&
                        <div className="text-gray-500 dark:text-gray-400 text-center w-full py-8">
                            <span className="text-2xl">🚧</span>
                            <div className="mt-2 font-medium">
                                No projects to show yet. Stay tuned!
                            </div>
                        </div>
                    }
                    {projects.data!.length > 0 && projects.data!.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            style={{ animationDelay: `${index * 30}ms` }}
                            className="animate-card bg-white dark:bg-gray-800 rounded-lg w-fit shadow-md overflow-hidden flex flex-col transition-transform"
                        >
                            <img
                                src={item.cover}
                                alt=""
                                className="w-64 h-auto aspect-video object-cover bg-gray-200 dark:bg-gray-700"
                            />
                            <div className="p-4 flex flex-col gap-2">
                                <span className="font-semibold text-lg text-gray-900 dark:text-white">
                                    {item.name}
                                </span>
                                <p className="text-gray-700 max-w-56 dark:text-gray-300 text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}