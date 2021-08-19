import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { Skill } from '../components/Skills'
import { getProjects } from '../lib/datoCMS'

import styles from '../styles/pages/home.module.scss'


export default function Home() {
	const [ projects, setProjects ] = useState()

	// useEffect(() => {
	// 	const effectGetProjects = async () => {
	// 		const data = await getProjects()
	// 		const projectsParsed = data.map( ({id, project}) => project.map( item => {
	// 			return {
	// 				id: id,
	// 				image: item.image
	// 			}
	// 		}))
	// 		console.log(data, projectsParsed)
	// 		setProjects(projectsParsed)
	// 	}

	// 	effectGetProjects()
	// }, [])

	return (
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
						image="/js.png"
						name="JavaScript"
					/>
					<Skill
						image="/html.png"
						name="HTML"
					/>
					<Skill
						image="/react.png"
						name="ReactJs"
					/>
			</section>
			<section className={styles.cards}>
				<div>
					{/* {
						projects && (
							projects.map( project => <Card project={project} />)
						)
					} */}
				</div>
				<button>Ver mais</button>
			</section>
		</main>
  	)
}
