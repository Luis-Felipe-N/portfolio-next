import Head from 'next/head'
import { useEffect } from 'react'
import { Card } from "../components/Card"
import { getProjects } from "../lib/datoCMS"

import styles from '../styles/pages/projects.module.scss'


export default function Projetos({projects}) {

    useEffect(() => {
        for (let index = 0; index <= 4; index++) {
            document.body.classList.remove('theme' + index)
            
        }
		document.body.classList.add('theme' + (Math.floor( Math.random() * 4) + 1))
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
            }
        }
    })

    return {
        props: {
            projects
        },
        revalidate: 10
    }
}