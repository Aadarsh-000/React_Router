import { useEffect } from 'react'
import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

  const useEffectApi = () =>{
    const getNews= async () => {
      const response = fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-01-24&sortBy=publishedAt&apiKey=3257997f40d141a2a969116da17c3240');
      const data = (await response).json();
      console.log(data);
    }

    useEffectApi(()=>{
      getNews();
    })
  }


  const navigate = useNavigate();
  const gotoContact = () =>{
    navigate("/contact");
  };

  const goBack = () =>{
    navigate(-1);
  }
  
  return (
    <div>
       <Header/>
        <h1>Welcome to home page.</h1>
        <button onClick={()=>{gotoContact()}}>Go to Contact</button>
        <button onClick={()=>{goBack()}}>Go Back</button>
        <Outlet/>
    </div>
  )
  }