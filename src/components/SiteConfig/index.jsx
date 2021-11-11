import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss'

import { BsGear, BsMoonStarsFill, BsFillBrightnessHighFill } from 'react-icons/bs'
import { useChangeColor } from '../../hooks/useChangeColor';
import { ButtonLigthMode } from '../ButtonLigthMode';
import { useClickOutSide } from '../../hooks/useClickOutSide';

const colors = [{
    color: '#553C9A',
    theme: 1
    }, {
        color: '#D53F8C',
        theme: 2
    }, {
        color: '#38A169',
        theme: 3
    }, {
        color: '#3182CE',
        theme: 4
    }]

export function SiteConfig() {
    const [ openModal, setOpenModal ] = useState(false)
    const siteConfigRef = useRef()


    const handleChangeColor = (theme) => {
        useChangeColor(theme)
    }

    useEffect(() => {
        if ( openModal ) {
            useClickOutSide( siteConfigRef.current, openModal, setOpenModal )
        }
    })

    return (
        <div className={styles.siteConfigContainer}>
            <button
                className={styles.btnOpen}
                onClick={() => setOpenModal(!openModal)}
            >
                <BsGear size="22px" />
            </button>
            <div ref={siteConfigRef} className={openModal && styles.active }>
                <div>
                    <h4>Cores</h4>
                    <ul>
                        {
                            colors.map( ({color, theme}) => (
                                <li 
                                    onClick={() => handleChangeColor(theme)}
                                    key={color} 
                                    aria-label="Cor do site" 
                                    style={{backgroundColor: color}}
                                >

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
