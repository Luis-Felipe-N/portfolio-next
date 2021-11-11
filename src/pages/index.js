import Router from 'next/router'
import { useEffect } from 'react'
import { Card } from '../components/Card'
import { Skill } from '../components/Skills'
import { getHomeProjects, getSkills } from '../lib/datoCMS'
import styles from '../styles/pages/home.module.scss'
import Head from 'next/head'
import AnimationUp from '../components/AnimationUp'
import { SiteConfig } from '../components/SiteConfig'
import { useChangeColor } from '../hooks/useChangeColor'

export default function Home({projects, skills}) {

	const { changeColor} = useChangeColor()

	useEffect(() => {
		const bodyHaveTheme = document.body.className.includes('theme')
        
        if ( !bodyHaveTheme ) {
            changeColor()
        }
	}, [changeColor])


	return (
		<>
			<Head>
				<title>
					Luis | Home
				</title>
			</Head>
			<main className={styles.homeContainer}>
				<AnimationUp>
					<section className={styles.hero}>
			{/* <SiteConfig /> */}
						
						<div>
							<h1>Luis Felipe</h1>
							<p>Desenvolvedor Front-End <br/> Cursando Ciências da Computação na <a className={styles.link} href="https://ww2.uft.edu.br/">UFT</a>.</p>
							<a className={styles.download} href="/assets/Curriculo-Luis.pdf" download="Curriculo-Luis">Currículo</a>
						</div>

					</section>
				</AnimationUp>
				<section className={styles.skills}>
					{
						skills && skills.map( skill => <Skill key={skill.id} image={skill.image} name={skill.name} />)
					}
				</section>
				<AnimationUp>
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
				</AnimationUp>
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
            },
			languages: project.languages.split(' ')
        }
    })


    return {
        props: {
            projects,
			skills
        },
		revalidate: 60 * 60 * 24 // 1 horas
    }
}