import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {

    // router for back arrow button
    //const router = useRouter();

    // Responsive navbar
    const [navActive, setNavActive] = useState<boolean>(false);

    return (
      <>
        <header className='flex flex-row justify-start mt-8 mx-6 md:hidden'>
          <div className='flex justify-center self-start absolute top-6 left-8'>
            <button onClick={() => setNavActive(!navActive)}><Image className="text-3xl" priority src="../../public/menu-outline.svg" height={40} width={40} /></button>
          </div>
          { navActive ? (
            <div id="menu" className="w-full transition-all ease-in-out bg-black">
              <div className='flex flex-col duration-300 ease-out mt-5 mx-4 space-y-5 justify-center items-center bg-black'>
                <Link legacyBehavior href="/"><a className={styles.headerButton} onClick={() => setNavActive(!navActive)}>Home</a></Link>
                <Link legacyBehavior href="/About"><a className={styles.headerButton} onClick={() => setNavActive(!navActive)}>About</a></Link>
              </div>
            </div>
          ) : (
            <></>
          )}
        </header>

        <header className='flex flex-row justify-center mt-8 mx-6 hidden md:block'>
            <div className='flex flex-row space-x-4 flex-wrap gap-y-4 justify-center'>
              <Link legacyBehavior href="/"><a className={styles.headerButton}>Home</a></Link>
              <Link legacyBehavior href="/About"><a className={styles.headerButton}>About</a></Link>
            </div>
        </header>
      </>
    );
}

export default Header;