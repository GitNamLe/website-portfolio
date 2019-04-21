import React, { Component } from 'react';
import './projects.scss';
import HandyCam from '../../handy-cam.png';
import * as $ from 'jquery';
import PharmAlarm from '../../pharm-alarm-logo.png';
import ChefHappy from '../../chef-happy.png';
import { FadeButton, TextFadeButton } from '../../styled-components/buttons';

function ViewDemoButton() {
  return (
    <div></div>
  )
}

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let webView = true;
    $(window).scroll(function() {
        if($(window).width() < 700) webView = false;
        else webView = true;
        
        if(!webView && $(window).scrollTop() > 900) {
          $("#title-proj").addClass("title-proj");
          $("#project-list").removeClass("project-list").addClass("project-list-mobile");
          $("#project-list").children('#projects').removeClass( "blocks" ).addClass( "blocks-mobile" );
        } 
        if(webView && $(window).scrollTop() > 900) {
           $("#title-proj").addClass("title-proj");
          $("#project-list").removeClass("project-list-mobile").addClass("project-list");
          $("#project-list").children('#projects').removeClass( "blocks-mobile" ).addClass( "blocks" );
        }
      })
}


  render() {
    return (
      <div className="projects-component">
        <h1 id="title-proj">Projects & Prizes</h1>
        <div className="just-a-dash"/>
        <div id="project-list">
          <div id="projects" className="item1">
            <div className="handy-cam child margin-top-handyCam" id="on-hover-project1">
              <span>
                <h3>HandyCam</h3>
                <FadeButton href="https://devpost.com/software/handycam" target="_blank" className="demo-btn">DEMO</FadeButton>
              </span>
            </div>
          </div>
          <div id="projects" className="item2">
            <div className="pharm-alarm child" id="on-hover-project2">
              <span>
                <h3>PharmAlarm</h3>
                <FadeButton href="https://devpost.com/software/pharmalarm-osp7ju" target="_blank" className="demo-btn">DEMO</FadeButton>
              </span>
            </div>
          </div>
          <div id="projects" className="item3">
            <div className="chef-happy child" id="on-hover-project3">
              <span>
              <h3>ChefHappy</h3>
              <FadeButton href="https://devpost.com/software/chef-happy" target="_blank" className="demo-btn">DEMO</FadeButton>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;