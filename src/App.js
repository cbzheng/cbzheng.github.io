import React from 'react';
import './App.css';
import Introduction from './components/Introduction';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Timeline from './components/timeline';
import Navigator from './components/navigator';

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Introduction></Introduction>
        <Timeline></Timeline>
      </header>
    </div>
  );
}

export default App;
