import WorkCard from '../components/workCard'
import styles from './index.module.css'
import workData from '../util/works.json'
import CustomHead from '../components/head';

const works = workData;

const Work = () => {
    return(
        <>
        <CustomHead title="Work"></CustomHead>
        <div className={`animate__animated animate__fadeIn ${styles.content}`}>
        <p className={styles.welcome}>Works</p>
        <div className={`columns is-6 is-mobile p-3`}>
            {works.map((work) => {
                return(
                    <WorkCard id={work.id} desc={work.tech} name={work.name} img={work.img} link={work.link}></WorkCard>
                )
            })}
        </div>    
        </div>
        </>
    )
}

export default Work;