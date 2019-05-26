import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import STORE from '../store';
import './Nav.css';

class Nav extends Component {
  render() {
    //console.log(this.props.match.params.folderName);
    // <NavLink to={toURL}>
    //   <div className="nav-item" key={item.id}>{item.name}</div>
    // </NavLink>
    return (
      <div className="main-nav">
        {STORE.folders.map((item, index) => {
          let toURL = '/folders/' + item.name.toLowerCase();
          return (
            <NavLink to={toURL}>
              <div className="nav-item" key={item.id}>{item.name}</div>
            </NavLink>)
        })}
      </div>
    );
  }
}

export default Nav;
