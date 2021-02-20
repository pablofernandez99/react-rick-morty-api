import React from 'react'
import githubIcon from '../github.svg'

const Footer = () => (
    <footer>
        <div className="social-media">
            <a href="https://github.com/pablofernandez99" target="_blank">
                <img src={githubIcon} width="100%"/>
            </a>
        </div>
        <p>By Pablo Fernández 2021</p>
    </footer>
)

export default Footer