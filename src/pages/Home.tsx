import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Hero } from '../sections/Hero';
import { useEffect, useState } from 'react';
import { About } from '../sections/About';
import { Tech } from '../sections/Tech';
import { Experiences } from '../sections/Experiences';
import { Studies } from '../sections/Studies';
import { Portfolio } from '../sections/Portfolio';
import { NavItem } from '../component/NavItem';

export function Home() {
    const [scrollPosition, updateScroll] = useState<[number, number]>([0, 0]);
    const [isDarkMode, setDarkMode] = useState<boolean>(false);
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const [selectedSection, setSelectedSection] = useState<string>('hero');

    addEventListener('scroll', () => { updateScroll([window.scrollX, window.scrollY]); });

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
        localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
    }, [isDarkMode]);

    useEffect(() => {
        const sections = Array.from(document.querySelectorAll('section')) as HTMLElement[];
        const handleScroll = () => {
            let currentSection: string = '';

            for (const section of sections) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = section.id;
                    break;
                }
            }
            if (currentSection) {
                setSelectedSection(currentSection);
            }

            document.querySelectorAll('.animate-on-scroll').forEach((el) => {
                const animateRect = el.getBoundingClientRect();

                if (animateRect.bottom <= window.innerHeight + 200) {
                    if (!el.classList.contains('play')) el.classList.add('play');
                } else {
                    if (!el.classList.contains('animate-once')) el.classList.remove('play');
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <FontAwesomeIcon onClick={() => { scrollTo({ top: 0, behavior: 'smooth' }); }} icon={faArrowUp} className={`text-4xl fixed bottom-0 right-0 m-5 z-[9999] text-white rounded-full bg-white/50 aspect-square w-8 h-8! p-3 ${scrollPosition[1] > 100 ? 'block!' : 'hidden!'}`} aria-label="Scroll to the top" />
            <header className={'fixed duration-300 w-screen p-2 items-center top-0 left-0 z-50'}>
                <div className='bg-gray-400/50 backdrop-blur-xs rounded-2xl px-4 py-2 items-center gap-2 flex justify-between relative'>
                    <Link to="/" >
                        <img title='Website logo' src="/assets/panda-128.png" className='w-12 h-12 invert dark:invert-0' alt="Norookezi's logo" />
                    </Link>
                    <ul className={`flex w-[30vw] min-w-[32rem] items-center max-md:flex-col max-md:bg-gray-200/50 max-md:dark:bg-gray-800/30 h-auto ${!isMenuOpen ? 'max-md:max-h-0 max-md:pb-0' : 'max-md:max-h-[100vh] max-md:pb-5'} overflow-clip  rounded-b-2xl duration-1000 max-md:backdrop-blur-md max-md:left-1/2 max-md:-translate-x-1/2 max-md:w-[90vw] max-md:*:p-2  gap-2 text-white font-semibold max-md:absolute top-full`}>
                        <NavItem name="Hero" activeSection={selectedSection} />
                        <NavItem name="About" activeSection={selectedSection} />
                        <NavItem name="Tech" activeSection={selectedSection} />
                        <NavItem name="Experiences" activeSection={selectedSection} />
                        <NavItem name="Studies" activeSection={selectedSection} />
                        <NavItem name="Portfolio" activeSection={selectedSection} />
                    </ul>
                    <div>
                        <FontAwesomeIcon onClick={() => { setDarkMode(!isDarkMode); }} icon={isDarkMode ? faMoon : faSun} className='text-4xl text-white dark:text-black' />
                        <FontAwesomeIcon onClick={() => { setMenuOpen(!isMenuOpen); }} icon={faBars} className='text-4xl text-white dark:text-black ml-4' />
                    </div>
                </div>
            </header>
            <Hero isSelected={selectedSection == 'hero'} />
            <About isSelected={selectedSection == 'about'} />
            <Tech isSelected={selectedSection == 'technology'} />
            <Experiences isSelected={selectedSection == 'experiences'} />
            <Studies isSelected={selectedSection == 'studies'} />
            <Portfolio isSelected={selectedSection == 'projects'} />
        </>
    );
}
