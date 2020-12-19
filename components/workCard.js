import styles from './workcard.module.css';
const WorkCard = ({name, img, id, link, desc}) => {
    return(
    <div className="column animate__animated animate__fadeInUp">
    <div class="card" key={id}>
        <div class="card-image">
            <figure class="image">
            <img src={img} alt="work-img"/>
            </figure>
        </div>
        <div class="card-content">
            <div className={`card-title ${styles.title}`}>{name}</div>
            <div class="content">
            <p className={styles.tech}>{desc}</p>
            <a href={link} target="_blank" className={styles.link}>Check out</a>
            <br/>
            </div>
        </div>
        </div>
        </div>
    )
}

export default WorkCard;