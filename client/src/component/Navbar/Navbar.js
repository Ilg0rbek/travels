import React from 'react'
import { Link } from 'react-router-dom'

const Navbaar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
                <div className="container justify-space-beetwen">
                    <Link to={'/'} className="navbar-brand"> Travel Book</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/add'} className="nav-link">Add</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbaar
