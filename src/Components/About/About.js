import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import {Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class About extends React.Component {
  constructor(){
    super();
    this.state= {
      showDetails: false,
      imgNum: 0
    }
    this.showMore = this.showMore.bind(this);
    this.changeDetails = this.changeDetails.bind(this);
    this.selectButton = this.selectButton.bind(this);
  }
  componentDidMount() {
    this.interval = setInterval(() => this.nextPhoto(), 5000);
  }
  nextPhoto(){
    if(this.state.imgNum == imgData.length-1){
      this.setState({
        imgNum:0
      })
    }
    else{
      this.setState({
        imgNum: this.state.imgNum +1
      })
    }
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
          <Card boldText = "Dickinson College" content= "Class of 2015. Graduated cum laude with a Bachelors Degree." imgUrl= 'https://cdn1.iconfinder.com/data/icons/university-set-1/512/16-512.png'/>
          <Card boldText = "Coding Dojo" content = "Attended an immersive 14 week coding bootcamp and completed the program with the highest possible achievement levels" imgUrl = "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/2470/s300/cd-logo-blue-600x600.png"/>
          <h2> Work Experience </h2>
          <Card boldText = "Mobile Developer at FitFam" content = "I worked as part of small team to develop a React Native application for a startup. I was in charge of managing the source code using github and implementing the majority of application's features." imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTkXlyBhwUSTapRJ5DSD0APAA0k0yKvr3k0dgTFuN9piMxS-wPVQ"/>
          <Card boldText = "QA Tester at Voicebox" content = "I was a member of a large team that helped test and improve the performance of voice recognition software." imgUrl = "https://s3-us-west-1.amazonaws.com/companies.comparably.com/42833_logo_voicebox-technologies.png?1513636931733"/>
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
      <h2 className="center-align"> About me </h2>
      <p className="center-align" style = {{fontSize: 18}}> I am a passionate and creative programmer living in the Seattle area.  I most recently worked as a React Native Developer but I am open to learning and working with all technologies. Check out the <Link to = "/projects"> projects </Link> page to see some of my work and feel free to reach out to me with any opportunities or questions.  </p>
      <div className="center-align">
        <img  className="center-align" style = {{height: 300}} src = {imgData[this.state.imgNum].imgUrl}/>
        <p style = {{fontSize:18, fontStyle: 'italic'}}> {imgData[this.state.imgNum].caption}</p>
      </div>
      <div className="center-align">
      {this.showMore()}
      <button onClick={this.changeDetails} className= "waves-effect waves-light btn light-blue">{this.selectButton()}</button>
      </div>
      </div>
    )
  }
}
const imgData = [{imgUrl:"http://i281.photobucket.com/albums/kk212/emeryryan1/RyanSnowboarding.png", caption: "Sendy"},{imgUrl:"http://i281.photobucket.com/albums/kk212/emeryryan1/ryanandjoze.png", caption: "Animal Lover"}, {imgUrl:"https://lh3.googleusercontent.com/Bn9BAcG-w0gvmh9H3kMOzJ5Fv1S-enrKYa_O2-RjvTzsR7bK3tmy0v9f7g305nLsc6mIwjuc96jbqDEE7rtje-u_501JE-rZF-s3HzPDIfKXfvqHJxcBdYOmxHBrzYKw4VOF0qi3sRdflYpv-xIo9p9cNbBX2RnvYIAEMpMYZBV1JBWuVzxfQaJDHBmJ8fEvPukvZnJsrey6BQIIhS8N_Y4iRS4MsaXF-Wn0QKsHf6u-KimuwqvcJuPMc8y1kf5Y1zTzMr7jPaVg9QvMUYI2wPYNPqd-JV-71mQs6swmsNnmEFFmvN1L612lXCDaQ2QVrSxNQP9JLDnJ--fxtZCprJxnTDoMt-lMItMFOR4fZko-fWWP0EqLrraH9fqssHkx_drb3GUDUlKBEFFEhFvXL_WnyuJwXdQcEcinVYysFA9stJrXxQhNMEhiDyuewOOCsD8Npe-u1M0uCi870RVE2H1Ghmejn-pelBEhsNKVvvzW2jco6QDnLF_dPTpKyr3aToxgBDxNAxaiLgnpsplS9fgU0cjM2qfk-SdBT0denlMJtlRlQSEnmxT0kDGfs2jxsESuJXynpxmANQB16JifhxA9FPkA0o6S6oAOalDkoNEnJXPy2P_bXXcmxetAZmyqdHylMWjIxMvv08MqKSeLYJ0AzHeL4-R8=w1250-h938-no",caption:"Very Stable Genius"}]
export default About;
