import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header';
import ReactGA from "react-ga"
import $ from "jquery"
import About from './Component/About';
import Resume from './Component/Resume';
import Portofolio from './Component/Portofolio';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1")
    ReactGA.pageview(window.location.pathname)
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: "false",
      success: function(data) {
        this.setState({
          resumeData: data
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    })
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className='App'>
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portofolio data={this.state.resumeData.portofolio}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    )
  }
}
export default App;