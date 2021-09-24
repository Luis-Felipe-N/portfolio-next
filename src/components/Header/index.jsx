import Link from 'next/link'

import styles from './styles.module.scss'

import { BiFolder, BiFolderOpen, BiRightArrowAlt } from 'react-icons/bi'
import { useEffect, useRef, useState } from 'react'
import NavLink from '../NavLInk'
import { ButtonLigthMode } from '../ButtonLigthMode'

export function Header() {
    const [ openMenu, setOpenMenu ] = useState()
    const menuRef = useRef()

    useEffect(() => {
        if ( openMenu ) {
            document.addEventListener('click', handleClickOutSideMenu)
            
            function handleClickOutSideMenu({target}) {
                if(!target.contains(menuRef.current)) {
                    setOpenMenu(!openMenu)
                    document.removeEventListener('click', handleClickOutSideMenu)
                }
            }
        }
    }, [openMenu])

    return (
        <header className={styles.headerContainer}>
            <div>
                <Link href="/">
                    <a><h1 className={styles.logo}>Portifólio</h1></a>
                </Link>
                <nav ref={menuRef} className={openMenu ? styles.active : ''}>
                    <NavLink className={styles.active} to="/">
                        Home
                    </NavLink>
                    <NavLink to="/projetos">
                        Projetos <BiRightArrowAlt />
                    </NavLink>
                </nav>

                <ButtonLigthMode />

                <button 
                    onClick={() => setOpenMenu(!openMenu)}
                    className={styles.btn_mobile}>
                    {
                        openMenu ? (
                            <>Close<BiFolderOpen size="1.5rem" /></>
                        ) : (
                            <>Open<BiFolder size="1.5rem" /></>
                        )
                    }
                </button>

            </div>
        </header>
    )
}