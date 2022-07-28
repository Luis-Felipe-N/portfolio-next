import Router from 'next/router'
import { useEffect } from 'react'
import { Card } from '../components/Card'
import { Skill } from '../components/Skills'
import { getHomeProjects, getProject, getSkills } from '../lib/datoCMS'
import styles from '../styles/pages/home.module.scss'
import Head from 'next/head'
import AnimationUp from '../components/AnimationUp'
import { ISkill } from '../types/Skills'
import { IProject } from '../types/Projects'


interface IHomeProps {
	projects: IProject[];
	skills: ISkill[]
}

export default function Home({projects, skills}: IHomeProps) {

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
						
						<div>
							<h1>Luis Felipe</h1>
							<p>Desenvolvedor Front-End <br/> Cursando Ciências da Computação (2/8) na <a className={styles.link} href="https://ww2.uft.edu.br/">UFT</a>.</p>
							<a className={styles.download} href="/assets/Curriculo.pdf" download="Curriculo-Luis">Currículo</a>
						</div>

					</section>
				</AnimationUp>
				<section className={styles.skillsContainer}>
					<ul className={styles.skills}>
					{
						skills && (
							skills.map(skill => <Skill key={skill.id} image={skill.image.url} name={skill.name} />)
						)
					}
					{
						skills && (
							skills.map(skill => <Skill key={skill.id} image={skill.image.url} name={skill.name} />)
						)
					}
					{
						skills && (
							skills.map(skill => <Skill key={skill.id} image={skill.image.url} name={skill.name} />)
						)
					}
					</ul>
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
			image: {
				url: skill.image.url
			}
		}
	})

    const parsedProjects = await getHomeProjects()
    const projects = parsedProjects.map( (project, index) => {
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
            languages: project.languages,
            video: project.video
        }
    })

	console.log(projects)

    return {
        props: {
            projects,
			skills
        },
		revalidate: 60 * 60 * 24 // 1 dia
    }
}