import React from 'react'
import {LocationHeart32, Education32} from '@carbon/icons-react';
import styles from './index.module.css'
import CustomHead from '../components/head';
const about = () => {
    return (
        <>
        <CustomHead title="About"></CustomHead>
       <div className="animate__animated animate__fadeIn">
       <div className={`container ${styles.content}`}>
        <p className={styles.welcome}>About</p>
        <p className={styles.info}>
        I am a <strong>Web Developer</strong> currently working as a Front-End Development Intern at <strong>Preplaced</strong>, an Ed-Tech startup.         
        </p>
        <p className={styles.info}>
        I have experience designing and building <strong>Websites</strong> and  <strong>Web Applications</strong> using minimal technologies such as <strong>HTML-CSS-JS & React.js, Next.js, Node.js, Firebase and MongoDB. </strong>
        </p>
        <p className={styles.add}>
            <ul>
                <li><LocationHeart32 /> &nbsp;<li><strong>Bengaluru,</strong> Karnataka</li></li>
                <br/>
                <li><Education32 /> &nbsp;
                    <li><strong>Bachelor of Computer Applications</strong></li>
                    <li>PES University</li>
                    <li>8.63</li>
                    <span class={` tag ${styles.tagext}`}>Pursuing</span>
                </li>
            </ul>
        </p>
        </div>

        </div>
        </>
    )
}

export default about;