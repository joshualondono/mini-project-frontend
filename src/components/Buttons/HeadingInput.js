import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';


export const Buttons = () => { 

    const { properties } = useContext(GlobalContext);
      
    function set() { 
            localStorage.setItem('properties', `QUEUE: ${JSON.stringify(properties)}`);
            localStorage.setItem('save', `HISTORY: ${JSON.stringify(properties)}`);

            const axios = require("axios");
const querystring = require('querystring');

// Twilio (TEST) Credentials found here:
// https://www.twilio.com/console/project/settings
const apiVersion = '2010-04-01';
const accountSid = '';
const authToken = '';

axios.post(`https://api.twilio.com/${apiVersion}/Accounts/${accountSid}/Messages.json`, querystring.stringify({
  Body: `Test messages QUEUE: ${JSON.stringify(properties)}`,
  From: "2314409929",
  To: "7726462662"
}), {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": `Basic ${Buffer.from(accountSid + ':' + authToken).toString('base64')}`
  }
})
  .then(response => {
    const { body, to, status } = response.data;
    console.log("Succesful!", {
      body,
      to,
      status
    });
  })
  .catch(error => {
    console.log("Error", error.response.data);
  })

      }
    //alert(localStorage.getItem('properties'));


return (

<div className="flex-grow text-right px-4 py-2 m-2">
    <Link to="/add">
        <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg>
            <span className="pl-2">Add Property</span>
        </button>
    </Link>
    <button onClick={set} padding-left="10px" className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" class="bi bi-cursor-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
</svg>
            <span className="pl-2">Send List</span>
        </button>
</div>
)
};
