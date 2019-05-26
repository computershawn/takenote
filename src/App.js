import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Nav from './Nav/Nav';
import NavSecond from './NavSecond/NavSecond';
import NotesList from './NotesList/NotesList';
import NotePage from './NotePage/NotePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavLink to="/"><h2>take note</h2></NavLink>
        </header>
        <section className="notes-cont">
          <nav className='Nav'>
            <h4>Folders</h4>
              <Route exact path='/'
                component={Nav}/>
              <Route path='/folders/:folderName'
                component={Nav}/>
              <Route path='/notes/:noteName'
                component={NavSecond}/>
          </nav>
          <div class="notes-area">
            <h4>Notes</h4>
              <Route exact path='/'
                component={NotesList}/>
              <Route path='/folders/:folderName'
                component={NotesList}/>
              <Route path='/notes/:noteName'
                component={NotePage}/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
