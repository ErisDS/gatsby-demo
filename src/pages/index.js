import React from "react"
import Link from "gatsby-link"

export default () =>
    <div style={{ color: `tomato` }}>
        <h1>Magic!</h1>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <br />
        <div>
            <Link to="/page-2/">Page 2</Link>
        </div>
        <div>
            <Link to="/counter/">Counter</Link>
        </div>
    </div>
