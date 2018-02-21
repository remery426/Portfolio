import React from 'react';
import ReactDom from 'react-dom';
const Card = (props) =>{
  return(

  <div className="col s12 m7">
      <div className="card horizontal">
        <div className="card-image">
          <img style = {styles.imgStyle} src={props.imgUrl} alt="Image temporarily unavailable"></img>
        </div>
        <div className="card-stacked">
          <div class="card-content">
            <div  className = "left-align" style = {{'padding-left': 80}}>
            <h5> {props.boldText}</h5>
            <p>{props.content}</p>
            </div>
          </div>
      </div>
      </div>
  </div>
)
}
const styles = {
  imgStyle : {
    width: 150,
    height: 150
  }
}
export default Card
