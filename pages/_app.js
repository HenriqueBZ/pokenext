import TemplateDefault from "../src/templates/Default"
import GlobalStyle from "../styles/GlobalStyle"

function MyApp({ Component, pageProps }) {
  return (
    <TemplateDefault>
      <GlobalStyle />
      <Component {...pageProps} />
    </TemplateDefault>
  )
}

export default MyApp