import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Hero } from '../sections/Hero';
import { useState } from 'react';

export function Home() {
    const [scrollPosition, updateScroll] = useState<[number, number]>([0, 0]);
    
    addEventListener('scroll', () => { updateScroll([window.scrollX, window.scrollY]); });

    return (
        <>
            <FontAwesomeIcon onClick={()=>{ scrollTo({top: 0, behavior: 'smooth'}); }} icon={faArrowUp} className={`text-4xl fixed bottom-0 right-0 m-5 text-white rounded-full bg-white/50 aspect-square w-8 h-8! p-3 ${scrollPosition[1] > 100 ? 'block!' : 'hidden!'}`} aria-label="Scroll to the top" />
            <header className='fixed duration-300 w-screen p-2 items-center top-0 left-0 z-50'>
                <div className='bg-white/10 backdrop-blur-xs rounded-2xl px-4 py-2 items-center gap-2 flex justify-between'>
                    <Link to="/" >
                        <img src="/assets/panda-128.png" className='w-12 invert' alt="Norookezi's logo" />
                    </Link>
                    <FontAwesomeIcon icon={faBars} className='text-4xl invisible' aria-label="Menu (unused yet)" />
                </div>
            </header>
            <Hero />
        </>
    );
}
