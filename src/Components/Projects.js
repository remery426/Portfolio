import React from 'react';
import ReactDOM from 'react-dom';
import Card from './About/Card'

class Projects extends React.Component{
  constructor(props){
    super();
  }
  render(){
    return(
    <div>
  <div class="col s3">
  <ul>
    <li> <button className= "waves-effect waves-light btn grey" style = {{width: 200}}>FitFam Mobile</button> </li>
    <li> <button className= "waves-effect waves-light btn grey" style = {{width: 200}}>SkyCast Weather Application</button> </li>
    <li> <button className= "waves-effect waves-light btn grey" style = {{width: 200}}>Junior Job Finder</button> </li>
    <li> <button className= "waves-effect waves-light btn grey" style = {{width: 200}}>Minesweeper</button> </li>
    <li> <button className= "waves-effect waves-light btn grey" style = {{width: 200}}>React Poker Hands</button> </li>
    <li> <button className= "waves-effect waves-light btn grey" style = {{width: 200}}>Codewars </button> </li>
  </ul>
  </div>


    <Card content = {Data[0].content} boldText = {Data[0].title} imgUrl = {Data[0].imgUrl}/>
</div>


    )
  }
}

const Data = [
  {title: "FitFam Mobile Application", imgUrl : "https://files.slack.com/files-pri/T06CE4L8N-F8FCU1K46/mobile_app_v1.png", content: "Developed a fitness application for a startup using React Native, Node.JS, Express, MongoDB and Python. This project was largely front-end and I spent most of my time working with react native.  I created custom card animations that allow users to swipe through inspirational quotes and images.  In order to obtain these quotes and image I utlized python web scapring libraries. Although the project was largely front-end I also constructed an api to store the static content outside of the application (as it would be updated often)"}
]

export default Projects;
