import React, { Component } from 'react';
import './header.scss';
import { Arrows } from '../../styled-components/arrows/arrows';
import * as $ from 'jquery';
import portrait from '../../itsurboi.jpg';
import { TimelineMax, SteppedEase} from "gsap/TweenMax";
import { TextFadeButton } from '../../styled-components/buttons';
import resume from '../../namle.pdf';

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
    $(window).scroll(function() {
      const view = $(window).scrollTop();
      if(view > 1300) {
        $('.btn3').addClass('active');
        $('.btn2').removeClass('active');
        $('.btn1').removeClass('active');      
      } else if(view > 600) {
        $('.btn2').addClass('active');
        $('.btn3').removeClass('active');
        $('.btn1').removeClass('active');        
        $('.content-nav').addClass('fixed-nav');
      } else if(view > 300) {
        $('.content-nav').addClass('fixed-nav');
      } else {
        $('.btn1').addClass('active');
        $('.btn2').removeClass('active');
        $('.btn3').removeClass('active');
        $('.content-nav').removeClass('fixed-nav');
      }
    })

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
      <div className="header-component">
        <div className="header-greyspace"></div>
        <div className="middle-greyspace"></div>
        <div className="head">
          <div className="content-nav">
            <ul style={{display: '-webkit-inline-box'}}>
              <li onClick={() => this.onScrollTeleport(0)} ><TextFadeButton className="btn1" fade="fade">Home</TextFadeButton></li>
              <li onClick={() => this.onScrollTeleport(600)} ><TextFadeButton className="btn2" fade="fade">About</TextFadeButton></li>
              <li onClick={() => this.onScrollTeleport(1300)} ><TextFadeButton className="btn3" fade="fade">Projects</TextFadeButton></li>
            </ul>
          </div>
          <h1 className="line-1 anim-typewriter-line1" style={{color: 'aliceblue'}}>Hello I'm Nam Le</h1>
          <h1 className="red-desc line-1 anim-typewriter-line2" onClick={this.back}>Frontend Developer, Designer, The Dude</h1>
          <div className="header-about">
            <img className="portrait" src={portrait} /> 
            <div className="icon-soup">
              <a href="https://www.linkedin.com/in/nam-le-a3796b174/" target="_blank" className="icon-border"><i className="mdi-header mdi mdi-linkedin" /></a>
              <a href="https://github.com/meNamLe" target="_blank" className="icon-border"><i className="mdi-header mdi mdi-github-circle" /></a>
              <a href={resume} target="_blank" className="icon-border"><i className="mdi-header mdi mdi-file-pdf" /></a>
            </div>
            <Arrows className="arrows-anim"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
