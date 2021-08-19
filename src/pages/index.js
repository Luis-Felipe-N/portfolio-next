import Image from 'next/image'
import { Skill } from '../components/Skills'

import styles from '../styles/pages/home.module.scss'


export default function Home() {
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
		</main>
  	)
}
