import styles from './styles.module.scss'

interface ITagProps {
    language: string
}

export function Tag( {language}: ITagProps ) {
    return (
        <span className={styles.tagContainer}>{ language.replace('#', '') }</span>
    )
}