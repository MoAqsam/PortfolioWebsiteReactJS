import React, {Component} from "react";
import coding from "../../images/profile.png";
import "./About.css";

export default class About extends Component {
    render() {
        return (
            <div className="About-container container-fluid" id="About">
                <div className="row">
                    <div className="col-sm-12">
                        <section className="content" style={{
                            textAlign: "center"
                        }}>
                            <h1>About</h1>
                            <p>
                                <span>
                                    My name is Muhammad Aqsam, I am a developer based in Ontario, Canada. I build websites, mobile apps,
                                    and web services.
                                    <br/><br/>
                                    I am proficient in the MEAN(Mongo, ExpressJS, Angular, NodeJS)
                                    and MERN(MongoDB, ExpressJS, ReactJS, NodeJS) techStacks.
                                    <br/><br/>
                                    I've built mobile apps, web apps and web services at various companies and startups .
                                    <br/><br/>
                                </span>
                            </p>
                            <p>Check out my projects below.</p>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}
