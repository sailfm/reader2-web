import Link from 'next/link'

const Item = ({ href, title }) => (
  <li>
    <Link href={href}>
      <a>{title}</a>
    </Link>
    <style jsx>{`
      a {
        margin: 30px;
        text-transform: uppercase;
        color: inherit;
      }
    `}</style>
  </li>
)

const Footer = () => (
  <footer>
    <ul>
      <Item href="/" title="home" />
      <Item href="/about" title="about" />
      <Item href="https://github.com/sailfm/reader2-web" title="source" />
    </ul>
    <style jsx>{`
      ul {
        list-style: none;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0;
      }
    `}</style>
  </footer>
)

export default Footer
