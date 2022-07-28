import { useEffect, useRef, useState } from 'react'

import Link from 'next/link'
import {useRouter} from 'next/router'

import styles from './styles.module.scss'

import { BiFolder, BiFolderOpen, BiRightArrowAlt } from 'react-icons/bi'
import { SiteConfig } from '../SiteConfig'
import { useClickOutSide } from '../../hooks/useClickOutSide'

export function Header() {
    const [ openMenu, setOpenMenu ] = useState(false)

    const menuRef = useRef<HTMLElement>(null)
    const makerRef = useRef<HTMLSpanElement>(null)
    const homeLinkRef = useRef<HTMLAnchorElement>(null)
    const projectsLinkRef = useRef<HTMLAnchorElement>(null)

    const router = useRouter()

    const { clickOutSide } = useClickOutSide()

    const moveInNav = (elem: HTMLAnchorElement) => {
        if (makerRef.current) {
            makerRef.current.style.width = `${elem.clientWidth}px`
            makerRef.current.style.left = `${elem.offsetLeft}px`
        }
    }

    useEffect(() => {
        const currentPage = router.asPath
        
        if (projectsLinkRef.current && homeLinkRef.current) {
            currentPage === '/projetos' ? moveInNav(projectsLinkRef.current) : moveInNav(homeLinkRef.current)
        }
    }, [router])

    useEffect(() => {
        if ( openMenu && menuRef.current ) {
            clickOutSide( menuRef.current, openMenu, setOpenMenu )
        }
    }, [openMenu, clickOutSide])

    return (
        <header className={styles.headerContainer}>
            <div >
                <Link href="/">
                    <a>
                        <picture className={styles.logo}>
                            <source 
                                srcSet='/logo-mobile.png'
                                media="(max-width: 800px)"
                            />
                            <img 
                                alt="Texto colorido escrito Luis Felipe"
                                title="Luis Felipe"
                                aria-label="Link pra ir para home"
                                src="/logo.png"
                            />
                        </picture>
                    </a>
                </Link>
                <nav ref={menuRef} className={openMenu ? styles.active : ''}>
                    <Link href="/">
                        <a
                            ref={homeLinkRef}
                            className={router.asPath === '/' ? styles.active : ''} 
                        >
                            Home
                        </a>
                    </Link>
                    <Link href="/projetos">
                        <a 
                            ref={projectsLinkRef}
                            className={router.asPath === '/projetos' ? styles.active : ''} 
                        >
                            Projetos
                        </a>
                    </Link>
                    <span ref={makerRef} className={styles.maker}></span>
                </nav>

                <SiteConfig />

                <button 
                    aria-label="Botão de abrir menu"
                    onClick={() => setOpenMenu(!openMenu)}
                    className={styles.btn_mobile}>
                    {
                        openMenu ? (
                            <>Fechar<BiFolderOpen size="1.5rem" /></>
                        ) : (
                            <>Abrir<BiFolder size="1.5rem" /></>
                        )
                    }
                </button>

            </div>
        </header>
    )
}