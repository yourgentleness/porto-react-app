import React, { Component } from "react";
import { Fade } from "react-awesome-reveal"; 

class Footer extends Component {
    render() {
        if (!this.props.data) return null;
        
        const networks = this.props.data.social.map((networks) => {
            return (
                <li key={networks.name}>
                    <a href={networks.url}>
                        <i className={networks.icon}></i>
                    </a>
                </li>
            )
        })

        return (
            <footer>
                <div className="row">
                    <Fade bottom>
                        <div className="twelve columns">
                            <ul className="social-links">{networks}</ul>
                            <ul className="copyright">
                                <li>&copy; Copyright 2023 Aditya Wahyu Pamungkas</li>
                                <li>
                                    Design by {""}
                                    <a title="Styleshout" href="http://www.styleshout.com/">
                                        Styleshout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Fade>

                    <div id="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#home">
                            <i className="icon-up-open"></i>
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default  Footer;