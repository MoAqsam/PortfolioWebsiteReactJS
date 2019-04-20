import React, {Component} from "react";
//Components
import LandingPage from "../components/LandingPage/LandingPage";
import NavBar from "../components/NavBar/NavBar";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
export default class HomePage extends Component {
    render() {
        return (
            <div className="HomePage-container">
                <NavBar></NavBar>
                <LandingPage></LandingPage>
                <About></About>
                <Projects></Projects>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        );
    }
}