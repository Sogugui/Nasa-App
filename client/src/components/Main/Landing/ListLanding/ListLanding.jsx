import React , {useEffect,useState,useContext}from 'react'
import axios from 'axios'
import Card from './Card/Card'

const ListLanding = () => {
const [allLandings,setAllLandings]= useState("")

useEffect(() => {
  getAllLandings()
}, []) //componentDidUpdate, para actualizar estado del componente actual




const getAllLandings = async () => {
  try {
      
          const { data } = await axios.get(`http://localhost:5000/api/astronomy/landings`);
          // console.log(data);
          //sacamos objeto con la info a pintar
          //data es del destructuring del fetch
          const dataSliced = data.slice(0,300);
          setAllLandings(data) //seteamos el estado con 'data' del fetch 
      
      
  } catch (error) {
      console.log(error)
  }
}


const removeLanding = (i) =>{
  const remainingLandings = allLandings.filter((landing,j)=>i!==j)
  setAllLandings(remainingLandings);
}



// //búsqueda por nombre 
// function handleName() {
//   const orderNames = [...dataLands].sort((a, b) => {
//     return a.name > b.name ? 1 : -1 })
//     setdataLands(orderNames);
// }
// //búsqueda por masa
// function handleMass() {
//   const orderMass = [...dataLands].sort((a,b) => {
//     return a.mass > b.mass ? 1: -1 })
//   setdataLands(orderMass);
// }
// //búsqueda por año
// function handleYear() {
//   const orderYear = [...dataLands].sort((a,b)=> {
//     return a.year > b.year ? 1 : -1 })
//   setdataLands(orderYear);
// }

  return   <section>
      {/* //cogemos datos del fetch y los pintamos */}
      <h3>HERE THEY ARE!</h3>
      {allLandings.length !== 0 ? allLandings.map((data, i) => <Card data={data} key={i} remove={()=> removeLanding(i)}/>)
        : null}
    </section>

    
  
    }

export default ListLanding