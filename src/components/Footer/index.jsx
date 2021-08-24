import { useState } from 'react'
import styles from './styles.module.scss'

export default function Footer() {
    const [ disponivel, setDisponivel ] = useState(true)

    return (
        <footer className={styles.footerContainer}>
                <div>
                    <h2>Tecnologias usadas:</h2>
                    <ul>
                        <li>NextJS</li>
                        <li>SASS</li>
                        <li>DatoCMS</li>
                    </ul>
                </div>

                <div>
                    <h2>Contato:</h2>
                    <ul>
                        <li>(63) 9 9235-1977</li>
                        <li>luisj2felipe09@gmail.com</li>
                    </ul>
                    
                </div>

                <div>
                    <h2>Redes Socias</h2>
                    <ul>
                        <li>Twitter</li>
                        <li>linkedin</li>
                        <li>Instagram</li>
                    </ul>
                </div>

                <div className={styles.contact}>

                    <h2>
                        <span className={`${styles.pulse } ${disponivel ? styles.on : styles.off}`}></span>
                            {
                            disponivel ? (
                                <span className={styles.disponivel}>Disponível </span>
                            ) : (
                                <span className={styles.indisponivel}>Indisponível </span>
                            ) }
                         para projetos
                    </h2>
                </div>
        </footer>
    )
}