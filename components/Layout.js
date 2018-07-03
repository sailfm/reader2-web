import Head from 'next/head'
import LoadingBar from './LoadingBar'
import Header from './Header'
import Footer from './Footer'

const Layout = props => (
  <>
    <Head>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <LoadingBar />
    {props.noHeader || <Header />}

    <main>{props.children}</main>
    <Footer />
    <style jsx global>{`
      html {
        font-family: Helvetica, Arial, sans-serif;
        font-size: 18px;
        line-height: 1.8em;
        font-weight: 400;
        color: #444;
        overflow-wrap: break-word;
      }
      a {
        text-decoration: none;
        font-weight: bold;
        color: #000;
      }
      a:visited {
        color: #888;
      }
      html,
      body,
      #__next {
        width: 100vw;
        margin: 0;
        min-height: 100vh;
      }
      #__next {
        display: flex;
        flex-direction: column;
      }
      main {
        flex-grow: 1;
      }
    `}</style>
  </>
)

export default Layout
