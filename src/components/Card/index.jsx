import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import { Tag } from '../Tag'

import {BiCodeAlt, BiLink} from 'react-icons/bi'
import AnimationUp from '../AnimationUp'

export function Card({project}) {

    return (
        <AnimationUp>
            <article className={styles.cardContainer}>
            <Image 
                src={project.thumb.url}
                alt={project.title}
                title={project.title}
                width={300}
                height={200}
                objectFit="cover"
            />
            <div className={styles.info}>
                <h2>{project.title}</h2>

                <div className={styles.description} dangerouslySetInnerHTML={{ __html: project.description}} />
                
                <div className={styles.btns}>
                    <Link href={project.preview}>
                        <a aria-label="Link do site do projeto" target="_blank" rel="noreferrer" >Preview <BiLink /></a>
                    </Link>
                    <Link href={project.code}>
                        <a aria-label="Link do github do projeto" target="_blank" rel="noreferrer">Code <BiCodeAlt /></a>
                    </Link>
                </div>
                <div className={styles.languages}>
                    {project.languages.map( language => <Tag key={language} language={language} /> )}
                </div>
            </div>
        </article>
        </AnimationUp>
    )
}