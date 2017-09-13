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
                          <div className="panel-body">
                          {props.food}<br/><br/>
                              <div data-value={props.sugar}> </div>
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