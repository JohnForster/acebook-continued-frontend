import React from 'react';
import ReactDOM from 'react-dom';

console.log('hello from index.js');

class App extends React.Component {
  render(){
    return(
        <div>
          <h1>Howdy from React</h1>
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));