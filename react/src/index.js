import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const app_id = getQueryValue("app_id");
// const app_id = "AKfycbxhhlAmx5u4s_NoEPVX9IhmIgKsRtuXnLjNBlX0LtGv1RNPcMo"; // TODO remove

ReactDOM.render(<App app_id={app_id}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function getQueryValue(desired_key="q"){

    let search = window.location.search;
  
    search = search.split("?")[1];
  
    if( search===undefined ){
      return undefined;
    }
  
    let search_arr = search.split("&");
  
    let q = search_arr.reduce((acc, cur)=>{
  
        if( acc!==undefined ){
            return acc;
        }
  
        const tmp = cur.split("=");
        cur = {
            key:tmp[0],
            value:tmp[1]
        }
  
        if(cur.key === desired_key){
            acc = cur.value
        }
        return acc;
    }, undefined);
  
    return q;
  }

  