import React, { Component } from 'react';  
import './App.css'; 
import Form from './Form.js'
import Results from './Results.js'
import Saved from './Saved.js';
import Average from './Average.js';
import API from './API.js'

class Main extends Component { 

state = {
    food:"",
    sugar:"",
    item:"",
    brand:"",
    weekly:""
   
  };

 componentDidMount() {
    this.searchFood();
  }

 

  searchFood = () => {

    // test query string  ==== https://api.nutritionix.com/v1_1/search/apple?results=0:20&fields=item_name,brand_name,nf_sugars&appId=5234f7f1&appKey=c6da7cb3302759d1e20f3793daa4b711

    const currQuery = this.state.item + "?results=0:20&fields=item_name,brand_name,nf_sugars&appId="


    // console.log(currQuery)

    API.search(currQuery)
      .then(res => {
        this.setState({ food:res.data.hits[0].fields.item_name, sugar: res.data.hits[0].fields.nf_sugars,brand:res.data.hits[0].fields.brand_name})
  
  let results=res.data.hits[0].fields
  // let sugArray=[]
  // let median;

  // for (var i = 0; i < 10; i++) {

  //   sugArray.push(results[i].fields.nf_sugars)

  // }

        console.log("This is a brand name " + results.brand_name);
       

      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {

    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    
    // Updating the input's state
    this.setState({

      [name]: value
      
    });

  };

  handleFormSubmit = event => {

    //Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    //validation checks inside the event istener   
if(this.state.item === ""){

alert("No food item was entered")

}

else{
    this.searchFood();

    alert(`Searching food item: ${this.state.item}`);
}

    this.setState({
    food:"",
    sugar:"",
    item:"",
    previous:"",
    brand:""
    });

  };

render() { 

    var thisObject = this.state.sugar
  console.log("These are the sugar grams:" + thisObject)

return (

<div className="container">

      <div className="row"> 
             <div className= "col-md-4" id="form">

                    <Form
                                  value={this.state.value}
                                  handleInputChange={this.handleInputChange}
                                  handleFormSubmit={this.handleFormSubmit}
                                  item={this.state.item}
                                        /> 
              </div>       

              <div className= "col-md-7" id="results">

                <Results
                  food={this.state.food}
                  sugar={this.state.sugar}
                  brand={this.state.brand}
                   
                    />

              </div>

      </div>
            
              <div className="row"> 
            
                          <div className= "col-md-4" id="average">

                            <Average
                              food={this.state.food}
                              sugar={this.state.sugar}
                               
                                />

                          </div>
              </div>

              <div className="row">             

                <Saved /> 

              </div>
</div>
 
) 

} 

} 

export { Main as default }; 




  
