import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'


const Create = () => {
    const { register, handleSubmit } = useForm();
    const [newLanding, setNewLanding]= useState("")

    const createNewLanding = async(newLand) =>{
        const objectLanding = {
          name: newLand.name,
          id: newLand.id,
          nametype: newLand.nametype,
          mass: newLand.mass,
          fall: newLand.fall,
          recclass: newLand.recclass,
          year: newLand.year,
          reclat: newLand.reclat,
          reclong: newLand.reclong,
          geolocation: {
            latitude: newLand.reclat,
            longitude: newLand.reclong
          }
        }
    
        console.log(newLand);
    
        const res = await axios.post("http://localhost:5000/api/astronomy/landings/create",objectLanding);
        const data = res.data;
        console.log(data);
        if (data === "Landing created") {
          setNewLanding(objectLanding);
        }
      }


  return (
    <div className="py-10">
    <h2 className="text-black text-center font-semibold text-xxl underline my-6 transition hover:text-amber-500" >Create your own landing!</h2>
    <div className="flex flex-col items-center justify-items-center py-10">
    <form className={"flex items-center content-around justify-center  flex-col justify-items-center gap-4"} onSubmit={handleSubmit(createNewLanding)}>
          <input {...register("name")}  placeholder="Name" label="Name"  name="name" required/>
          <input {...register("id")} placeholder="Id" label="ID"  name="id" required/>
          <input {...register("nametype")} placeholder="NameType" label="Weight"  name="nametype" required/>
          <input {...register("recclass")} placeholder="Class" label="Class"   name="recclass" required/>
          <input {...register("mass")} placeholder="Mass" label="Weight"  name="mass" required/>
          <input {...register("fall")} placeholder="Fall" label="Weight"  name="fall" required/>
          <input {...register("reclat")} placeholder="Latitude" label="Latitude"  name="reclat" required/>
          <input {...register("reclong")} placeholder="Longitude" label="Longitude"  name="reclong" required/>
          <input {...register("year")} placeholder="Year" type="date"  name="year" required/>
          <button className="w-60 my-2 px-2 py-2 bg-slate-400/80 hover:bg-amber-500 text-slate-100 rounded-lg" size="small" type="submit">Submit</button>
    </form>
    </div>
  </div>
  )
}

export default Create