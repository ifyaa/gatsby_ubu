import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>여기는 어딘가-이상하네요...왜 이게 나타나는 건가??? </h1>
    <p>travis에서는 에러가 발생하는데 이 게 왜 보여지는 건지...시간이 많이 지나면 보인다는게 .</p>
    <p>yarn run deploy만 실행했고, 다른건 건드리지 않았는데...</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
