import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
class NavBar extends React.Component{

  render(){
    return(
      <nav>
  <div className="light-blue nav-wrapper">
    <ul id="nav-mobile" class="left">
      <li><Link to="/" > About </Link></li>
      <li><Link to="/Projects" >Projects </Link></li>
      <li><Link to="/Skills" > Skills </Link></li>
      <li><Link to="/Contact" > Contact Me </Link></li>
    </ul>
  </div>
  </nav>

)
}
}
export default NavBar
