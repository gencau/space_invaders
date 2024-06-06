import React, {Component} from 'react';
import './App.css';
import Tableau from './containers/tableau';

class App extends Component {
  render() {
    return (
      <div className='tc'>
        <Tableau/>
      </div>
    );
  }
}

export default App;
