import styles from './index.module.css'

const custom404 = () => {
    return(<>
        <div className={`animate__animated animate__fadeIn ${styles.content}`}>
        <p className={styles.welcome}>Error 404</p>
        <div className={`columns is-6 is-mobile p-3`}>
        <p className={styles.info}>  Sorry the page does'nt exist! 😔 </p>
        </div>    
        </div>
        </>
    )
}

export default custom404;