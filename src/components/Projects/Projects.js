import React, {Component} from "react";

import "./Projects.css";

export default class Projects extends Component {
    constructor() {
        super();
        this.Projects = [
            {
                name: "Expense Tracker",
                content: "Expense Tracker built with ReactJS",
                url: "https://github.com/MoAqsam/react-expense-tracker",
                techStack: ["HTML(5)","CSS(3)","ReactJS"]
            },
            {
                name: "Portfolio Template",
                content: "Developed a free and simple template for portfolio websites.",
                url: "https://github.com/MoAqsam/PortfolioTemplate",
                techStack: ["HTML(5)","CSS(3)"]
            },
            {
                name: "Job Tracker (ReactJS)",
                content: "Developed an open source project to help track job applications.",
                url: "https://moaqsam.github.io/JobSearchTracker/",
                techStack: ["ReactJS","Bootstrap"]
            },
            {
                name: "Toronto Waste Lookup (ReactJS)",
                content: "Developed a web app that can search and filter torontos waste lookup api for a Shopify web engineer challenge.",
                url: "https://github.com/MoAqsam/ShopifyWebEngineerChallenge",
                techStack: ["ReactJS","Axios","Bootstrap"]
            },
            {
                name: "Supwrap mobile app (Ionic/Angular)",
                content: "Developed mobile application using Ionic/Angular and Rest API using NodeJS, ExpressJS and Mongoose.",
                url: "https://play.google.com/store/apps/details?id=supwrap.driver.app&hl=en&rdid=supwrap.driver.app",
                techStack: ["Ionic","Angular","Cordova","Mongoose","NodeJS","ExpressJS"]
            },
            {
                name: "Supwrap website (ReactJS)",
                content: "Developed webapp for a startup using ReactJS and deployed on Her" +
                        "oku",
                url: "http://www.supwrap.com",
                techStack: ["ReactJS","BootStrap","HTML(5)","CSS(3)","JQuery","Heroku"]
            }, {
                name: "Project Management App (ReactJS)",
                content: "Created a project management app using ReactJS that gets data from a API.",
                url: "https://muhammad-aqsam.herokuapp.com/",
                techStack: ["ReactJS","BootStrap"]
            }, {
                name: "MyApp (NodeJS)",
                content: "Created a web application using NodeJS and HandlebarsJS for managing departments" +
                        " in a company.",
                url: "https://powerful-brushlands-37977.herokuapp.com/",
                techStack: ["NodeJS","BootStrap","PostgreSQL","MongoDB","HandleBars.js"]
            }, {
                name: "Cell City Website",
                content: "Created a website for a client using HTML5, CSS3 and FlexBoxGrid framework.",
                url: "https://moaqsam.github.io/Cell-Linx-Client-Website/",
                techStack: ["HTML(5)","CSS(3)","FlexBoxGrid"]
            }, {
                name: "Aid Management App (C++)",
                content: "Created a console app using C++ that distributes aid to different locations.",
                url: "https://github.com/MoAqsam/OOP244",
                techStack: ["C++"]
            }, {
                name: "Grocery Store Management App(C)",
                content: "Developed a grocery store app with ability to stock and edit items.",
                url: "https://github.com/MoAqsam/IPC-144",
                techStack: ["C"]
            }, {
                name: "FlappyBird (JavaScript)",
                content: "Developed a clone for the famous mobile game Flappy Bird.",
                url: "https://github.com/MoAqsam/FlappyBird",
                techStack: ["JavaScript"]
            }
        ];
    }
    projects() {
        return (this.Projects.map(function (proj) {
            var techList = proj
                .techStack
                .map(function (tech) {
                    return <span className="badge badge-warning" key={tech}>{tech}</span>;
                });
            return (
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4" key={proj.name}>
                    <div
                        className="card"
                        style={{
                        textAlign: "center",
                        width: "100%"
                    }}>
                        <div className="card-body">
                            <h5 className="card-title">{proj.name}</h5>
                            <p className="card-text">{proj.content}</p>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={proj.url}
                                className="btn btn-primary">Go to project</a>
                            <br></br>
                            {techList}
                        </div>
                    </div>
                </div>
            );
        }));
    }
    render() {
        return (
            <div className="Projects-container container-fluid" id="Projects">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Projects</h1>
                    </div>
                    {this.projects()}
                </div>
            </div>
        );
    }
}