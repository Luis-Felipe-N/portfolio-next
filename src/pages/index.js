import Router from 'next/router'
import { useEffect } from 'react'
import { Card } from '../components/Card'
import { Skill } from '../components/Skills'
import { getHomeProjects, getSkills } from '../lib/datoCMS'
import styles from '../styles/pages/home.module.scss'
import Head from 'next/head'

export default function Home({projects, skills}) {


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
					Luis | Home
				</title>
			</Head>
			<main className={styles.homeContainer}>
				<section className={styles.hero}>
					
					<div>
						<h1>Luis Felipe</h1>
						<p>Desenvolvedor Front-End</p>
						<a href="/assets/Curriculo-Luis.pdf" download="Curriculo-Luis">Download CV</a>
					</div>

				</section>
				<section className={styles.skills}>
					{
						skills && skills.map( skill => <Skill key={skill.id} image={skill.image} name={skill.name} />)
					}
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
	
	const parsedSkills = await getSkills()
	const skills = parsedSkills.map( skill => {
		return {
			id: skill.id,
			name: skill.name,
			image: skill.image.url
		}
	})


    const parsedProjects = await getHomeProjects()
    const projects = parsedProjects.map( project => {
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
            projects,
			skills
        },
		revalidate: 60 * 60 * 1 // 1 horas
    }
}