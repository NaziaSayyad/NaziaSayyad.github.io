import styles from "./Styles/ContactSection.module.css"

import { AiOutlineMail } from "react-icons/ai"
import { AiOutlineGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import Swal from 'sweetalert2'


import Fade from "react-reveal/Fade"
export function ContactSection() {
  const form = useRef();

  
  return (
    <div className={styles.rootCont} id="contact">
      <Fade bottom>
        {/* <p className={styles.contactHeading}>Contact Me</p> */}
        <div className="App">
     </div>
      
        <hr style={{ width: "95vw" }} />
        <p className={styles.text}>Liked my work? Want to get in touch?</p>
        <p className={styles.text}>You can reach out to me at:</p>
        <div className={styles.iconsCont}>
          <a href="mailto:sayyadnazia756@gmail.com">
            <AiOutlineMail className={styles.emailicon} />
          </a>
          <a
            href="https://www.linkedin.com/in/naziasayyad/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className={styles.linkedInIcon} />
          </a>
          <a href="https://github.com/NaziaSayyad" rel="noreferrer" target="_blank">
            <AiOutlineGithub className={styles.gitIcon} />
          </a>
        </div>
        <p className={styles.text}>Phone: +91 9871926595</p>{" "}
        <p className={styles.text}>Email: sayyadnazia756@gmail</p>
      </Fade>
    </div>
  )
}
