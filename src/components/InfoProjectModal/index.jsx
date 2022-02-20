import { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import { getProject } from '../../lib/datoCMS'
import styles from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { BiLink, BiCodeAlt } from 'react-icons/bi'

export function InfoProjectModal( {idProject, isOpen, onRequestClose} ) {
    const [ project, setProject ] = useState()
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const requestProject = async () => {
            const data = await getProject( idProject ) 
            setProject( data)
            setLoading(false)
        }

        requestProject()
    }, [ idProject ])

    return (
        <>
        <ReactModal
            className={styles.modal}
            onRequestClose={ onRequestClose }
            isOpen={ isOpen }
        >
            {
                loading && (
                    <h1>Carregando...</h1>
                )
            }
            <button className={styles.btn_close} onClick={ onRequestClose }>
                X
            </button>
            
        {
            project && (
                <div className={styles.container}>
                    {
                        !project.video ? (
                            <div
                                className={styles.modal__thumb}
                                style={{backgroundImage: `url(${project.thumb.url})`}}
                            >
                            </div>
                        ) : (
                            <div
                                className={styles.modal__thumb}
                                style={{backgroundImage: `url(${project.thumb.url})`}}
                            >
                            </div>
                        )
                    }
                    
                    <div className={styles.modal__infos}>
                        <h1>{project.title}</h1>
                        <h4>Descrição</h4>
                        <p dangerouslySetInnerHTML={{ __html: project.description}}>
                        </p>

                        <h4>Linguagens</h4>
                        <div className={styles.modal__infos_bottom}>
                            <div className={styles.modal__infos_skills}>
                                {
                                    
                                project.languages.split(';').map( language => <img title={language} src={`./assets/${language.toLowerCase()}.png`} alt={language} key={language} /> )
                                }
                            </div>
                            <div className={styles.modal__infos_btns}>
                                <Link href={project.preview}>
                                    <a aria-label="Link do site do projeto" target="_blank" rel="noreferrer" >Preview <BiLink /></a>
                                </Link>
                                <Link href={project.code}>
                                    <a aria-label="Link do github do projeto" target="_blank" rel="noreferrer">Code <BiCodeAlt  /></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        </ReactModal>
        </>
    )
}