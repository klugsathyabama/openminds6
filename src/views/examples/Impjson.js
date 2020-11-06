//import React,{Component} from 'react';

import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import {AppContext} from './Context';
//import './App.css';
import data from ‘./data.json’;
 
export default class JsonTem extends Component{       
           JsonTem = (event) => { 
            const [data,setData]=useState([]);
            const getData=()=>{
              fetch('/data.json'
              ,{
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
              }
              )
                .then(function(response){
                  console.log(response)
                  return response.json();
                })
                .then(function(myJson) {
                  console.log(myJson);
                  setData(myJson)
                });
            }
            useEffect(()=>{
              getData()
            },[])
            return (
              <div className="App">
               {
                 data && data.length>0 && data.map((item)=><p>{item.about}</p>)
               }
              </div>
            );
          }
        } 
      //    export default JsonTem;
         