   
import React from 'react';
import { useState, useEffect } from 'react';
import './app.scss';
import axios from 'axios';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {

  const [data, setdata] = useState(null);
  const [requestParams, setrequestParams] = useState({});



  const HandeLAPI = (reqDats) => {
    // mock output
    setrequestParams(reqDats);
  }

  useEffect(() => {
    async function getApiData () {
      console.log(requestParams)
      if(requestParams.url){
const{url,method,reqBody}=requestParams
   
       const data = await axios.get(url);
       console.log(data.data);
  setdata(data)
      }
      }
    getApiData ();
  }, [requestParams])


  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form HandeLAPI={HandeLAPI} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );

}

export default App;