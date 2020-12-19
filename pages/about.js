import React from 'react'
import styles from './index.module.css'
const about = () => {
    return (
        <>
       <div className="animate__animated animate__fadeIn column">
      <div className="column">
      <div className={`container ${styles.content}`}>
        <p className={styles.welcome}>About</p>
        <p className={styles.info}>
        I am a <strong>Web Developer</strong> currently working as a Front-End <br></br>Development Intern at <strong>Preplaced</strong>, an Ed-Tech startup.         
        </p>
        <p className={styles.info}>
        I have experience designing and building <strong>Websites</strong> and  <strong>Web Applications</strong> using minimal technologies such as <strong>HTML-CSS-JS & React.js, Next.js, Node.js, Firebase and MongoDB. </strong></p>
        </div>
        </div>
        </div>
        </>
    )
}

export default about;