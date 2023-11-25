import { quotes } from '../../../../data'

const Quotes = () => {
  return (
    <section id="quotes" className="main-content">
      <h3>What do others have to say about me?</h3>
      {quotes.map((x) => (
        <blockquote key={x.name}>
          <p>{x.text}</p>
          <footer>
            —{x.name},<cite>{x.title}</cite>
          </footer>
        </blockquote>
      ))}
    </section>
  )
}

export default Quotes
