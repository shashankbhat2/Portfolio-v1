import Head from 'next/head'
import styles from './sidebar.module.css'

const Footer = () => {
    const date  = new Date();
    const year = date.getFullYear();

    return(
        <>  
            <Head>
                <title>Shashank Bhat - Web Developer</title>
            </Head>
            <div className={`container ${styles.footer}`}>
            <ul className={`${styles.icons}`}>
                        <li><a href="https://github.com/shashankbhat2" target="_blank"><box-icon name='github' type='logo' color='#23395b' ></box-icon></a></li>
                        <li><a href="https://www.linkedin.com/in/shashank-bhat-1b9a89163/" target="_blank"><box-icon name='linkedin' type='logo' color='#23395b' ></box-icon></a></li>
                        <li><a href="https://www.instagram.com/bhat.svg/" target="_blank"><box-icon name='instagram' type='logo' color='#23395b' ></box-icon></a></li>
            </ul>
            <div>
                <p 
                className={styles.cred}>
                Copyright  © {year} Shashank Bhat
                <p className={styles.build}>Built with Next.js, Bulma CSS and Firebase</p>
                <p className={styles.build}>Icons : {``}BoxIcons & Carbon Icons</p>
                </p>
            </div>
            </div>
        </>
    )
}

export default Footer;