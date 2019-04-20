import React, {Component} from "react";

import "./Contact.css";

export default class Contact extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: "",
    //         email: "",
    //         message: ""
    //     };
    //     this.handleChange = this
    //         .handleChange
    //         .bind(this);
    // }
    // handleChange(evt) {
    //     this.setState({
    //         [evt.target.name]: evt.target.value
    //     });
    // }
    render() {
        return (
            <div className="Contact-container container-fluid" id="Contact">
                <div className="row">
                    <div className="col-sm-12 social">
                        <h2>Connect with me</h2>
                        <div className="social-icons">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/MoAqsam">
                                <i className="fab fa-github fa-3x"></i>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/10399059/muhammad-aqsam">
                                <i className="fab fa-stack-overflow fa-3x"></i>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/maqsam/">
                                <i className="fab fa-linkedin fa-3x"></i>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="mailto:maqsam.dev@gmail.com">
                                <i className="fas fa-envelope fa-3x"></i>
                            </a>
                        </div>
                    </div>
                    {/* <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 form">
                        <h2>Send me a message</h2>
                        <form action="/email.php" method="POST">
                            <div className="col-sm-12 form-group">
                                <input
                                    className="form-control"
                                    id="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    name="name"
                                    placeholder="Name"
                                    type="text"
                                    required/>
                            </div>
                            <div className="col-sm-12 form-group">
                                <input
                                    className="form-control"
                                    id="name"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    name="email"
                                    placeholder="Email"
                                    type="text"
                                    required/>
                            </div>
                            <div className="col-sm-12 form-group">
                                <textarea
                                    className="form-control"
                                    id="name"
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                    name="message"
                                    placeholder="Message"
                                    type="text"
                                    required></textarea>
                            </div>
                            <div className="col-sm-12 form-group">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => {
                                    this.sendMessage()
                                }}>Submit</button>
                            </div>
                        </form>
                    </div> */}
                </div>
            </div>
        );
    }
}