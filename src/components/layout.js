import * as React from "react"
import {Link} from "gatsby"
import {
    container,
    navLink,
    navLinkItem,
    navLinkText,
    heading,
    footing
} from "./style.module.css"

const Layout = ( {pageTitle, children}) => {
    return (
        <main className={container}>     
            <title>{pageTitle}</title>
            <nav>
                <ul className={navLink}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                </ul>
            </nav>

            <h1 className={heading}>{pageTitle}</h1>
            {children}
            <div className={footing}>
                <p>This is the bottom of the page bwahaha</p>
            </div>
        </main>
    )
}

export default Layout