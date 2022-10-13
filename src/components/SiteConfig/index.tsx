import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss'

import { BsGear, BsMoonStarsFill, BsFillBrightnessHighFill } from 'react-icons/bs'
import { useChangeColor } from '../../hooks/useChangeColor';
import { ButtonLigthMode } from '../ButtonLigthMode';
import { useClickOutSide } from '../../hooks/useClickOutSide';

const colors = [
    {
        color: '#553C9A',
        name: 'Roxo',
        theme: 1
    }, {
        color: '#D53F8C',
        name: 'Rosa',
        theme: 2
    }, {
        color: '#38A169',
        name: 'Verde',
        theme: 3
    }, {
        color: '#3182CE',
        name: 'Azul',
        theme: 4
    }]

export function SiteConfig() {
    const [ openModal, setOpenModal ] = useState(false)
    const siteConfigRef = useRef<HTMLDivElement>(null)

    const { changeColor } = useChangeColor()
    const { clickOutSide } = useClickOutSide()

    const handleChangeColor = ( themeId: number ) => {
        changeColor(themeId)
    }


    return (
        <div className={styles.siteConfigContainer}>
            <button
                className={styles.btnOpen}
                onClick={() => setOpenModal(!openModal)}
                title="Configuração de cor do site"
            >
                <BsGear size="22px" />
            </button>
            <div ref={siteConfigRef} className={openModal ? styles.active : '' }>
                <div>
                    <h4>Cores</h4>
                    <ul>
                        {
                            colors.map( ({color, theme, name}) => (
                                <li 
                                    key={color} 
                                >
                                    <button 
                                        tabIndex={0}
                                        title={`Mudar cor do site para ${name}`}
                                        onClick={() => handleChangeColor(theme)}
                                        aria-label={`Mudar cor do site para ${name}`}
                                        style={{backgroundColor: color}}>

                                    </button>

                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h4>Temas</h4>
                    <ButtonLigthMode />
                </div>
            </div>
        </div>
    );
}
