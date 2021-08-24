import { useEffect, useState } from "react"
import { BiSun, BiMoon } from 'react-icons/bi'

import styles from './styles.module.scss'

export function ButtonLigthMode() {
    const [ ligthMode, setLigthMode ] = useState(false)

    useEffect(() => {
        const mode = localStorage.getItem('ligthMode')
        if (mode) {
            document.body.classList.add('ligth-mode')
            setLigthMode(true)
        } else {
            setLigthMode(false)
        }
    }, [])

    const handleSetLigthMode = () => {
        document.body.classList.add('ligth-mode')
        localStorage.setItem('ligthMode', 'true')
        setLigthMode(true)
    }

    const handleSetDarkMode = () => {
        document.body.classList.remove('ligth-mode')
        localStorage.removeItem('ligthMode', 'true')
        setLigthMode(false)
    }

    return (
        <>
        {
            ligthMode  ? (
                <button
                    className={styles.ligth_mode}
                    onClick={handleSetDarkMode}
                >
                    <BiMoon size='1.5rem' />
                </button>
            ) : (
                <button
                    className={styles.ligth_mode}
                    onClick={ handleSetLigthMode}
                >
                    <BiSun size='1.5rem' />
                </button>
            )
        }
        </>
    )
}