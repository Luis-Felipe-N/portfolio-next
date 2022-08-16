import Head from 'next/head'
import { MouseEvent, TouchEvent, useRef, useState } from 'react'
import { Card } from "../components/Card"
import { useChangeColor } from '../hooks/useChangeColor'
import { getProjects, getSkills } from "../lib/datoCMS"

import styles from '../styles/pages/projects.module.scss'
import { IProject } from '../types/Projects'
import { ISkill } from '../types/Skills'

interface IProjectsProps {
    skills: ISkill[];
    datoProjects: IProject[];
}

export default function Projetos({datoProjects, skills}: IProjectsProps) {
    const [projects, setProjects] = useState(datoProjects)
    const [skillProjectActive, setSkillProjectActive] = useState('all')
    const [isMouseDown, setIsMouseDown] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const slider = useRef<HTMLUListElement>(null)

    function handleChangeFilterProjectsBySkill(skill: string) {
        if (skill !== 'all') {
            const projectsFilted = datoProjects.filter(project => project.languages.includes(skill.toLowerCase()))
            setProjects(projectsFilted)
            setSkillProjectActive(skill)
        } else {
            setProjects(datoProjects)
            setSkillProjectActive('all')
        }
    }

    const handleMoveDown = (e: any) => {
       if (slider.current) {
            if (e.type === "touchstart") {
                console.log(e.changedTouches[0].pageX)
                setStartX(e.changedTouches[0].pageX - slider.current.offsetLeft)
            } else {
                e.preventDefault(); 
                setStartX(e.pageX - slider.current.offsetLeft)
            }
            setScrollLeft(slider.current.scrollLeft)
            setIsMouseDown(true)
       }
    }
    
    const handleMouseMove = (e: any) => {
        if(!isMouseDown) return;
        let move;
        if (slider.current) {
            if(e.type === "touchmove") {
                move = (e.changedTouches[0].pageX - slider.current.offsetLeft) - startX
            }  else {
                move = (e.pageX - slider.current.offsetLeft) - startX
            }
            slider.current.scrollLeft = scrollLeft - move
        }
    }
   
    return (
        <>
        <Head>
            <title>
                Luis | Projetos
            </title>
        </Head>
        <main className={styles.projectContainer}>
            <div className={styles.skillsContainer}>
            <ul
                ref={slider}
                onMouseLeave={( ) => setIsMouseDown(false)}
                onMouseUp={( ) => setIsMouseDown(false)}
                onMouseDown={handleMoveDown}
                onMouseMove={handleMouseMove}
                onTouchCancel={( ) => setIsMouseDown(false)}
                onTouchEnd={( ) => setIsMouseDown(false)}
                onTouchStart={handleMoveDown}
                onTouchMove={handleMouseMove}
                className={isMouseDown ? styles.active : ''}
            >
                <li
                    className={skillProjectActive === 'all' ? styles.active : ''}
                    onClick={() => handleChangeFilterProjectsBySkill('all')}
                >
                    Todos
                </li>
                { skills && (
                    skills.map(skill => (
                        <li 
                            key={skill.id}
                            onClick={() => handleChangeFilterProjectsBySkill(skill.name)}
                            className={skillProjectActive === skill.name ? styles.active : ''}
                        >
                            {skill.name}
                        </li>
                    ))
                )}
            </ul>
            </div>  
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

    const parsedSkills = await getSkills()
	const skills = parsedSkills.map( skill => {
		return {
			id: skill.id,
			name: skill.name,
			image: skill.image.url
		}
	})

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
            languages: project.languages.toLowerCase().split(';'),
            video: project.video
        }
    })

    const an_hour = 60 * 60 * 1

    return {
        props: {
            datoProjects: projects,
            skills
        },
        revalidate: an_hour,
    }
}