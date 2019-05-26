import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import STORE from '../store';
import './NavSecond.css';

class NavSecond extends Component {
  render() {

    // Get URL of the note page user is viewing
    const { noteName }  = this.props.match.params;

    // Find that note in our STORE
    let currentNote = STORE.notes.find(item => {
        return item.name.toLowerCase() === noteName;
    })

    // Get that note's parent folder ID and find
    // that parent folder in the STORE
    const parentFolderId = currentNote.folderId;
    const folderName = STORE.folders.find(folder => {
      return folder.id === parentFolderId
    }).name

    const toURL = `/folders/${folderName.toLowerCase()}`

    return (
        <div className="nav-sec">
          <div className="nav-item">{folderName}</div>
          <NavLink to={toURL} className="back-to-list">BACK</NavLink>
        </div>
    );
  }
}

export default NavSecond;
