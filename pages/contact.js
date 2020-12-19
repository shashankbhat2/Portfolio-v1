import styles from './index.module.css'

const tech = () => {
    return(
        <div className={`animate__animated animate__fadeIn ${styles.content}`}>
        <p className={styles.welcome}>Contact me</p>
        <div className={`columns is-6 is-mobile p-3`}>
        <p className={styles.info}>  Coming soon! 😁 </p>
        </div>    
        </div>
    )
}

export default tech