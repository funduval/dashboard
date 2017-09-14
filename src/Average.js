import React from "react";
import './App.css'; 
import './Main.js'; 

//connect all this to SUBMIT button/page
const Average = props =>

    <div className="well" id="averageWell">
<h4>Your average daily sugar intake is: </h4>
                    <div className="panel">
                          <div className="panel-body" data-value={props.sugar}>
                         {(props.sugar*35)/7} <h5> sugar grams consumed per day</h5>
                      {Math.floor(((props.sugar*35)/7)-25)} <h5> grams more than the daily allowance</h5> 
                         <h5> Total of{((((props.sugar*35)/7)-25)*365)*4} pure sugar calories per year </h5>
                         <h5> Which, if that's above your daily caloric needs</h5><h5> potentially amounts to {Math.floor((((((props.sugar*35)/7)-25)*365)*4)/3500)} pounds per year!</h5>
               
                          </div>
                    </div>     
  
    </div>
  

export default Average;  