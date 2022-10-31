import React, { Component, useState, useEffect } from "react";
import './project.css';
import anchor from './anchor.png';
import chart from './chart.png';
import diamond from './diamond.png';
import gates from './gates.png';
import steve from './steve.png';
import post1 from './post1.jpg';
import post2 from './post2.jpg';
import post3 from './post3.jpg';
import post4 from './post4.jpg';
import calendar from './calendar.png';
import right from './right.png';
import fb from './fb.png';
import wh from './wh.png';
import linkin from './linkin.png';
import { GlobalStyles } from "./globalStyles"
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
        margin: 1,
        padding: 0,
        transform: "translateX(6px)",
        "&.Mui-checked": {
            color: "#fff",
            transform: "translateX(22px)",
            "& .MuiSwitch-thumb:before": {
                // backgroundColor: "${({ theme }) => theme.body}",
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    "#fff"
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
            },
        },
    },
    "& .MuiSwitch-thumb": {
        backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
        width: 32,
        height: 32,
        "&:before": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                "#fff"
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    "& .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        borderRadius: 20 / 2,
    },
}));
function project({toggleTheme}) {

    return (
        <div className="container-fluid">
            <div id="header">
                <div className="container">
                    <div className="row float-md-right">
                        <div className="col-md-4">
                            <h1 id="logo">ArbiTech Solutions</h1>
                        </div>
                        <div className="col-md-5 offset-md-3">
                            <div><FormGroup>
                                <FormControlLabel
                                    onClick={toggleTheme}
                                    control={
                                        <MaterialUISwitch sx={{ m: 1 }} defaultChecked />
                                    }
                                    label=""
                                />
                                <GlobalStyles />
                            </FormGroup></div>
                            <ul id="menu">
                                <li><a href="#Home">Home</a></li>
                                <li><a href="#About_us">About us</a></li>
                                <li><a href="#Gallery">Gallery</a></li>
                                <li><a href="#Products">Products</a></li>
                                <li><a href="#Contact_us">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="banner" className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="banner-title">
                                <h1 className="title">Some heading goes Here</h1>
                                <p className="lead">In this tutorial you will learn bootstrap responsive template tutorial in Hindi, Urdu.You can learn how to make responsive website template with bootstrap 4 tutorial in hindi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row" id="row1">
                    <div className="col-md-12">
                        <h2>Some heading goes Here</h2>
                    </div>
                    <div className="col-md-4 p-2" id="col1">
                        <div className="service-box">
                            <img src={anchor} alt="Logo" width="50px" />
                            <h3 id="h3">Some heading</h3>
                            <p>Simple English, accuracy, powerful expression, strong impression are top features of each translation paragraph Urdu to English 10th class.</p>
                        </div>
                    </div>

                    <div className="col-md-4 p-2" id="col1">
                        <div className="service-box">
                            <img src={chart} alt="Logo" width="50px" />
                            <h3 id="h3">Some heading</h3>
                            <p>Simple English, accuracy, powerful expression, strong impression are top features of each translation paragraph Urdu to English 10th class.</p>
                        </div>
                    </div>

                    <div className="col-md-4 p-2" id="col1">
                        <div className="service-box">
                            <img src={diamond} alt="Logo" width="70px" />
                            <h3 id="h3">Some heading</h3>
                            <p>Simple English, accuracy, powerful expression, strong impression are top features of each translation paragraph Urdu to English 10th class.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="testimonials">
                <div className="container ">
                    <div className="row section" id="row1">
                        <div className="col-md-12">
                            <h2 id="h9">Testimonials</h2>
                        </div>
                        <div className="col-md-5 p-3" id="col4">
                            <div className="testimonials">
                                <p>Entrepreneur Bill Gates founded the world's largest software business, Microsoft, with Paul Allen, and subsequently became one of the richest men in the world.</p>
                                <img src={gates} alt="Logo" width="80px" />
                            </div>
                            <div className="author">Bill Gates</div>
                            <div className="author-company">Microsoft</div>
                        </div>
                        <div className="col-md-5 p-3" id="col5">
                            <div className="testimonials">
                                <p>Steve Jobs co-founded Apple Computers with Steve Wozniak. Under Jobs' guidance, the company pioneered a series of revolutionary technologies, including the iPhone and iPad.</p>
                                <img src={steve} alt="Logo" width="80px" />
                            </div>
                            <div className="author">Steve Jobs</div>
                            <div className="author-company">Apple</div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="news">
                <div className="container">
                    <div className="row" id="row2">
                        <div className="col-md-12">
                            <h2 id="h2">Recent News</h2>
                        </div>
                        <div className="col-md-3" >
                            <div className="post-news">
                                <img src={post1} alt="Logo" width="170px" />
                                <h5><a href="">New heading Here</a></h5>
                                <div className="post-date"><img src={calendar} alt="Logo" width="35px" />August 24, 2021</div>
                                <p>After the popularisation of print media in the late 18th Century, newspapers become a regular thing. The printing press brought with itself the advent of the era of information and knowledge.</p>
                                <a href="readmore" id="a" >Read More <img src={right} alt="Logo" width="20px" /></a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="post-news">
                                <img src={post2} alt="Logo" width="170px" />
                                <h5><a href="">New heading Here</a></h5>
                                <div className="post-date"><img src={calendar} alt="Logo" width="35px" />August 23, 2021</div>
                                <p>The easiest way to transfer information about what was happening around the world was the newspaper. Newspapers begin printing early in the morning and are distributed in a systematic manner.</p>
                                <a href="readmore" id="a">Read More <img src={right} alt="Logo" width="20px" /></a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="post-news">
                                <img src={post3} alt="Logo" width="170px" />
                                <h5><a href="">New heading Here</a></h5>
                                <div className="post-date"><img src={calendar} alt="Logo" width="35px" />August 22, 2021</div>
                                <p>Newspapers are printed in several languages. They are delivered to the doorstep of individuals early in the morning. Newspapers are printed in local languages. They are also printed.</p>
                                <a href="readmore" id="a">Read More <img src={right} alt="Logo" width="20px" /></a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="post-news">
                                <img src={post4} alt="Logo" width="170px" />
                                <h5><a href="">New heading Here</a></h5>
                                <div className="post-date"><img src={calendar} alt="Logo" width="35px" />August 21, 2021</div>
                                <p>A weekly subscription will mean that the newspaper or the digest is delivered to your family once a week. Similarly, monthly and yearly subscriptions are also present printed in local languages. </p>
                                <a href="readmore" id="a">Read More <img src={right} alt="Logo" width="20px" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="footer-sidewar">
                <div className="container">
                    <div className="row" id="row3">
                        <div className="col-md-4 p-2">
                            <div className="footer-widget">
                                <h4 id="footer-view">About Company</h4>
                                <p id="footer-view">A company, abbreviated as co., is a legal entity representing an association of people.</p>
                                <p id="footer-view">Companies may associate and collectively register themselves as new companies.</p>
                            </div>
                        </div>
                        <div className="col-md-4 px-4 ">
                            <div className="footer-widget">
                                <h4 id="footer-view1">latest Update</h4>
                                <ul className="ul">
                                    <li><a href="">Jimmy Whalen Appointed New CEO, LLC.</a></li>
                                    <li><a href="">Arbitech LLC announces the retention.</a></li>
                                    <li><a href="">Arbitech, LLC Enters into a Partnership Agreement.</a></li>
                                    <li><a href="">Arbitech at MIPS 2019</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 px-5 ">
                            <div className="footer-widget">
                                <h4>Company Address</h4>
                                <address>
                                    <b>Arbitech Solutions</b>
                                    <p>80 foot road, Hafiz Town<br />
                                        LalaZar, Lahore paistan<br />
                                        Phone: (303) 123-7890</p>
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="footer">
                <div className="container">
                    <div className="row" id="row3">
                        <div className="col-md-6"><p id="last">Copyright@2021 Arbitech solutions</p></div>
                        <div className="col-md-6">
                            <ul id="menu1" className="float-md-right">
                                <li><a href=""></a><img src={fb} alt="Logo" width="25px" /></li>
                                <li><a href=""></a><img src={wh} alt="Logo" width="25px" /></li>
                                <li><a href=""></a><img src={linkin} alt="Logo" width="25px" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default project;