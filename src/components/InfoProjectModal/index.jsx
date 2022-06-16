import { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import { getProject } from '../../lib/datoCMS'
import styles from './style.module.scss'
import Link from 'next/link'
import { BiLink, BiCodeAlt } from 'react-icons/bi'
import { Loading } from '../Loading'
import AnimationUp from '../AnimationUp'
import Image from 'next/image'

const typeThumb =[
    {
        id: 0,
        type: 'image'
    },
    {
        id: 1,
        type: 'video'
    },
]


export function InfoProjectModal( {idProject, isOpen, onRequestClose} ) {
    const [ project, setProject ] = useState()
    const [ loading, setLoading ] = useState(true)
    const [ CurrentViewThumb, setCurrentViewThumb ] = useState(0)

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
            overlayClassName={styles.modalOverlay}
            onRequestClose={ onRequestClose }
            isOpen={ isOpen }
            // className={}
        >
            {
                loading && (
                    <Loading/>
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
                                style={{backgroundImage: `linear-gradient(90deg, var(--color-900-alpha) 0%, var(--color-900-alpha) 98%), url(${project.thumb.url})`}}
                            >
                                <Image
                                    src={project.thumb.url}
                                    width={project.thumb.width}
                                    height={project.thumb.height}
                                    alt="fsfd"
                                    />
                            </div>
                        ) : (
                            <div
                                style={{backgroundImage: `linear-gradient(90deg, var(--color-900-alpha) 0%, var(--color-900-alpha) 98%), url(${project.thumb.url})`}}
                                className={`${styles.modal__thumb} ${styles.containerIframe}`}
                            >
                                <iframe className={styles.responsiveIframe} src={`https://www.youtube.com/embed/${project.video.providerUid}`} title={`Video de demosntração do projeto ${project.name}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        )
                    }
                    {/* <div className={styles.modal__choise_banner}>
                        <button className={styles.active}>Imagem</button>
                        {project.video && (
                            <button>Vídeo</button>
                            )
                        }
                    </div> */}
                    <AnimationUp>
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
                    </AnimationUp>
                </div>
            )
        }
        </ReactModal>
        </>
    )
}