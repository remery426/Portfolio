import React from 'react';
import ReactDOM from 'react-dom';

const Card = (props) =>{
  return(
          <div class="row" >
              <div class="card">
                <h2> {props.title} </h2>
                <div class="card-image">
                  <img src={props.imgUrl}/>
                </div>
                <div class="card-content" style = {{height: 200}}>

                  <p>Tools Utilized: {props.tools}</p>

                  <p>  About: {props.content}</p>
                </div>
                <div class="card-action">
                  <a href= {props.linkUrl}>{props.linkDescription}</a>
                </div>
              </div>
          </div>
  )

}
export default Card;
