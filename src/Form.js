import React from 'react'; 

const Form = props => 

      
             
        
               <div className="form-group">
               <h3>Enter A Search Below</h3>
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

        
                  
   

export default Form;
