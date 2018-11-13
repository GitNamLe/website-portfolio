import React, { Component } from 'react';
import './header.scss';
import { Arrows } from '../../styled-components/arrows/arrows';
import * as $ from 'jquery';
import portrait from '../../itsurboi.jpg';
import { TweenMax, TimelineMax, SteppedEase} from "gsap/TweenMax";
import { TextFadeButton } from '../../styled-components/buttons';

const tl = new TimelineMax({
  paused:true
});

const tk = new TimelineMax({
  paused:true
});
class Header extends Component {
  constructor(props) {
    super(props);
  }

  line1() {
    console.log('butt')
    // letter animation
    tl.fromTo(".anim-typewriter-line1", 1, {
      width: "0em",
    }, {
      width: "9em", /* same as CSS .line-1 width */
      ease:  SteppedEase.config(20)
    }, 0);
    // text cursor animation
    tl.fromTo(".anim-typewriter-line1", 0.5, {
      "border-right-color": "rgba(255,255,255,0.75)"
    }, {
      "border-right-color": "rgba(255,255,255,0)",
      repeat: 1,
      ease:  SteppedEase.config(20)
    }, 0);
    /* setInterval(() => $(".anim-typewriter-line1").css('border-right-color', 'none'), 2); */
    tl.play();
  }

  line2() {
    $(".anim-typewriter-line2").css("opacity",1);
    tk.fromTo(".anim-typewriter-line2", 1.5, {
      width: "0em",
    }, {
      width: "20.5em", /* same as CSS .line-1 width */
      ease:  SteppedEase.config(30)
    }, 0);
    // text cursor animation
    tk.fromTo(".anim-typewriter-line2", 0.5, {
      "border-right-color": "rgba(255,255,255,0.75)"
    }, {
      "border-right-color": "rgba(255,255,255,0)",
      repeat: -1,
      ease:  SteppedEase.config(30)
    }, 0);
    tk.play(); 
  }

  componentDidMount() {
    setTimeout(() => this.line1(), 1000);
    setTimeout(() => this.line2(), 2100);
  }

  onScrollTeleport(height) {
    console.log('hi')
    window.scroll({
      top: height, 
      left: 0, 
      behavior: 'smooth' 
    });
  }


  render() {
    return (
      <div className="header">
        <div className="header-greyspace"></div>
        <div className="middle-greyspace"></div>
        <div className="head">
          <div className="content-nav">
            <ul style={{display: '-webkit-inline-box'}}>
              <li onClick={() => this.onScrollTeleport(0)} ><TextFadeButton className="btn1" fade="fade">Home</TextFadeButton></li>
              <li onClick={() => this.onScrollTeleport(600)} ><TextFadeButton className="btn2" fade="fade">About</TextFadeButton></li>
              <li onClick={() => this.onScrollTeleport(1300)} ><TextFadeButton className="btn3" fade="fade">Projects</TextFadeButton></li>
              <li onClick={() => this.onScrollTeleport(1800)} ><TextFadeButton className="btn4" fade="fade">Contact</TextFadeButton></li>
            </ul>
          </div>
          <h1 className="line-1 anim-typewriter-line1" style={{color: 'aliceblue'}}>Hello I'm Nam Le</h1>
          <h1 className="red-desc line-1 anim-typewriter-line2" onClick={this.back}>Frontend Developer, Designer, The Dude</h1>
          <img className="portrait" src={portrait} /> 
          <div className="icon-soup">
            <div className="icon-border"><i className="mdi-header mdi mdi-linkedin" /></div>
            <div className="icon-border"><i className="mdi-header mdi mdi-github-circle" /></div>
            <div className="icon-border"><i className="mdi-header mdi mdi-file-pdf" /></div>
          </div>
          <Arrows className="arrows-anim"/>
        </div>
      </div>
    );
  }
}

export default Header;
