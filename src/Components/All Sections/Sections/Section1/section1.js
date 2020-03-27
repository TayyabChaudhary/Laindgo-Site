import React from 'react';
import './section1.scss';
import Logo from '../../../Assects/Logo/Main-logo/logo-politic.png'
import $ from 'jquery';
export default function section1() {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('.nav').addClass('affix');
            console.log("OK");
        } else {
            $('.nav').removeClass('affix');
        }
    });
    return (
        <div>
            <nav className="nav">
                <div className="container">
                    <div className="logo">
                        <a href="#">
                            <img src={Logo} alt="Main-logo" />
                        </a>
                    </div>
                    <div id="mainListDiv" className="main_list">
                        <ul className="navlinks">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Contacts</a></li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-search"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-th"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <span className="navTrigger">
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                </div>
            </nav>

            <section className="home">
                <section className="section">
                    <div className="container">
                        <h1>
                            We Effective The<br/>
                             Prowerfull Egency
            </h1>
            <p className="has-text-white is-size-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>
            <button className="button">Get It Now</button>
                    </div>
                </section>
            </section>

        </div>
    )
}
