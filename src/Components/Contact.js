import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  render(){
    return (
      <div className="container">
        <h4> Contact information </h4>
        <p>Below is my contact information and a couple of links to my profiles. Feel free to reach out to me with any job opportunites or just to chat about tech. In general I prefer to be contacted by email.  </p>
        <h5> Email: </h5>
        <p> emeryryan1@gmail.com</p>
        <h5> Phone: </h5>
        <p> 610 755 5939</p>
        <h5> <a href ="https://www.linkedin.com/in/ryan-emery-4223a0105/">LinkedIn</a> </h5>
        <h5> <a href ="https://github.com/remery426">Github</a> </h5>
      </div>

     )
  }
}
export default Contact;
