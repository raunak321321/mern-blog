import React, { Component } from 'react'
import './myhelp.css'
import logo from '../../assets/images/help.png'


export default class Help extends Component {
  render() {
    return (
      <div id="help">
        <div id="help1" className='bg-dark'>
          <form>
            <label><p>Your email</p></label>
            <input type="text" placeholder='email' /><br />
            <label><p>Problem description</p>  </label>
            <input type="text" placeholder='description' /><br />
            <button
              className="btn my-2 my-sm-0"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div id='help2'>
          <img src={logo} style={{ maxHeight: '29rem' }} />
        </div>
      </div>
    )
  }
}
