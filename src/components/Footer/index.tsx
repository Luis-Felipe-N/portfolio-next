import { useState } from 'react'
import styles from './styles.module.scss'

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

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
                    <ul className={styles.redesSocias}>
                        <li>
                            <a title="Github" target="_blank" rel="noreferrer" href="https://github.com/Luis-Felipe-N">
                                <FaGithub size={'1.5rem'}/>
                            </a>
                        </li>
                        <li>
                            <a title='Linkedin' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/luis-felipe-nunes-de-carvalho-02055b207/">
                                <FaLinkedin size={'1.5rem'}/>
                            </a>
                        </li>
                        {/* <li>
                            <a title='Instagram' target="_blank" rel="noreferrer" href="https://www.instagram.com/luis_felipenc17/">
                                <FaInstagram size={'1.5rem'}/>
                            </a>
                        </li> */}
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
                         para freelancers
                    </h2>
                </div>
        </footer>
    )
}