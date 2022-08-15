import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { ReactNode } from 'react'


interface INavLinkProps {
    children: ReactNode;
    className: string;
    to: string
}

export default function NavLink({children, to, className, ...props}: INavLinkProps) {

    const {asPath} = useRouter()
    
    return (
        <Link  className={asPath == to ? className : ''} href={to}>
            <a {...props}>
                {children}
            </a>
        </Link>
    )
}