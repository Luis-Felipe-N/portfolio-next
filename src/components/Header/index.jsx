import Link from 'next/link'

import styles from './styles.module.scss'

import { BiSun, BiMoon, BiFolder, BiFolderOpen, BiRightArrowAlt } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import NavLink from '../NavLInk'

export function Header() {
    const [ ligthMode, setLigthMode ] = useState(false)
    const [ openMenu, setOpenMenu ] = useState()

    useEffect(() => {
        const mode = localStorage.getItem('ligthMode')
        if (mode) {
            document.body.classList.add('ligth-mode')
            setLigthMode('ligth')
        } else {
            setLigthMode('dark')
        }
    }, [])


    useEffect(() => {
        if (ligthMode == 'ligth') {
            document.body.classList.add('ligth-mode')
            localStorage.setItem('ligthMode', 'true')
        } else if (ligthMode == 'dark') {
            document.body.classList.remove('ligth-mode')
            localStorage.removeItem('ligthMode')
        }
    }, [ligthMode])

    return (
        <header className={styles.headerContainer}>
            <div>
                <Link href="/">
                    <a><h1 className={styles.logo}>Portifólio</h1></a>
                </Link>
                <nav className={openMenu ? styles.active : ''}>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/projetos">
                        Projetos <BiRightArrowAlt />
                    </NavLink>
                </nav>
                {
                    ligthMode == 'ligth'  ? (
                        <button
                            className={styles.ligth_mode}
                            onClick={() => setLigthMode('dark')}
                        >
                            <BiMoon size='1.5rem' />
                        </button>
                    ) : (
                        <button
                            className={styles.ligth_mode}
                            onClick={() => setLigthMode('ligth')}
                        >
                            <BiSun size='1.5rem' />
                        </button>
                    )
                }
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