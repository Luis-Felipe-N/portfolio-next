import Link from 'next/link'

import styles from './styles.module.scss'

import { BiSun, BiMoon, BiFolder, BiFolderOpen } from 'react-icons/bi'
import { useState } from 'react'

export function Header() {
    const [ ligthMode, setLigthMode ] = useState(false)
    const [ openMenu, setOpenMenu ] = useState(false)

    return (
        <header className={styles.headerContainer}>
            <div>
                <Link href="/">
                    <a><h1 className={styles.logo}>Portifólio</h1></a>
                </Link>
                <nav className={openMenu ? styles.active : ''}>
                    <Link href="/">
                        <a className={styles.active}>Home</a>
                    </Link>
                    <Link href="/">
                        <a>Skills</a>
                    </Link>
                    <Link href="/">
                        <a>Projetos</a>
                    </Link>
                    <Link href="/">
                        <a>Contato</a>
                    </Link>
                </nav>
                <button
                    className={styles.ligth_mode} 
                    onClick={()=>{
                        document.body.classList.toggle('ligth-mode')
                        setLigthMode(!ligthMode)
                    }}
                >
                    {
                        ligthMode ? <BiMoon size='1.5rem' /> : <BiSun size='1.5rem' />
                    }
                </button>
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