import React from 'react';
// import logo from './logo.svg';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './components/Header'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline></CssBaseline>
        <div>
          <Header></Header>
        </div>
      </React.Fragment>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
