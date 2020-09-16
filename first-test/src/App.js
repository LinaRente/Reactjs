import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import './components/Title'
import Title from './components/Title';
import Content from './components/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bonjour React</h1>
          <Title age={32}
                name='Lina'
                text='This is a text'
                languages={['French', 'Spanish']} />
          <Content react='This is going to be the end of me...' />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
