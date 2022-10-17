import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'
import './newNea.css'


const NewNea = () => {
    const { register, handleSubmit } = useForm();
    const [newNeas, setNewNeas]= useState("")

    const createNewNea = async(newNea) =>{
        const objectNea= {
          designation: newNea.designation,
          discovery_date: newNea.discovery_date,
          period_yr: newNea.period_yr,
          orbit_class: newNea.orbit_class
       
        }
    
        console.log(newNea);
    
        const res = await axios.post("http://localhost:5000/api/astronomy/neas/create",objectNea);
        const data = res.data;
        console.log(data);
        if (data === "Nea created") {
          setNewNeas(objectNea);
        }
      }


  return (
    <div className='div'>
      <h2 className="h2">Create your Nea!</h2>
      <div>
        <form onSubmit={handleSubmit(createNewNea)} className="form" >
          <input {...register("designation")} placeholder="Designation" label="designation" name="designation" required />
          <input {...register("id")} placeholder="ID" label="id" name="id" required />
          <input {...register("discovery_date")} placeholder="Discovery date" label="discovery_date" name="discovery_date" required />
          <input {...register("period_yr")} placeholder="Orbit period" label="Orbit period" name="period_yr"/>
          <input {...register("orbit_class")} placeholder="Orbit class" label="Orbit class" name="orbit_class"/>
          <button size="small" className="btn" type="submit">Create</button>
        </form>
      </div>
    </div>

  )
}
export default NewNea