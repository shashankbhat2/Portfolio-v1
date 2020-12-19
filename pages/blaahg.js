import styles from './index.module.css'
import CustomHead from '../components/head'
const blaahg = () => {
    return(
        <>
        <CustomHead title="blaahg"></CustomHead>
        <div className={`animate__animated animate__fadeIn ${styles.content}`}>
        <p className={styles.welcome}>Blaahg</p>
        <div className={`columns is-6 is-mobile p-3`}>
        <p className={styles.info}>  Coming soon! 😁 </p>
        </div>    
        </div>
        </>
    )
}

export default blaahg