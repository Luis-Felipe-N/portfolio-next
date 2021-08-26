import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/pages/404.module.scss'

export default function PageNotFund() {
    useEffect(() => {
		for (let index = 0; index <= 4; index++) {
            document.body.classList.remove('theme' + index)     
        }
		document.body.classList.add('theme' + (Math.floor( Math.random() * 4) + 1))
		
	}, [])

    return (
        <div className={styles.conatinerPageNotFound}>
            <h2>Página não encontrada</h2>
            <Image 
                src='/among.png'
                width={400}
                // layout="fill"
                objectFit="contain"
                height={400}
                
            />
            <Link  href="/">
                <a>Volte para onde tudo começou</a>
            </Link>
        </div>
    )
}