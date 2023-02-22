import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark" data-bs-theme="dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src="logo192.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top mx-2" />
                            EQULIO
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                            </ul>
                            <span className="navbar-text">
                                Get tour daily News for Free
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
