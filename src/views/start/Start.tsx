import Section from '../../UI/Section'
import { About, Contact } from './journeys/about'
import Projects from './journeys/about/Projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useContext } from 'react'
import { BreakpointContext } from '../../context/context'
import { IMAGES } from '../../assets/images/images'
// // import deskSetup from '../assets/desk-setup.jpg'

const ctaBTN = `btn btn-lg w-full shadow-lg btn-outline-white md:btn-outline-black md:dark:btn-outline-white`

const Start = () => {
  const { isMobile } = useContext(BreakpointContext)
  return (
    <>
      <Section id="hero" className="auto-rows-min">
        <img
          src={IMAGES.cupOfTea}
          alt=""
          className="h-screen w-full md:h-[500px] col-start-fullbleed  md:col-start-half col-end-fullbleed row-start-1 md:rounded-s-8xl object-cover"
        />
        <div className="hero-text">
          <div className={`p-8 rounded-3xl ${isMobile && 'glass shadow'}`}>
            <h1 aria-label="Start"></h1>
            <p className="text-h1">Hi, I'm Emma, a</p>
            <h2 className="text-hero capitalize text-orange">
              Frontend developer
            </h2>
            <p className="text-h1">based in Bohuslän, Sweden.</p>
            <span className="flex gap-x-4">
              <Link
                to={'https://www.linkedin.com/in/emma-s-850732216/'}
                target="_blank"
                title="Link to Emma's LinkedIn"
              >
                <span className="hidden">LinkedIn</span>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  aria-hidden
                  className="icon"
                />
              </Link>
              <Link
                to={'https://github.com/ztipsamme'}
                target="_blank"
                title="Link to Emma's GitHub"
              >
                <span className="hidden">GitHub</span>
                <FontAwesomeIcon icon={faGithub} aria-hidden className="icon" />
              </Link>
            </span>
            <span className="flex flex-wrap lg:flex-nowrap gap-x-8 gap-y-2 mt-8">
              <HashLink to={'#projects'} className={ctaBTN} smooth>
                Check out projects
              </HashLink>
              <HashLink to={'#contact'} className={ctaBTN} smooth>
                Let's chat
              </HashLink>
            </span>
          </div>
        </div>
      </Section>
      <About />
      <Projects />
      {/* <div
        id="desk-setup-img"
        className={`bg-[url('src/assets/images/desk-setup.jpg')] h-96 bg-cover`}
      ></div> */}
      <img
        id="desk-setup-img"
        src={IMAGES.deskSetup}
        alt=""
        className="h-96 w-full object-cover"
      />
      <Contact />
    </>
  )
}

export default Start
