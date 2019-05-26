import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import STORE from '../store';
import './NotesList.css';

class NotesList extends Component {
  static defaultProps = {
    match: null,
  }

  render() {
    let listOfNotes = STORE.notes;
    let notAtTopLevel = Object.keys(this.props.match.params).length > 0;
    
    if(notAtTopLevel) {
      const { folderName }  = this.props.match.params;

      // We will use this currentFolderId as a filter
      // for the STORE.notes array when displaying the
      // list of notes in the current folder pertaining
      // to our current URL
      const currentFolderId = STORE.folders.find(folder => {
        return folder.name.toLowerCase() === folderName
      }).id;

      // this.props.match is null if we are at URL "/"
      // If this.props.match is NOT null, we are at
      // URL /folders/(folder_name). This means
      // we want to filter our list of notes to just
      // include notes that are inside that folder 
      listOfNotes = listOfNotes.filter(note => {
        return note.folderId === currentFolderId;
      })
    }

    return (
      <div>
        {listOfNotes.map((note, index) => {
          const toURL = `/notes/${note.name.toLowerCase()}`;
          const timeStamp = new Date(note.modified).toDateString();
          return (
            <article key={note.id} className='notes-list-item'>
              <NavLink to={toURL}><h3>{note.name}</h3></NavLink>
              <p><em className="modify-date">Last Modified: {timeStamp}</em></p>
            </article>
          )
        })}
      </div>
    );
  }
}

export default NotesList;
