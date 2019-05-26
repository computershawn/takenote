import React, { Component } from 'react';
import STORE from '../store';
import './NotePage.css';

class NotePage extends Component {
  render() {
    const { noteName } = this.props.match.params;
    let currentNote = STORE.notes.find(item => {
      return item.name.toLowerCase() === noteName;
    })

    // Text in 'content' includes line breaks in the
    // form of '\n \r'. We can use these as delimiters
    // to format the text into paragraphs as intended.
    const paragraphs = currentNote.content.split('\n \r');

    // TODO: Convert this date to human readable
    //const modifyDate = currentNote.modified;
    const title = currentNote.name;
    const id = currentNote.id;

    const modified = new Date(currentNote.modified)
    const modifyDate = modified.toDateString();
    const modifyTime = modified.toTimeString();

    return (
      <div>
        <article key={id} className='note-item'>
          <h2>{title}</h2>
          {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          <p><em className="modify-date">Last Modified: {modifyDate} at {modifyTime}</em></p>
        </article>
      </div>
    );
  }
}

export default NotePage;
