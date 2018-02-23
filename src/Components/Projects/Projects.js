import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'

class Projects extends React.Component{
  constructor(props){
    super();
    this.state = {
      selected: 0
    }
        this.setContent = this.setContent.bind(this);
  }
  setContent(num){
    this.setState({
      selected: num
    })
  }
  render(){
    return(
    <div className = "container" style= {{width: 'auto'}}>
    <p style ={{fontSize:20}} className = "center-align">Below are some of my favorite projects that I have worked on. You can use the links on the left side of the page to navigate to each individual project. For most of these projects the source code is available on my <a href= "https://github.com/remery426">github</a>. </p>
    <div className="row">

    <div className="col s12 m4 l3" style = {{display: "inline-block"}}>
    <ul>
    <li > <button onClick={() => this.setContent(0)} className= "waves-effect waves-light btn grey" style = {{width: 200}}>
    FitFam Mobile Appplication</button> </li>
    <li> <button onClick={() => this.setContent(1)}  className= "waves-effect waves-light btn grey" style = {{width: 200}}> MineSweeper </button> </li>
    <li > <button onClick={() => this.setContent(2)} className= "waves-effect waves-light btn grey" style = {{width: 200}}>SkyCast Weather</button> </li>
    <li> <button onClick={() => this.setContent(3)} className= "waves-effect waves-light btn grey" style = {{width: 200}}>Junior Job Finder</button> </li>
    <li > <button onClick={() => this.setContent(4)} className= "waves-effect waves-light btn grey" style = {{width: 200}}>React Poker Hands</button> </li>
    <li> <button onClick={() => this.setContent(5)} className= "waves-effect waves-light btn grey" style = {{width: 200}}>Codewars </button> </li>
    </ul>
    </div>

    <div className="col s12 m8 l9">
      <Card style = {{display: "inline-block"}} title = {Data[this.state.selected].title} imgUrl = {Data[this.state.selected].imgUrl} tools = {Data[this.state.selected].tools} content = {Data[this.state.selected].content} linkUrl= {Data[this.state.selected].linkUrl} linkDescription= {Data[this.state.selected].linkDescription}/>
    </div>

  </div>

    </div>

    )
  }
}

const Data = [
  {title: "FitFam Mobile Application", imgUrl : "http://i281.photobucket.com/albums/kk212/emeryryan1/Mobile_App_v1.jpg", content: "Developed an inspirational fitness application for a startup. This project was largely front-end and I spent most of my time working with react native.  I created custom card animations that allow users to swipe through inspirational quotes and images.  In order to obtain these quotes and images I utilized python web scraping libraries. Although the project was largely front-end, I also constructed an api to store the static content outside of the application (as it would be updated often).", tools: "React Native, NodeJS, MongoDB, Express, Python, Git & Heroku", linkDescription: "Video demonstration of the app", linkUrl: 'https://vimeo.com/256713302'},
  {title: "MineSweeper", imgUrl : "https://s3.amazonaws.com/poly-screenshots.angel.co/enhanced_screenshots/1095884-original.png", content: "MEAN stack web application that allows users to play MineSweeper and stores the top times in a database. I worked as part of a small group in which I created the game logic using angular.", tools: "Angular, NodeJS, MongoDB, Express,  HTML & CSS", linkDescription: "Git Hub Repo", linkUrl:"https://github.com/loganstillings/MineSweeper"},
  {title: "SkyCast Weather", imgUrl : "https://s3.amazonaws.com/poly-screenshots.angel.co/Project/2c/629452/c0f3cd0224350446c16675691f58f92c-original.png", content: "Responsive weather application that allows the user to display the weather in the geographic area of their choosing. The search history for each user is stored in MongoDB", tools: "Angular, Chart.JS, NodeJS, MongoDB, Express,  HTML & CSS", linkDescription: "Deployed Application", linkUrl:"https://skycastemery.herokuapp.com/#/"},
  {title: "Junior Job Finder", imgUrl : "https://s3.amazonaws.com/poly-screenshots.angel.co/Project/9e/629456/f67f1ff2bf6940f50f4be4193d4ee80a-original.png", content: "Web Application designed to help junior developers find appropriate roles to apply for. The application parses the results of Indeed and Ziprecruiter search results to improve the quality of results. Users can login to save their search history in a SQL database ", tools: "Python, Django, SQLite, HTML & CSS", linkDescription: "Deployed Application", linkUrl:"http://54.245.37.182/"},
  {title: "React Poker", imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd9NJKW-dAdRaqnNRsmx6CQqGQLNmJrVyKsKeNerLo7bbxXqM5", content: "Front End React application that allows users to input 2 Poker Hands and determine the winner. " , tools: "React, Materialize CSS, Git and Heroku", linkDescription: "Deployed Application", linkUrl:"https://murmuring-shore-31006.herokuapp.com/"},
  {title: "Codewars", imgUrl : "https://s3.amazonaws.com/poly-screenshots.angel.co/Project/55/693639/ee1746870507b9490c8400a5ff22a3cd-original.jpg", content: "My favorite part of programming is thinking through problems and coming up with creative solutions.  I utilize competitive progamming websites like Codewars and Hackerrank to test my skills and  I am currently in the top 1 percent of over 300,000 Codewars users." , tools: "Python, C#, Javascript, SQL", linkDescription: "Profile", linkUrl:"https://www.codewars.com/users/Remery426"}

]

export default Projects;
