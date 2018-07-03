import Layout from '../components/Layout'
import Article from '../components/Article'
import Error from '../components/Error'
import api from '../lib/api'

const Read = ({ error, article }) => (
  <Layout>
    {error ? <Error message={error} /> : <Article {...article} />}
  </Layout>
)

Read.getInitialProps = async ({ query }) => {
  try {
    const response = await api.post(`/read`, { url: query.url })
    return { article: response.data }
  } catch (error) {
    return { error: `Failed to fetch '${query.url}'` }
  }
}

export default Read
