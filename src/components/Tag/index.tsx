import styles from './styles.module.scss'

export function Tag( {language} ) {
    return (
        <span className={styles.tagContainer}>{ language.replace('#', '') }</span>
    )
}