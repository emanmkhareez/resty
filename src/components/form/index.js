import './form.scss';
import { useState } from 'react';

import axios from 'axios';

function Form (props) {

  const [method,setMethod]=useState('get')
  const [url,setUrl]=useState('https://pokeapi.co/api/v2/pokemon')
  const [reqBody,setReqBody]=useState({})

 const handleSubmit = async (e) => {
    e.preventDefault();
    const Data = {
      method: method,
      url: url,
      reqBody: reqBody
    };
    
    props.HandeLAPI(Data);
  }

  const selectMethod=(e)=>{
    setMethod(e.target.value)
  }

  const inputURL=(e)=>{
    setUrl(e.target.value)
  }
  const EnterReqBody=(e)=>{
    setReqBody(e.target.value)
  }
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label className="methods" for='select' >
            Select Your Method
          </label>
          <select name="select" id='select' onChange={selectMethod}>
            <option id="get" value='get'>GET</option>
            <option id="post" value='post'>POST</option>
            <option id="put" value='put'>PUT</option>
            <option id="delete" value='delete'>DELETE</option>
          </select>
          <label  >
            <span>URL: </span>
            <input name='url' type='text' onChange={inputURL} />
            <button type="submit">GO!</button>
          </label>
             {
            (method=='post'||method=='put')?<textarea id="text" name="text" rows="4" cols="50" defaultValue=' {"object":,enter JSON  for post OR put method 
            (For Test  Use GET✅ Method  For : (https://pokeapi.co/api/v2/pokemon)}' 
            onChange={EnterReqBody}>
            </textarea>:''
          }
        </form>
      </>
    );
  
}

export default Form;