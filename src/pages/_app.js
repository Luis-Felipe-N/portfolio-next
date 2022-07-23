import '../styles/global.scss'
import { Header } from '../components/Header'
import Footer from '../components/Footer'
import { NextSeo } from 'next-seo'
import { useChangeColor } from '../hooks/useChangeColor'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  console.log(`
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣴⣆⣠⣤⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣻⣿⣯⣘⠹⣧⣤⡀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠿⢿⣿⣷⣾⣯⠉⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⠜⣿⡍⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⠁⠀⠘⣿⣆⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡟⠃⡄⠀⠘⢿⣆⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣁⣋⣈ ⣤⣮⣿⣧⡀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⣤⣤⣤⣤⣶⣦⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⡿⠛⠉⠙⠛⠛⠛⠛⠻⢿⣿⣷⣤⡀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⠋⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠈⢻⣿⣿⡄⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⣸⣿⡏⠀⠀⠀⣠⣶⣾⣿⣿⣿⠿⠿⠿⢿⣿⣿⣿⣄⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⣿⣿⠁⠀⠀⢰⣿⣿⣯⠁⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣷⡄⠀
  ⠀⠀⣀⣤⣴⣶⣶⣿⡟⠀⠀⠀⢸⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣷⠀
  ⠀⢰⣿⡟⠋⠉⣹⣿⡇⠀⠀⠀⠘⣿⣿⣿⣿⣷⣦⣤⣤⣤⣶⣶⣶⣶⣿⣿⣿⠀
  ⠀⢸⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀
  ⠀⣸⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠉⠻⠿⣿⣿⣿⣿⡿⠿⠿⠛⢻⣿⡇⠀⠀
  ⠀⣿⣿⠁⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣧⠀⠀
  ⠀⣿⣿⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀
  ⠀⣿⣿⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀
  ⠀⢿⣿⡆⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀
  ⠀⠸⣿⣧⡀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠃⠀⠀
  ⠀⠀⠛⢿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⣰⣿⣿⣷⣶⣶⣶⣶⠶⠀⢠⣿⣿⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⣿⣿⡇⠀⣽⣿⡏⠁⠀⠀⢸⣿⡇⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⣿⣿⡇⠀⢹⣿⡆⠀⠀⠀⣸⣿⠇⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⢿⣿⣦⣄⣀⣠⣴⣿⣿⠁⠀⠈⠻⣿⣿⣿⣿⡿⠏⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠈⠛⠻⠿⠿⠿⠿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  Seu Impostooooroooooooor!!!!!
  `)

  const { changeColor } = useChangeColor()

	useEffect(() => {
		const bodyHaveTheme = document.body.className.includes('theme')
        
        if ( !bodyHaveTheme ) {
            changeColor()
        }
	}, [changeColor])

  return (
    <>
        <NextSeo
        title="Portfólio Luis Felipe"
        description="Meu Nome é Luis Felipe, Desenvolvedor Front-End e atualmente cursando Ciências da Computação. Dezoito anos."
        canonical="https://luisnunes.me"
        openGraph={{
            url: 'https://luisnunes.me',
            title: 'Portfólio Luis Felipe',
            description: 'Meu Nome é Luis Felipe, Desenvolvedor Front-End e atualmente cursando Ciências da Computação. Dezoito anos.',
            locale: 'PT_BR',
            canonical: 'https://luisnunes.me',
            images: [
            {
                url: '/logo.png',
                width: 100,
                height: 100,
                alt: 'Logo com nome Luis Felipe',
                type: 'image/png',
            },
            {
                url: '/logo.png',
                width: 100,
                height: 100,
                alt: 'Logo com nome Luis Felipe',
                type: 'image/png',
            },
            { url: '/logo.png' },
            { url: '/logo.png' },
            ],
            site_name: 'Portfólio Luis Felipe',
        }}
        twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
        }}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
