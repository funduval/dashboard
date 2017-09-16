
import axios from "axios";


const BASEURL = "https://api.nutritionix.com/v1_1/search/";
const APIKEY = "5234f7f1&appKey=c6da7cb3302759d1e20f3793daa4b711";


export default {

			  search: function(query) {
			    return axios.get(BASEURL + query + APIKEY);

			  },

			   log: function(currQuery) {

			   	alert("logging food")
			   	
			   }

};

