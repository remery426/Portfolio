import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component{
  render(){
    return(
      <nav>
      <div className =" grey nav-wrapper">
            <h1 className=" brand-logo">
              Ryan Emery Software Developer
            </h1>
          </div>
      </nav>
    )
  }
}
export default Header
