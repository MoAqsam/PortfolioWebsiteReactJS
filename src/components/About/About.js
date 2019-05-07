import React, {Component} from "react";
import coding from "../../images/profile.png";
import "./About.css";

export default class About extends Component {
    render() {
        return (
            <div className="About-container container-fluid" id="About">
                <div className="row">
                    <div className="col-md-5 col-sm-12 image-left">
                        <img src={coding} className="center-block" alt="coding icon"></img>
                    </div>
                    <div className="col-md-7 col-sm-12">
                        <section className="content">
                            <h1>About</h1>
                            <p>
                                <span>
                                    My name is Muhammad Aqsam, I am a developer based in Ontario, Canada. I build websites, mobile apps,
                                    and web services.
                                    <br/><br/>
                                    I am proficient in the MEAN(Mongo, ExpressJS, Angular, NodeJS)
                                    and MERN(MongoDB, ExpressJS, ReactJS, NodeJS) techStacks.
                                    <br/><br/>
                                    I've built a mobile app, web apps and web services through various internships/co-op placements and at a startup.
                                    <br/><br/>
                                </span>
                            </p>
                            <p>Check out my projects below.</p>
                        </section>
                    </div>                   
                </div>
                <div className="resume">
                    <a href="https://www.moaqsam.com/resume.pdf" style={{padding:0,margin:0}}>Resume</a>
                </div>
            </div>
        );
    }
}
