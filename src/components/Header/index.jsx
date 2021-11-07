import { useEffect, useRef, useState } from 'react'

import Link from 'next/link'
import {useRouter} from 'next/router'

import styles from './styles.module.scss'

import { BiFolder, BiFolderOpen, BiRightArrowAlt } from 'react-icons/bi'
import { ButtonLigthMode } from '../ButtonLigthMode'

export function Header() {
    const [ openMenu, setOpenMenu ] = useState()
    const [ currentPage, setCurrentPage ] = useState()

    const menuRef = useRef()
    const makerRef = useRef()
    const homeLinkRef = useRef()
    const projectsLinkRef = useRef()

    const router = useRouter()

    const moveInNav = (elem) => {
        makerRef.current.style.width = `${elem.clientWidth}px`
        makerRef.current.style.left = `${elem.offsetLeft}px`
    }

    const moveMakerOfPage = () => moveInNav(currentPage.current)

    useEffect(() => {
        if ( currentPage ) return moveMakerOfPage()
    }, [currentPage])

    useEffect(() => {
        const currentPage = router.asPath
        
        if ( !openMenu ) {
            currentPage === '/projetos' ? setCurrentPage(projectsLinkRef) : setCurrentPage(homeLinkRef)
        }
    }, [router])

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
                    <a>
                        <h1 className={styles.logo}>
                            <img 
                                alt="Texto colorido escrito Luis Felipe"
                                title="Luis Felipe"
                                aria-label="Link pra ir para home"
                                src="/logo.png"
                            />
                        </h1>
                    </a>
                </Link>
                <nav ref={menuRef} className={openMenu ? styles.active : ''}>
                    <Link href="/">
                        <a
                            onMouseEnter={({target}) => moveInNav(target)}
                            onMouseOut={moveMakerOfPage}
                            ref={homeLinkRef}
                            className={router.asPath === '/' ? styles.active : ''} 
                        >
                            Home
                        </a>
                    </Link>
                    <Link href="/projetos">
                        <a 
                            onMouseEnter={({target}) => moveInNav(target)}
                            onMouseOut={moveMakerOfPage}
                            ref={projectsLinkRef}
                            className={router.asPath === '/projetos' ? styles.active : ''} 
                        >
                            Projetos <BiRightArrowAlt />
                        </a>
                    </Link>
                    <span ref={makerRef} className={styles.maker}></span>
                </nav>

                <ButtonLigthMode aria-label="Botão de Dark mode" />

                <button 
                    aria-label="Botão de abrir menu"
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