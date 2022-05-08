import React, { Component } from 'react'
import './Footer.css'
import logo from '../../assets/images/forfooter3.svg'
import imoo from '../../assets/images/logo.png'
import { SiMinutemailer } from 'react-icons/si'
import { IconContext } from "react-icons"
import { BsInstagram } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"

export default class myfooter extends Component {
  render() {
    return (
      <footer id="myfoot" className='bg-dark' style={{ position: "relative" }}>
        <div id="upper">
          <div id="upper1">
            <p>NO CREDITS REQUIRED</p>
            <h2 style={{ color: "white" }}>Start using our website today</h2>
            <div className='row'>
              <input type="text" id="foremail" placeholder='Your email' />
              <IconContext.Provider value={{ style: { width: '7rem', position: 'absolute', left: '40vw' } }}>
                <SiMinutemailer size="2em" color='white' onClick={event => window.location.href = ''} type="button" />
              </IconContext.Provider>
            </div>
          </div>
          <div id="upper2">
            <img src={logo} alt="not found" style={{ maxWidth: '10rem', width: '100%' }} />
          </div>
        </div>
        <div id="down">
          <div id="down1">
            <img src={imoo} alt="not found" style={{ maxWidth: '10rem', width: '100%', marginLeft: '-15px', paddingBottom: '15px' }} />

          </div>
          <div id="down2">
            <ol style={{ listStyle: 'none' }}>
              <li class="table"><a href='www.google.com'><p>About</p></a></li>
              <li class="table"><a href='www.google.com'><p>Jobs</p></a></li>
              <li class="table"><a href='www.google.com'><p>Docs</p></a></li>
            </ol>
          </div>
          <div id="down3">
            <ol style={{ listStyle: 'none' }}>
              <li class="table"><a href='www.google.com'><p>Terms and Conditions</p></a></li>
              <li class="table"><a href='www.google.com'><p>Privacy Policy</p></a></li>
              <li class="table"><a href='www.google.com'><p>Cookie Policy</p></a></li>
            </ol>
          </div>
          <div id="down4">
            <ol style={{ listStyle: 'none' }}>
              <li style={{ color: 'white' }}><p>Lets chat!</p></li>
              <li class="table"><a href='www.google.com'><p>hi@SKYRIX</p></a></li>
              <li>
                <IconContext.Provider value={{ style: { marginRight: '1rem', color: 'gray', size: '2em' } }}>
                  <BsInstagram onClick={event => window.open('https://www.instagram.com/', '_blank')} type="button" />
                  <BsFacebook onClick={event => window.open('https://www.facebook.com/', '_blank')} type="button" />
                  <BsLinkedin onClick={event => window.open('https://www.linkedin.com/', '_blank')} type="button" />
                  <BsTwitter onClick={event => window.open('https://www.twitter.com/', '_blank')} type="button" />
                </IconContext.Provider>
              </li>
            </ol>
          </div>
        </div>
      </footer>
    )
  }
}