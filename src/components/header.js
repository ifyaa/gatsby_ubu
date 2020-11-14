import React from 'react'
import { Link } from 'gatsby'
// import './header.module.scss'

export default () => (
    <header>
    <h1> qqq header</h1>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/blog">blog</Link>
            </li>
            <li>
                <Link to="/about">about</Link>
            </li>
            <li>
                <Link to="/contact">contact</Link>
            </li>
        </ul>
    </nav>
</header>
)