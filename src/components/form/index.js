import './form.scss';
import { useState } from 'react';

import axios from 'axios';

function Form (props) {

  const [method,setMethod]=useState('get')
  const [url,setUrl]=useState('https://pokeapi.co/api/v2/pokemon')
  const [reqBody,setReqBody]=useState({})

 const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {

      method: method,
      url: url,
      reqBody: reqBody

    };
    const getData = await axios({
      method: method,
      url: url,
      reqBody: reqBody
    });
    props.handleApiCall(formData,getData);
  }

  const itemSelect=(e)=>{
    setMethod(e.target.value)
  }

  const urlHandler=(e)=>{
    setUrl(e.target.value)
  }
  const reqBodyHandler=(e)=>{
    setReqBody(e.target.value)
  }
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label className="methods" for='select' >
            Select Your Method
          </label>
          <select name="select" id='select' onChange={itemSelect}>
            <option id="get" value='get'>GET</option>
            <option id="post" value='post'>POST</option>
            <option id="put" value='put'>PUT</option>
            <option id="delete" value='delete'>DELETE</option>
          </select>
          <label  >
            <span>URL: </span>
            <input name='url' type='text' onChange={urlHandler} />
            <button type="submit">GO!</button>
          </label>
             {
            (method=='post'||method=='put')?<textarea id="text" name="text" rows="4" cols="50" defaultValue=' {"object":"Write JSON For Post ,Put Method,,,
            (For Test Use Method Get For :https://pokeapi.co/api/v2/pokemon)"}' 
            onChange={reqBodyHandler}>
            </textarea>:''
          }
        </form>
      </>
    );
  
}

export default Form;