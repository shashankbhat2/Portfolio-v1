import styles from './sidebar.module.css'
const SideBar = () => {
    const date  = new Date();
    const year = date.getFullYear();
    return(
        <>
        <a href='/'><img src="static/LogoDark.svg" className={styles.logo}></img></a>
        <div className={`nav ${styles.sidebar}`}>
            <div className="container">
                <div className="nav-left">
                    <ul className={styles.ul}>
                        <li><a href="/about" className={styles.link}>About</a></li>
                        <li><a href="/about" className={styles.link}>Tech</a></li>
                        <li><a href="/about" className={styles.link}>Work</a></li>
                        <li><a href="/about" className={styles.link}>Contact</a></li>
                    </ul>

                    <ul className={`${styles.icons}`}>
                        <li><a><box-icon name='github' type='logo' color='#23395b' ></box-icon></a></li>
                        <li><a><box-icon name='linkedin' type='logo' color='#23395b' ></box-icon></a></li>
                        <li><a><box-icon name='instagram' type='logo' color='#23395b' ></box-icon></a></li>
                    </ul>

                    <div>
                        <p className={styles.cred}>Copyright  © {year} Shashank Bhat
                        <p className={styles.build}>Built with Next.js, Bulma CSS and Firebase</p>
                        <p className={styles.build}>Icons : <a  href="https://boxicons.com/">BoxIcons</a></p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SideBar;