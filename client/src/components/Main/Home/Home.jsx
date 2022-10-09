import React, {useState,useEffect} from 'react'
import axios from 'axios'


const Home  = () => {

const [apod,setApod]= useState("")

useEffect(()=>{
  getAPOD()
},[])

const getAPOD = async ()=> {
    
  try{

    const APIKEY=process.env.REACT_APP_APIKEY
    const {data} = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}`);
    console.log(data);
    const newAPOD= { 
      title: data.title,
      url: data.hdurl,
      date: data.date,
      explanation: data.explanation
    }

    setApod(newAPOD)

  }catch(error){
    console.log(error);
  }
  
}
  return (
    (apod.length!==0 
      ?<div>
      <p>{apod.title}</p>
      <p>{apod.explanation}</p>
      <p>{apod.date}</p>
      <img width={'1000px'} src={apod.url}/>
    </div>
      :"")
    
  )
}

export default Home
