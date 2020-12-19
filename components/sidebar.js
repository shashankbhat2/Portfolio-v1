import styles from './sidebar.module.css'

const SideBar = () => {
    return(
        <>
        <a href='/'><img src="static/LogoDark.svg" className={styles.logo}></img></a>
        <div className={`nav ${styles.sidebar}`}>
            <div className="container">
                <div className="nav-left">
                    <ul className={styles.ul}>
                        <li><a href="/about" className={styles.link}>About</a></li>
                        <li><a href="/tech" className={styles.link}>Tech</a></li>
                        <li><a href="/work" className={styles.link}>Work</a></li>
                        <li><a href="/contact" className={styles.link}>Contact</a></li>
                        <li><a href="/blaahg" className={styles.link}>Blaahg</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default SideBar;