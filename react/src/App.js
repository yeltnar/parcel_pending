import React, {useState} from 'react';

let loaded=false;


function App(props) {

  const {app_id} = props;
  
  if( app_id===undefined ){
    const err_msg = `app_id is ${app_id}`;
    alert(err_msg);
    throw new Error(err_msg);
  }
  
  const [loading, setLoading] = useState(true);
  const [resp_arr, setRespArr] = useState([]);

  if( loaded===false ){
    
    getAccessBodies(app_id)
    .then((resp)=>{
      loaded=true;
      setRespArr(resp);
      setLoading(false);
    });
  };

  
  const access_code_eles = resp_arr.map((cur,i,arr)=>{
    return (
      <div>
        <div>{new Date(cur.date).toString()}</div>
        <br/>
        <div>Access Code: {cur.access_code}</div>
        <hr/>
      </div>
    );
  });
  
  const style = {
    backgroundColor: loading===false ? "green" : "yellow",
  };

  return (
    <>
    <div style={style}>
      <button onClick={refresh}>refresh</button>
    </div>
    <div>
      {access_code_eles}
    </div>
    </>
  );

  function refresh(){
    window.location.reload();
  }
}

async function getAccessBodies(app_id){

  // Your access code is xxx <br

  const access_code_obj = await fetch(`https://script.google.com/macros/s/${app_id}/exec`).then(resp=>resp.json())

  return access_code_obj;
}

export default App;
