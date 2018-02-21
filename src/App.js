import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact'
import {BrowserRouter, Route} from 'react-router-dom';
class App extends React.Component {
  render(){
    return(
      <div className="container">
        <BrowserRouter>
          <div>
            <Header/>
            <NavBar/>
            <Route exact path="/" component={About}/>
            <Route exact path="/Projects" component={Projects}/>
            <Route exact path="/Skills" component={Skills}/>
            <Route exact path="/Contact" component={Contact}/>

          </div>
        </BrowserRouter>
      </div>
    )
  }
}
export default App
