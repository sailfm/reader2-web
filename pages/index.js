import Layout from '../components/Layout'
import Header from '../components/Header'

const Index = () => (
  <Layout noHeader>
    <div>
      <img src="/static/cat.png" />
      <Header />
      <div className="spacer" />
    </div>
    <style jsx>{`
      div {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      img {
        width: 200px;
        height: auto;
      }
      .spacer {
        height: 20vh;
      }
    `}</style>
    <style jsx global>{`
      #__next > main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </Layout>
)

export default Index
