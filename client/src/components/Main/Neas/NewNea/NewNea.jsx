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
      <h2 className="text-black text-center font-semibold text-xxl my-6 transition hover:text-amber-400">Create your Nea!</h2>
      <div>
        <form onSubmit={handleSubmit(createNewNea)} className={"flex items-center content-around justify-center flex-col justify-items-center gap-4"} >
          <input {...register("designation")} placeholder="Designation" label="designation" name="designation" required />
          <input {...register("id")} placeholder="ID" label="id" name="id" required />
          <input {...register("discovery_date")} placeholder="Discovery date" label="discovery_date" name="discovery_date" required />
          <input {...register("period_yr")} placeholder="Orbit period" label="Orbit period" name="period_yr"/>
          <input {...register("orbit_class")} placeholder="Orbit class" label="Orbit class" name="orbit_class"/>
          <button size="small" className="w-60 my-2 px-2 py-2 bg-gray-500/80 hover:bg-amber-400 text-slate-100 rounded-lg" type="submit">Create</button>
        </form>
      </div>
    </div>

  )
}
export default NewNea