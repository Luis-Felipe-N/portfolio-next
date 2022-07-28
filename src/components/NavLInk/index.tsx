import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
// import styles from '../Header/styles.module.scss'

export default function NavLink({children, to, ...props}) {

    const {asPath} = useRouter()
    const className = asPath == to ? styles.active : ''
    
    return (
        <Link  className={className} href={to}>
            <a {...props}>
                {children}
            </a>
        </Link>
    )
}