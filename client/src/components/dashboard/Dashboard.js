import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';

class Dashboard extends Component{
  componentDidMount() {
    this.prop.getCurrentProfile();
  }

  render(){
    return(
      <div>
      
      </div>
    )
  }
}

export default Dashboard;
