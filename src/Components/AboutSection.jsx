import styles from "./Styles/AboutSection.module.css"
import Fade from "react-reveal/Fade"

export function AboutSection() {
  return (
    <div className={styles.rootCont} id="about">
      <Fade bottom>
        <p>About</p>
        <div className={styles.mainCont}>
          <div className={styles.profilePicCont}>
            <img
              src="pic.jpeg"
              alt=""
              className={styles.profilePic}
            />
          </div>
          <div>
            {/* <h2>
              I am <span>Nazia </span>{" "}
            </h2> */}
            <p>
              A highly enthusiastic and hardworking developer,with
              strong decision making, communication,
              collaboration skills and good attention
              to detail with the ability to write efficient code using MERN stack technologies.
              {/* A highly */}
            </p>
            <p>
            As I grew and flourish as a developer,
            I have been building applications from past couple of months using MERN stack technologies.
              </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}
