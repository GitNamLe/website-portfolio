import React, { Component } from 'react';
import './about.scss';
import * as $ from 'jquery';

class About extends Component {
    html = 0;
    css = 0;
    js = 0;
    react = 0;
    node = 0;
    angular = 0;

    didCalculate = false;

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let webView = true;
        $(window).scroll(function() {
            if($(window).width() < 700) webView = false;
            else webView = true;
            
            if(!webView && $(window).scrollTop() > 300) {
                $("#skills").css('opacity',1)
                $("#about-anim-text").removeClass("skills-text").addClass("skills-text-mobile");
                $("#about-anim" ).removeClass( "skills" ).addClass( "skills-mobile" );

            } 
            if(webView && $(window).scrollTop() > 300) {
                $("#skills").css('opacity',1)
                $("#about-anim" ).removeClass( "skills-mobile" ).addClass( "skills" );
                $("#about-anim-text").removeClass("skills-text-mobile").addClass("skills-text");
            }
          })
    }

    render() {
        return (
            <div className="about">
                <section id="skills">
                    <div id="about-anim-text">
                        <h1>Who am I?</h1>
                        <p>I enjoy developing and continuously improving.</p>
                        <p>Check out my recent projects.</p>
                        <p>Don't be shy say hi.</p>
                    </div>
                    <article id="about-anim">
                        <div>
                            <p className="language-title">HTML5<span></span><span className="skill-lang"></span><p className="percent">80%</p></p>
                        </div>
                        <div>
                            <p className="language-title">CSS3<span></span><span className="skill-lang"></span><p className="percent">90%</p></p>
                        </div>
                        
                        <div>
                            <p className="language-title">JS / jQuery<span></span><span className="skill-lang"></span><p className="percent">80%</p></p>
                        </div>
                        <div>
                            <p className="language-title">React<span></span><span className="skill-lang"></span><p className="percent">70%</p></p>
                        </div>
                        
                        <div>
                            <p className="language-title">Node.js<span></span><span className="skill-lang"></span><p className="percent">75%</p></p>
                        </div>
                        <div>
                            <p className="language-title">Angular<span></span><span className="skill-lang"></span><p className="percent">60%</p></p>
                        </div>
                    </article>
                </section>
            </div>
        )
    }
}

export default About;