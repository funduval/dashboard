import React from 'react'; 

const Form = props => 

        <div className="col-md-12"  id="search">
             <h3>Enter A Search Below</h3>
        
               <div className="form-group">
                         <label htmlFor="search">Search:</label>
                        <form className="form" >
                                <input 
                                  onChange={props.handleInputChange}
                                  value={props.item}
                                  name="item"
                                  type="text"
                                  placeholder="Food Item"
                                />
                                <button onClick={props.handleFormSubmit}>Submit</button>
                        </form>
               </div>               

        
        </div>               
   

export default Form;
