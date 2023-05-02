
import "./App.css"
import { AboutSection } from "./Components/AboutSection"

import { ContactSection } from "./Components/ContactSection"
import GithubStat from "./Components/GithubSection"
import { HeroSection } from "./Components/HeroSection"
import  Navbar  from "./Components/Navbar"
import { ProjectsSection } from "./Components/ProjectsSection"
import { SkillsSection } from "./Components/SkillsSection"

function App() {
  return (
    // navbar, about, skills, projects, contact
    <div className="App">
      <div id="navbar"> <Navbar /> </div>
      <HeroSection />
      <div id="about"> <AboutSection /> </div>
        <div id="skills">       <SkillsSection /> </div>
      <GithubStat/>
      <div id="projects"> <ProjectsSection /> </div>
      <div id="contact"> <ContactSection /> </div>
    </div>
  )
}

export default App
