
import React from 'react';
import { useState, useEffect, useReducer } from 'react';
import './app.scss';
import axios from 'axios';

//import components
import History from './components/History';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

//  initialState to reducer
const initialState = {
  history: []
}
//function reducer 
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_New_request':
      return {
        ...state,
        history: [...state.history, action.payload]


      };
    default:
      return state;
  }

}



function App() {
  // use Reducer to store request API 
  const [state, dispatch] = useReducer(reducer, initialState)
  //use usestate
  const [data, setdata] = useState(null);
  const [requestParams, setrequestParams] = useState({});

  //function to store info to history array
  function addNewHistory(info) {


    return {
      type: 'ADD_New_request',
      payload: { info }
    }

  }

  //handelAPI
  const HandeLAPI = (reqDats) => {

    setrequestParams(reqDats);
  }

  useEffect(() => {
    async function getApiData() {
      console.log(requestParams)
      if (requestParams.url) {
        const { url, method, reqBody } = requestParams

        const data = await axios.get(url);
        console.log(data.data);
        setdata(data)
        //dispatch to store requestParams inside history array
        dispatch(addNewHistory(requestParams));
      }
    }
    getApiData();
  }, [requestParams])


  return (

    <React.Fragment>
      <Header />
      {console.log('historyData', state.history)}
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
     
      <Form HandeLAPI={HandeLAPI} />
      <History addNewHistory={state.history} />
      <Results data={data} />

      <Footer />
    </React.Fragment>
  );

}

export default App;