import Image from 'next/image'
import styles from './styles.module.scss'

export function Skill({image, name}) {
    return (
        <article title={'Tecnologia ' + name} className={styles.skillContainer}>
            <Image
                src={image}
                alt={'Tecnologia' + name}
                title={name}
                width={70}
                height={70}
                objectFit="contain"
            />
            <h4>{name}</h4>
        </article>
    )
}