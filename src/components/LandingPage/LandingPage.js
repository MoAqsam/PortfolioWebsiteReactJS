import React, {Component} from "react";
import Typing from "react-typing-animation";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ScrollUpButton from "react-scroll-up-button";
import Snow from "react-snow-effect";

import "./LandingPage.css";

export default class LandingPage extends Component {
    constructor() {
        super();
        console.log("App created using ReactJS: Muhammad Aqsam");
    }
    render() {
        return (
            <div className="LandingPage-container container-fluid ">
                <ScrollUpButton></ScrollUpButton>
                <Snow/>
                <div className="row">
                    <div className="col-md-12">
                        <Typing speed={30}>
                            <h1>Hello, I'm Muhammad Aqsam</h1>
                            <span>Full Stack Developer, JS Junky, React Wizard</span>
                        </Typing>
                    </div>
                    <div style={{
                        margin: "0 auto"
                    }}>
                        <AnchorLink offset="62" href="#About">
                            <p className="lp-btn">View my portfolio</p>
                        </AnchorLink>
                    </div>
                </div>
            </div>
        );
    }
}
