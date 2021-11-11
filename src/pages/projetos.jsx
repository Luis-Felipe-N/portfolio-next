import Head from 'next/head'
import { useEffect } from 'react'
import { Card } from "../components/Card"
import { useChangeColor } from '../hooks/useChangeColor'
import { getProjects } from "../lib/datoCMS"

import styles from '../styles/pages/projects.module.scss'


export default function Projetos({projects}) {

    const { changeColor } = useChangeColor()

    useEffect(() => {
        const bodyHaveTheme = document.body.className.includes('theme')
        
        if ( !bodyHaveTheme ) {
            changeColor()
        }
	}, [])

    return (
        <>
        <Head>
            <title>
                Luis | Projetos
            </title>
        </Head>
        <main className={styles.projectContainer}>
            <div className={styles.cardsContainer}>
                {
                    projects && (
                        projects.map( project => <Card key={project.id} project={project} />)
                    )
                }
            </div>
        </main>
        </>
    )
}

export const getStaticProps = async () => {
    const data = await getProjects()
    const projects = data.map( project => {
        return {
            id: project.id,
            code: project.code,
            preview: project.preview,
            createdAt: project.createdAt,
            description: project.description,
            title: project.title,
            thumb: {
                url: project.thumb.url
            },
            languages: project.languages.split(' ')
        }
    })

    return {
        props: {
            projects
        },
        revalidate: 60 * 60 * 1 // 1 horas
    }
}