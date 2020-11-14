import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'


const IndexPage = ()=> {
    return (
        <Layout>
                <h1>이게 성공할 줄 누가 알았나 </h1>
                <h2>my page ---</h2>
            <Link to="/contact">contact me</Link>
        </Layout>

    )
}
export default IndexPage;