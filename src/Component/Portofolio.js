import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";
import Zmage from "react-zmage";

let id = 0;
class Portofolio extends Component {
    
    render() {
        if (!this.props.data) return null;
        
        const project = this.props.data.project.map((project) => {
            let projectImage = "/images/portofolio/" + project.image;

            return (
                <div key={id++} className="columns portofolio-item">
                    <div className="item-warp">
                        <Zmage alt={project.title} src={projectImage}/>
                        <div style={{textAlign: "center"}}>{project.title}</div>
                    </div>
                </div>
            )
        })
        
        return (
            <section id="portfolio">
                <Fade left duration={1000} distance="40px">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Chack out some my work</h1>
                            <div id="portofolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                {project}
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>
        )
    }
}

export default Portofolio;