import  Head from 'next/head'
import {useEffect} from 'react'

const CustomHead = ({title, description}) => {
    
    useEffect(() => {
        const viewport = document.getElementById('viewport-meta')
        if(!viewport) return
        const viewports = {
            default: viewport.getAttribute('content'),
            landscape: 'width = 2560',
            portait: 'width = 768' 
        }
        const setViewport = function(){
            screen.width > 2560
                ? viewport.setAttribute('content', viewports.landscape)
                : screen.width >= 768 && screen.width < 1200
                ? viewport.setAttribute('content', viewports.portait)
                : viewport.setAttribute('content', viewports.default)
        }

        setViewport()
        window.onresize = function() {
            setViewport()
        }
    }, [])

    return(
        <Head>
            <title>{`Shashank Bhat | ${title}` || 'Shashank Bhat - Web Developer' }</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;600;700&display=swap" rel="stylesheet"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <meta name="description" content="Shashank Bhat - Web Developer" />
            <meta
                name="viewport"
                content="width=device-width, user-scalable=no, initial-scale=1, shrink-to-fit=no"
                id="viewport-meta"
            />
            <link rel="icon" href="static/favicon.svg" />
            <meta name="author" content="Shashank Bhat" />
            <meta property="og:title" content="Shashank Bhat" />
            <meta name="og:description" content="Shashank Bhat - Web Developer"/>
            <meta property="og:site_name" content="Shashank Bhat - Web Developer" />
            <meta property="og:image" content="../../public/static/logo_black.svg" />
            <meta
                name="keywords"
                content="Web Developer, Front End Developer, Full Stack Developer, Web Developer Bangalore, React Developer, Nextjs Developer"
            />
             <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            />
        </Head>
    )
}

export default CustomHead;