import React, { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';


class MyFooter extends Component {
  render () {
    return (
      <div>
        <footer className='footer'>  
          <div className='center-align'>
            Made With <a href="http://fontawesome.io/icons"><FontAwesome name='heart' style={{color: 'red'}} target='_blank' /></a> in <span className='greenC'>Nigeria</span>
            <span className='pull-right'>
              Follow us on <a href="http://www.facebook.com" target='_blank' > <FontAwesome name='facebook-official' /> </a> <a href="http://instagr.am/ebuka_hills" target='_blank'><FontAwesome name='instagram' /></a> <a href="http://www.twitter.com/" target='blank'><FontAwesome name='twitter' /></a>
            </span>
            <span className='pull-left'>
              &copy;2017 eChange
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default MyFooter;