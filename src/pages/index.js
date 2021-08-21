import Router from 'next/router'
import Image from 'next/image'
import { useEffect } from 'react'
import { Card } from '../components/Card'
import { Skill } from '../components/Skills'
import { getProjects } from '../lib/datoCMS'
import styles from '../styles/pages/home.module.scss'
import Head from 'next/head'

export default function Home({projects}) {

	useEffect(() => {
		document.body.classList.add('theme' + (Math.floor( Math.random() * 4) + 1))
	}, [])

	return (
		<>
			<Head>
				<title>
					Luis | Home
				</title>
			</Head>
			<main className={styles.homeContainer}>
				<section className={styles.hero}>
					<div className={styles.hero_image}>
						<Image 
							src="/home.png"	
							alt="Ilustração de um homem e figuras geometricas"
							width={300}
							height={330}
							objectFit="contain"
						/>
					</div>
					<div>
						<h1>Luis Felipe</h1>
						<p>Desenvolvedor Front-End</p>
						<button>Download CV</button>
					</div>
				</section>
				<section className={styles.skills}>
						<Skill
							image="/html.png"
							name="HTML"
						/>
						<Skill
							image="/css.png"
							name="CSS"
						/>
						<Skill
							image="/sass.svg"
							name="SASS"
						/>
						<Skill
							image="/js.png"
							name="JavaScript"
						/>
						<Skill
							image="/react.png"
							name="ReactJs"
						/>
						<Skill
							image="/next.png"
							name="NextJs"
						/>
				</section>
				<section className={styles.cards}>
					<div className={styles.cardsContainer}>
						{
							projects && (
								projects.map( project => <Card key={project.id} project={project} />)
							)
						}
					</div>
					<button onClick={() => Router.push('/projetos')} className={styles.btn_view_more}>Ver mais</button>
				</section>
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
        }
    }
}