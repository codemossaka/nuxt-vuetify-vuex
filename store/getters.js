import * as type from "./types";
import axios from 'axios';
const getters ={
  GET(state, getters){
    return (url, params)=>
      axios.get(`http://localhost:9999/${url}`, {headers: getters.headers})
      .then(response => response.data || {})
  },
  POST(state, getters) {
    return (url, params) => axios.post(`http://localhost:9999/${url}`, params,  {headers: getters.headers})
      .then( response => response.data || {} ).catch(response => response.response.data || {} )
  },
  PUT(state, getters) {
    return (url, params) => axios.put(`http://localhost:9999/${url}`, params,  {headers: getters.headers})
      .then( response => response.data || {} )
  },
  DELETE(state, getters) {
    return (url, params, commit) => axios.delete(`http://localhost:9999/${url}`, {headers: getters.headers})
        .then( response =>
           response.data || {}
        )

  },


};

export default getters;
