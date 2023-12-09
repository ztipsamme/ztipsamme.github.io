import Section from '../../../../UI/Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { aboutme, stack } from '../../../../data'

const About = () => {
  return (
    <section className="bg-peach dark:bg-beige dark:text-black">
      <Section id="about" className="content">
        <h2 className="section-header text-white dark:text-orange">About</h2>
        {aboutme.map((text) => (
          <article key={text.title} className={`card mb-8`}>
            <img
              src={text.img}
              alt=""
              className={`card-img card-img-right row-span-2 col-span-half aspect-4/3 shadow-lg`}
            />
            <h3 className="text-h1">{text.title}</h3>
            <p>{text.text}</p>
          </article>
        ))}
      </Section>
      <Section
        aria-label="My development stack"
        id="stack"
        className="bg-orange text-white full-bleed content"
      >
        <h2 className="section-header bleed">Stack</h2>
        <h3 className="text-h1 bleed mb-4">My Stack</h3>
        <ul className="bleed flex flex-wrap gap-4">
          {stack.map((i) => (
            <li key={i.label} title={i.label} className="cursor-help">
              <span className="hidden">{i.label}</span>
              <FontAwesomeIcon icon={i.icon} aria-hidden className="icon" />
            </li>
          ))}
        </ul>
      </Section>
    </section>
  )
}

export default About
