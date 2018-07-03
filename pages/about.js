import Link from 'next/link'
import Layout from '../components/Layout'
import Article from '../components/Article'

const Item = ({ href, title }) => (
  <li>
    <Link href={href}>
      <a>{title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <Article title="About">
      <p>
        A readability proxy by{' '}
        <Link href="https://dawoodjee.com">
          <a>Sufyan</a>
        </Link>{' '}
        built with
      </p>
      <ul>
        <Item href="https://github.com/zeit/next.js" title="Next.js" />
        <Item href="https://github.com/hapijs/hapi" title="hapi" />
        <Item
          href="https://github.com/mozilla/readability"
          title="Mozilla Readability"
        />
      </ul>
      <p>
        Contribute on{' '}
        <Link href="https://github.com/sailfm/reader2-web">
          <a>Github</a>
        </Link>{' '}
        and learn about deploying it by reading my (in progress) book{' '}
        <Link href="https://aws.sail.fm">
          <a>Deploying Web Apps with AWS</a>
        </Link>.
      </p>
    </Article>
  </Layout>
)
