import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <header className="header sticky-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                    <div className="container"><NavLink className="navbar-brand" to="/index">
                        <strong className="h6 mb-0 font-weight-bold text-uppercase">E2E Projects</strong></NavLink>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item active"><NavLink className="nav-link" to="/index">Home</NavLink></li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Projects
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="/index/mlproj">Machine Learning</a>
                                        <a class="dropdown-item" href="/index/webproj">Web Development</a>
                                        <a class="dropdown-item" href="/index/otherproj">Other Projects(Advanced)</a>
                                    </div>
                                </li>
                                <li className="nav-item"><NavLink className="nav-link" to="/index/contactUs">Contact Us</NavLink></li>
                                {/* <li className="nav-item"><NavLink className="nav-link disabled" to="#">Disabled</NavLink></li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar