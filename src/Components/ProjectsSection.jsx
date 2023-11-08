import { ProjectCard } from "./ProjectCard"
import styles from "./Styles/ProjectsSection.module.css"
import { SiReact } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import { SiBootstrap } from "react-icons/si"
import { SiChakraui } from "react-icons/si"
import { SiStyledcomponents } from "react-icons/si"
import { SiNodedotjs } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import Fade from "react-reveal/Fade"
const projects = [
  {
    name: "Nyka Project",
    img: "https://images.moneycontrol.com/static-mcnews/2021/11/Nykaa-On-Trend-Store-Sobhacity-Thrissur-580x435.jpg",
    link: "https://stunning-toffee-486104.netlify.app/",

    git: "https://github.com/NaziaSayyad/NykaProject.git",
    about:`The Nykaa website which deals in fashion items is made with the help of a team of 5 member, Different functionality such as sorting of items based on price,rating is provided in the website  to get the details very easily  in which user can buy items in very satisfactory way.`,
    stacks: [
     // <SiReact className={styles.stackIcon} />,
      // <SiNodedotjs className={styles.stackIcon} />,
      // <SiExpress className={styles.stackIcon} />,
      // <SiMongodb className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Rentomojo Project",
    img: "https://user-images.githubusercontent.com/105919527/200121519-e7b743f4-ec14-420c-a27f-83baaed41814.png",
      
    link: "https://whimsical-bavarois-f46ae2.netlify.app/",
      
    git: "https://github.com/NaziaSayyad/panicky-smash-9541.git",
    about:`It is clone of E-commerce website Rentomojo which deals on the products based on electronics, Furniture and various items. 
    It is a collaborative project which is done with the help of 5 members.
    Rentomojo website also provides thier products on rent. `,
    stacks: [
      // <SiReact className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Shop Project",
    img: "https://user-images.githubusercontent.com/105919527/199795293-80b5b5ce-90c4-4d1e-a902-ebd080bd13ab.png",
    link:"https://the-great-naziasayyad-site.netlify.app/",
      
    git:"https://github.com/NaziaSayyad/super-donkey-7341.git",
    about:`  It is clone of E-commerce website Shop.com which deals on the products based on shoes,Jwellery,
    cosmetics and various items. It is an individual project which is built in 7-days using React Library.`,
    
    stacks: [
      
      <SiReact className={styles.stackIcon} />,
      <SiRedux className={styles.stackIcon} />,
      <SiBootstrap className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
      <SiStyledcomponents className={styles.stackIcon} />
    ],
  },
  {
    name: "MailChimp Project",
    img: "https://user-images.githubusercontent.com/101381281/204876988-7f3ce8d3-ac0a-469a-ac4b-c30838f461aa.png",
    link:"https://mailchimp-clone-project.netlify.app/",
      
    git:"https://github.com/NaziaSayyad/mail_chip_project",
    about:`Clone of E-commerce website MailChimp 
    which gives platform to the users to create thier own
     store as well as email teplates.
      It is a collaborative project which is done with the help of 5 members in a week.`,
    
    stacks: [
      
      <SiReact className={styles.stackIcon} />,
      <SiRedux className={styles.stackIcon} />,
      <SiBootstrap className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
      <SiStyledcomponents className={styles.stackIcon} />
    ],
  },
  
  
 
]
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <p>Projects</p>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  )
}
