import React, { Component } from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import './aboutus.css'
import audience from '../../assets/images/audience.svg'
import money from '../../assets/images/money.svg'
import service from '../../assets/images/service.svg'
import communities from '../../assets/images/communities.svg'
import profile from '../../assets/images/profile.svg'
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center abt" id="abt1">
          <div class="col-md-5 p-lg-4 mx-auto my-5">
            <h1 class="display-4 font-weight-normal">Blog world</h1>
            <p class="lead font-weight-normal my-3">
              The next big thing in blogging,We blog to perfection,We live and breathe blogging,Blogging is in the blood
            </p>
            <a
              class="btn btn-outline-secondary"
              href="https://getbootstrap.com/docs/4.3/examples/product/#"
            >
              Coming soon
            </a>
          </div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        <div style={{ padding: "2rem" }}>
          <h1 style={{ marginBottom: "2rem" }}><center>OUR TEAM</center></h1>
          <CardGroup>
            <Card style={{ marginLeft: "15px", marginRight: "10px" }}>
              <Card.Img
                variant="top"
                src={profile}
                style={{ height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Raunak Somani</Card.Title>
                <Card.Text>
                  Email-raunak@gmail.com<br />
                  National Institute of Technology Karnataka
                </Card.Text>
                <Button variant="primary">Github link</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", marginLeft: "10px", marginRight: "10px" }}>
              <Card.Img
                variant="top"
                src={profile}
                style={{ height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Reetesh Deshmukh</Card.Title>
                <Card.Text>
                  Email-reeteshdeshmukhbpl@gmail.com<br />
                  National Institute of Technology Karnataka
                </Card.Text>
                <Button variant="primary">Github link</Button>
              </Card.Body>
            </Card>
            <Card style={{ marginLeft: "10px", marginRight: "15px" }}>
              <Card.Img
                variant="top"
                src={profile}
                style={{ height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Ravindra Nath gautam</Card.Title>
                <Card.Text>
                  Email-ravindra@gmail.com<br />
                  National Institute of Technology Karnataka
                </Card.Text>
                <Button variant="primary">Github link</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
        <div className="options">
          <div className="option1" style={{ marginLeft: '10rem', alignItems: "center" }}>
            <h2>Choose Category</h2>
            <p>Can choose different categories which your blog suits the most and get joined in community.</p>
          </div>
          <div className="option2">
            <img src={communities} style={{ height: '13rem', float: 'right', marginRight: '5rem' }} />
          </div>
        </div>
        <div className="options">
          <div className="option2">
            <img src={service} style={{ height: '13rem', float: 'right', marginRight: '5rem' }} />
          </div>
          <div className="option1" style={{ marginRight: '5rem', alignItems: "center" }}>
            <h2>Get all services Free!</h2>
            <p>you dont need to put any card details for any services and will also get free help service incase of any problem</p>
          </div>
        </div>
        <div className="options">
          <div className="option1" style={{ marginLeft: '10rem', alignItems: "center" }}>
            <h2>Earn money</h2>
            <p>Get paid for your hard work. Google AdSense can automatically display relevant targeted ads on your blog so that you can earn income by posting about your passion.</p>
          </div>
          <div className="option2">
            <img src={money} style={{ height: '13rem', float: 'right', marginRight: '5rem' }} />
          </div>
        </div>
        <div className="options">
          <div className="option2">
            <img src={audience} style={{ height: '13rem', float: 'right', marginRight: '5rem' }} />
          </div>
          <div className="option1" style={{ marginRight: '5rem', alignItems: "center" }}>

            <h2>Know your audience</h2>
            <p>Find out which posts are a hit with Blogger's built-in analytics. You'll see where your audience is coming from and what they're interested in. You can even connect your blog directly to Google Analytics for a more detailed look.</p>
          </div>
        </div>

      </div>
    );
  }
}