import { Link } from 'react-router-dom'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import Section from '../../../../UI/Section'

const links = [
  { label: 'GitHub', to: 'https://github.com/ztipsamme', icon: faGithub },
  {
    label: 'IT-Högskolan in Gotheburg',
    to: 'https://www.iths.se/',
    icon: faLink,
  },
  {
    label: 'LinkedIn',
    to: 'https://www.linkedin.com/in/emma-s-850732216/',
    icon: faLinkedin,
  },
]

const Contact = () => {
  return (
    <Section id="contact" className="content">
      <h2 className="section-header text-primary">Contact</h2>
      <h3 className="text-h1">Let's talk</h3>
      <address className="not-italic	">
        <ul className="text-h2">
          <li>
            <a href="mailto:e.spitz@hotmail.com" className="py-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-4 w-8 text-primary"
              />
              e.spitz@hotmail.com
            </a>
          </li>
          <li>
            <Link to={links[2].to} target="_blank">
              <FontAwesomeIcon
                icon={links[2].icon}
                aria-hidden
                className="mr-4 w-8 text-primary"
              />
              {links[2].label}
            </Link>
          </li>
        </ul>
      </address>
      <h3 className="text-h1 mt-8 md:mt-auto md:row-start-2">Other links</h3>
      <nav>
        <ul className="text-h2">
          {links.map(
            (link, index) =>
              index <= 1 && (
                <li key={link.label}>
                  <Link to={link.to} target="_blank" className="py-3">
                    <FontAwesomeIcon
                      icon={link.icon}
                      aria-hidden
                      className="mr-4 w-8 text-primary"
                    />
                    {link.label}
                  </Link>
                </li>
              )
          )}
        </ul>
      </nav>
    </Section>
  )
}

export default Contact
