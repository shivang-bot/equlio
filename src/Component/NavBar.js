import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="logo192.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top mx-2" />
                        EQULIO
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sport">Sport</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            Get tour daily News for Free
                        </span>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" onChange={HandleOnchange} aria-label="Search" /> */}
                            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                        {/* </form> */}
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default NavBar
