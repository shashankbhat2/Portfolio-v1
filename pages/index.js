import { useState } from 'react'
import { loadDB } from "../util/firebase";
import styles from './index.module.css'

export default function Home() {
  
  const [form, setForm] = useState(false);
  const [button, setButton] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [work, setWork] = useState("");
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  function handleFormState(){
    setForm(!form);
    setButton(!button);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true)
    console.log(name, email, work)

    const db = await loadDB();
    db.firestore().collection("contacts")
      .add({
        name: name,
        email: email,
        work: work,
        timestamp: Date.now()
      })
      .then((response) => {
        setLoader(false)
        setSuccess(true)
        console.log(response)
      })
      .catch((error) => {
        setError(true)
        console.log(error.message);
        setLoader(false);
      });
      
      setSuccess(false);
      setName("")
      setEmail("")
      setWork("")
  }

  function handleSelect(e){
    setWork(e.target.value);
  }

  function handleClose(){
    setForm(false)
    if(success === true){
      setSuccess(false);
    }
    if(error === true){
      setError(false);
    }
    setButton(true)
  }

  
  return (
    <>
      <div className={styles.index}>
      <div className="animate__animated animate__fadeIn columns">
      <div className={`container ${styles.content}`}>
        <p className={styles.welcome}>Hey!</p>
        <p className={styles.info}>
        I am <strong>Shashank Bhat</strong>, a <strong>Web Developer</strong> who loves Javascript, its libraries and frameworks. 
        Learning and working on Reactjs, Nextjs and Nodejs based projects.
        </p>
        <p className={styles.contact}>
        You find my work cool? 
        <br></br>
        You have a project?  
        <br></br>
        {
          button && 
          <button className={`button ${styles.button}`} onClick={handleFormState}><div className={styles.text}>Hit Me Up!</div></button>  
        }
        {
          form &&
          <div className="container">
          <form className="animate__animated animate__fadeIn container mt-6" id="contactForm" onSubmit={handleSubmit}>
            <div className="field">
            <div className="control">
            <button className={`button ${styles.close}`} onClick={handleClose}>X</button>
              <input className={`input ${styles.w_25} ${styles.input} `} value={name} type="text" placeholder="Name" required onChange={(e) => setName(e.target.value)}/>
            </div>
            </div>
            <div className="field">
            <div className="control">
              <input className={`input ${styles.w_25} ${styles.input}`} value={email} type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
            </div>
            </div>
            <div>
              <select className={`${styles.h_25} ${styles.select} ${styles.w_25} `}  value={work} onChange={handleSelect}>
                <option>Select..</option>
                <option>Full Stack</option>
                <option>Front End</option>
                <option>Website</option>
              </select>
            </div>
            <br></br>
          {loader ? <button className={`button animate__delay-4s	 ${styles.submit}`} type="submit">Submitting...</button> : <button className={`button ${styles.submit}`} type="submit" value="Submit">Submit</button> }
          {success && <p className={`animate__animated animate__delay-4s animate__fadeOut ${styles.succ}`}>Submitted! lets catch up Soon!</p>}
          {error && <p className={`animate__animated animate__delay-4s animate__fadeOut ${styles.err}`}>Oh Sorry, It failed. Please try again!</p>}
          </form>
          </div>
        }
        </p>
      </div>
      </div>
      </div>
    </>
  )
}
