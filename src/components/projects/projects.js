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
    $('.item1').hover(() => {
        $('#on-hover-project1').addClass('on-hover-project1')
      }, () => {
        $('#on-hover-project1').removeClass('on-hover-project1')
      }) 
}


  render() {
    return (
      <div className="projects">
        <h1 id="title-proj">Projects & Prizes</h1>
        <div className="just-a-dash"/>
        <div id="project-list">
          <div style={{backgroundImage: `url("${HandyCam}")`}} id="projects" className="item1">
            <div id="on-hover-project1">
              <h2>HandyCam</h2>
              <ViewDemoButton fade="fade">View Demo</ViewDemoButton>
            </div>
            <div className="hover-me"></div>
            <div className="prize-desc">
              <i className="mdi-projects mdi mdi-trophy"></i><p>Best Use Of Giphy | HackNY Spring 2018</p>
            </div>
          </div>
          <div style={{backgroundImage: `url("${PharmAlarm}")`}} id="projects" className="item2">
            <div className="on-hover-project2" id="on-hover-project2">
              <h2>HandyCam</h2>
              <ViewDemoButton fade="fade">View Demo</ViewDemoButton>
            </div>
            <div className="prize-desc">
              <i className="mdi-projects mdi mdi-trophy"></i><p>Best Social Good Hack | HackNY Fall 2018</p>
            </div>
          </div>
          <div style={{backgroundImage: `url("${ChefHappy}")`}} id="projects" className="item3">
            <div className="on-hover-project3" id="on-hover-project3">
              <h2>HandyCam</h2>
              <ViewDemoButton fade="fade">View Demo</ViewDemoButton>
            </div>
            <div className="prize-desc">
              <i className="mdi-projects mdi mdi-trophy"></i><p>Best Use Of Technology | HackRU Spring 2018</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;