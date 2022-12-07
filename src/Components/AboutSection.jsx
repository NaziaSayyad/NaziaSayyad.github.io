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
              src="https://avatars.githubusercontent.com/u/105919527?v=4"
              alt=""
              className={styles.profilePic}
            />
          </div>
          <div>
            <h2>
              I am <span>Nazia </span>{" "}
            </h2>
            <p>
A Highly enthusiastic and hardworking developer, with 
strong descion making,
,communication,,collaboration skills with  good attention
 to detail and with the ability to write efficient code using MERN Stack.

I have been making apps since last 8 months using 
backend, JS and its framework.

As I grow and flourish as a Developer, one thing which keeps me going 
is my inquisitiveness for discovering new things every day.
 

            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}
