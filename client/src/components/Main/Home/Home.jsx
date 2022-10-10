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
    (apod.length !== 0 ?
      <section className="bg-white dark:bg-gray-900 py-8">
          <div className="container px-6 py-10 mx-auto">
              <div className="text-center">
                  <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Astronomy Picture of the day</h1>
                  <p className="max-w-lg mx-auto mt-4 text-gray-500 my-5">
                      Take a look to the Nasa's APOD!
                  </p>
              </div>
              <div>
                  <img className="relative z-10 object-cover w-full rounded-md h-100" src={apod.url} alt={apod.title} />
                  <div className="relative z-20 max-w-lg p-6  mx-auto -mt-20 dark:bg-gray-900 sm:flex-row w-full h-16 border-t-2 gap-2 border-white">
                    <a href="#" className="font-semibold text-slate-50 hover:bg-gray-900 dark:text-white md:text-xl">
                    {apod.title}
                    </a>

                    <p className="mt-3 text-sm text-grey-50 font-semibold hover:bg-gray-500 dark:text-gray-300 md:text-sm">
                    {apod.explanation}
                    </p>

                    <p className="mt-3 text-sm text-blue-500">{apod.date}</p>
                </div>
              </div>
          </div>
      </section > : null))
}

export default Home

// (apod.length!==0 
//   ?<div>
//   <p>{apod.title}</p>
//   <p>{apod.explanation}</p>
//   <p>{apod.date}</p>
//   <img width={'1000px'} src={apod.url}/>
// </div>
//   :"")