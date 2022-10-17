import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CardNeas from './CardNeas/CardNeas'
import './Neas.css'
import {useNavigate} from 'react-router-dom'

const Neas = () => {
  const [allNeas,setAllNeas]= useState("")

useEffect(() => {
  getAllNeas()
}, []) //componentDidUpdate, para actualizar estado del componente actual




const getAllNeas = async () => {
  try {
      
          const { data } = await axios.get(`http://localhost:5000/api/astronomy/neas`);
          // console.log(data);
          //sacamos objeto con la info a pintar
          //data es del destructuring del fetch
          const dataSliced = data.slice(0,300);
          setAllNeas(data) //seteamos el estado con 'data' del fetch 
      
      
  } catch (error) {
      console.log(error)
  }
}

const removeNea = (i) =>{
  const remainingNeas = allNeas.filter((nea,j)=>i!==j)
  setAllNeas(remainingNeas);
}
let navigation = useNavigate();
const changeRoute = () => {
  let path = 'new';
  navigation(path);
}


  return (
    <section className="  bg-pc overflow-scroll bg-cover flex flex-col items-center justify-center animate__animated animate__bounceInRight">
    {/* //cogemos datos del fetch y los pintamos */}
    <h3 className="h3
    }">All Neas!</h3>
    <div style={{margin:'30px'}}>
      <h4>Create your own Nea!</h4>
      <button className="button" onClick={changeRoute} type="submit">Create</button>      
    </div>
    {allNeas.length !== 0 ? allNeas.map((data, i) => <CardNeas data={data} key={i} remove={()=> removeNea(i)}/>)
      : null}
  </section>
  )
}

export default Neas
