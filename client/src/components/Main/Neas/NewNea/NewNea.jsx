import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'


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
    <div>
    <h2>Create your own Nea!</h2>
    <form onSubmit={handleSubmit(createNewNea)}>
      {/* Para usar register de react hook form hay que llamar igual al name del input y a lo que le pasas por register */}
      <section sx={{ maxWidth: 345 }}>
          <input {...register("designation")}  placeholder="Name" label="name"  name="designation" required/>
          <input {...register("discovery_date")}  placeholder="Discovery date" label="discovery_date"  name="discovery_date" required/>
          <input {...register("period_yr")} placeholder="Period Year" label="Latitude"  name="period_yr" required/>
          <input {...register("orbit_class")} placeholder="Orbit Class" label="orbit_class"  name="orbit_class" required/>
          <button size="small" type="submit">Submit</button>
      </section>
    </form>
  </div>

  )
}
export default NewNea