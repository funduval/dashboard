import React from "react";
import './App.css'; 
import './Main.js'; 

//connect all this to SUBMIT button/page
const Results = props =>

    <div id="resultWell">

            <ul>

            {//glyphicon glyphicon-folder-open
            }
                <li>
                    <div className="panel">
                 
                      
                          <div className="panel-body" data-value={props.sugar}>
                          <h5 className="contains">{props.food}...{props.brand}..................{props.sugar}g sugar </h5>
                
               
                              <button 
                              className="btn btn-primary form-control"
                              id="log"
                              onClick={props.handleFormSubmit} >
                              log
                              </button>       
                          </div>
                    </div>
                </li>
            
            </ul>     
  
    </div>
  

export default Results;