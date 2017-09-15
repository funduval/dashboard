import React from "react";
import './App.css'; 
import './Main.js'; 
//connect all this to SUBMIT button/page
const Results = ({results, handleFormSubmit}) =>

          <ul className="list-group search-results">

                      {results.map(result => {
                        const {
                          item_name,
                          brand_name,
                          nf_sugars
                        } = result.fields;

                        return <li key={result._id} className="list-group-item">

                            <h5 className="contains">{item_name} </h5>

                            <button 
                             className="btn btn-primary form-control"
                             id="log"
                             onClick={handleFormSubmit} >
                             log
                            </button> 
                        </li>
                      }
                 )}      
          </ul>     
  

export default Results;


// {props.results.map(result =>
//       <li key={result} className="list-group-item">
//         <img alt="Dog" src={result} className="img-responsive" />
//       </li>
//     )}