import React from "react";
import './App.css'; 
import './Main.js'; 

//connect all this to SUBMIT button/page
const Results = props =>

    <div className="well" id="resultWell">

            <ul>

            {//glyphicon glyphicon-folder-open
            }
                <li>
                    <div className="panel">
                          <div className="panel-body" data-value={props.sugar}>
                          {props.food}<h5> contains </h5>{props.sugar} <h5> grams of sugar </h5><br/><br/>
               
                              <button 
                              className="btn btn-primary form-control"
                              onClick={props.handleFormSubmit} >
                              Save Food
                              </button>       
                          </div>
                    </div>
                </li>
            
            </ul>     
  
    </div>
  

export default Results;