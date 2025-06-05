import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Hero } from '../sections/Hero';
import { useEffect, useState } from 'react';

export function Home() {
    const [scrollPosition, updateScroll] = useState<[number, number]>([0, 0]);
    const [isDarkMode, setDarkMode] = useState<boolean>(false);
    addEventListener('scroll', () => { updateScroll([window.scrollX, window.scrollY]); });
    
    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
        localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
    }, [isDarkMode]);

    return (
        <>
            <FontAwesomeIcon onClick={()=>{ scrollTo({top: 0, behavior: 'smooth'}); }} icon={faArrowUp} className={`text-4xl fixed bottom-0 right-0 m-5 z-[9999] text-white rounded-full bg-white/50 aspect-square w-8 h-8! p-3 ${scrollPosition[1] > 100 ? 'block!' : 'hidden!'}`} aria-label="Scroll to the top" />
            <header className={'fixed duration-300 w-screen p-2 items-center top-0 left-0 z-50 dark:invert'}>
                <div className='bg-gray-400/50 backdrop-blur-xs rounded-2xl px-4 py-2 items-center gap-2 flex justify-between'>
                    <Link to="/" >
                        <img src="/assets/panda-128.png" className='w-12 invert' alt="Norookezi's logo" />
                    </Link>
                    <FontAwesomeIcon onClick={()=>{setDarkMode(!isDarkMode);}} icon={isDarkMode?faMoon:faSun} className='text-4xl text-white' />
                </div>
            </header>
            <Hero />
        </>
    );
}
