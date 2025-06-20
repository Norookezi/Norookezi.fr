import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavItem } from './NavItem';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export function Header({ selectedSection = 'hero', navItems }: { selectedSection?: string, navItems?: string[] }) {
    const [isDarkMode, setDarkMode] = useState<boolean>(localStorage.getItem('darkMode') === 'true');
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');

        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    return (
        <>
            <header className={'fixed duration-300 w-screen p-2 items-center top-0 left-0 z-50'}>
                <div className='bg-gray-400/50 backdrop-blur-xs rounded-2xl px-4 py-2 items-center gap-2 flex justify-between relative'>
                    <Link to={{ pathname: '/' }} onClick={() => { window.scrollTo({ top: 0 }); }} >
                        <img title='Website logo' src="/assets/panda-128.png" className='w-12 h-12 invert dark:invert-0' alt="Norookezi's logo" />
                    </Link>
                    <ul className={`flex w-[30vw] md:min-w-[32rem] items-center max-w-[90vw] max-md:flex-col max-md:bg-gray-200/70 max-md:dark:bg-gray-800/70 h-auto ${!isMenuOpen ? 'max-md:max-h-0 max-md:pb-0' : 'max-md:max-h-[100vh] max-md:pb-5'} overflow-clip  max-md:rounded-b-2xl max-md:duration-1000 max-md:backdrop-blur-md max-md:left-1/2 max-md:-translate-x-1/2 max-md:w-[90vw] max-md:*:p-2  gap-2 text-white font-semibold max-md:absolute top-full transition-height`}>
                        {
                            navItems && navItems.map((item, index) => (
                                <NavItem key={index} name={item} activeSection={selectedSection} />
                            ))
                        }
                    </ul>
                    <div>
                        <FontAwesomeIcon onClick={() => { setDarkMode(!isDarkMode); }} icon={isDarkMode ? faMoon : faSun} className='text-4xl text-white dark:text-black' />
                        <FontAwesomeIcon onClick={() => { setMenuOpen(!isMenuOpen); }} icon={faBars} className='max-md:inline-block! hidden! text-4xl text-white dark:text-black ml-4' />
                    </div>
                </div>
            </header>
        </>
    );
} 
