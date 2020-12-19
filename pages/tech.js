import CustomHead from '../components/head'
import styles from './index.module.css'

const tech = () => {
    return(
        <>
        <CustomHead title="My Tech"></CustomHead>
        <div className={`animate__animated animate__fadeIn ${styles.content}`}>
        <p className={styles.welcome}>Tech</p>
        <div className={`columns is-6 is-mobile p-3`}>
         <p className={styles.info}>  Coming soon! 😁 </p>
        </div>    
        </div>
        </>
    )
}

export default tech