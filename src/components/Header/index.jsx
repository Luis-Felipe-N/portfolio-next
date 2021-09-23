import Link from 'next/link'

import styles from './styles.module.scss'

import { BiFolder, BiFolderOpen, BiRightArrowAlt } from 'react-icons/bi'
import { useState } from 'react'
import NavLink from '../NavLInk'
import { ButtonLigthMode } from '../ButtonLigthMode'

export function Header() {
    const [ openMenu, setOpenMenu ] = useState()

    return (
        <header className={styles.headerContainer}>
            <div>
                <Link href="/">
                    <a><h1 className={styles.logo}>Portifólio</h1></a>
                </Link>
                <nav className={openMenu ? styles.active : ''}>
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