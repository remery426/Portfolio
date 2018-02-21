import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import {Link} from 'react-router-dom';
class About extends React.Component {
  constructor(){
    super();
    this.state= {
      showDetails: false
    }
    this.showMore = this.showMore.bind(this);
    this.changeDetails = this.changeDetails.bind(this);
    this.selectButton = this.selectButton.bind(this);
  }
  changeDetails() {
    if(this.state.showDetails==true){
      this.setState({
        showDetails: false
      })
    }
    else{
      this.setState({
        showDetails: true
      })
    }
  }
  showMore(){
    if(this.state.showDetails == false){
      return
    }
    else{
      return(
        <div>
          <h2> Education </h2>
          <Card boldText = "Dickinson College" content= "i went to dickinson" imgUrl= 'https://cdn1.iconfinder.com/data/icons/university-set-1/512/16-512.png'/>
          <Card boldText = "Coding Dojo" content = "Attended an immersive 14 week coding bootcamp and completed the program with the highest possible achievement levels" imgUrl = "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/2470/s300/cd-logo-blue-600x600.png"/>
          <h2> Work Experience </h2>
          <Card boldText = "Mobile Developer at FitFam" content = "mobile application builder. data gathering guru. legend amongst legends" imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTkXlyBhwUSTapRJ5DSD0APAA0k0yKvr3k0dgTFuN9piMxS-wPVQ"/>
          <Card boldText = "QA Tester at Voicebox" content = "talked to phone for hours on end. typed sentences using hands.  Utilized excel and jira to manage lack of work" imgUrl = "https://s3-us-west-1.amazonaws.com/companies.comparably.com/42833_logo_voicebox-technologies.png?1513636931733"/>
        </div>
      )
    }
  }
  selectButton(){
    if(this.state.showDetails == true){
      return "Show Less"
    }
    else{
      return "Show More"
    }
  }
  render(){
    return (
      <div>
      <h1 className="center-align"> About me </h1>
      <p className="center-align" style = {{fontSize: 22}}> I am passionate and creative programmer living in the Seattle area.  I most recently worked as a React Native Developer but I am open to learning and working with all technologies. Check out the <Link to = "/projects"> projects </Link> page to see some of my work and feel free to reach out to me with any opprotunities or questions  </p>

      <div className="center-align">
      {this.showMore()}
      <button onClick={this.changeDetails} className= "waves-effect waves-light btn light-blue">{this.selectButton()}</button>
      </div>
      </div>
    )
  }
}

export default About;
