import Document, { Html, Main, Head, NextScript } from 'next/document'


export default class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <meta name="theme-color" content="var(--background)"/>
                    {/* <meta http-equiv="X-UA-Compatible" content="ie=edge" /> */}
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
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

