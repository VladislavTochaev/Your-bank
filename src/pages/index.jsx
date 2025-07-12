import { Head } from "minista"
import Content from '@/layouts/Content'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

export default function (props) {
  const { children } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>YourBank | Home</title>
        <script src="/src/main.js" type="module" />
      </Head>
      <Header />
      <Content>
        CONTENT
      </Content>
      <Footer />
    </>
  )
}