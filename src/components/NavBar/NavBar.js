import React, {Component} from "react";
import AnchorLink  from "react-anchor-link-smooth-scroll";

import "./NavBar.css";
export default class NavBar extends Component {
    render() {
        return (
            <div className="NavBar-container">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto pull-right">
                            <li className="nav-item">
                                <AnchorLink offset='62' className="nav-link" href="#About">About</AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink offset='62' className="nav-link" href="#Projects">Projects</AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink offset='62' className="nav-link" href="#Contact">Contact</AnchorLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}