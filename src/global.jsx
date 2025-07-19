import '@/styles'
import { Head } from "minista"
import Content from '@/layouts/Content'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

export default function (props) {
  const {
    children,
    title,
    url,
  } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>YourBank | {title}</title>
        <script src="/src/main.js" type="module" />
      </Head>
      <Header url={url} />
      <Content>
        {children}
      </Content>
      <Footer url={url} />
    </>
  )
}