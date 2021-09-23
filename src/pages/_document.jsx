import Document, { Html, Main, Head, NextScript } from 'next/document'


export default class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <meta name="theme-color" content="var(--background)"/>
                    <meta name="description" content="Meu Nome é Luis Felipe, Desenvolvedor Front-End e atualmente cursando Ciências da Computação. Dezoito anos." />
                    <meta name="author" content="Luis Felipe Nunes de Carvalho" />
                    <meta name="keywords" content="sites, desenvolvimento web, front end, front-end, Luis Felipe Nunes de Carvalho, portifolio, portifólio" />
                    <meta name="copyright" content="© 2021 Luis Felipe" />
                    <meta name="robots" content="index,follow" />
                    <meta property="og:image" content="/perfil.jpeg" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;700&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet"/>
                    <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

