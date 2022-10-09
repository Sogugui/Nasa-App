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
    <div>
    <h2>Create your own landing!</h2>
    <form onSubmit={handleSubmit(createNewLanding)}>
      {/* Para usar register de react hook form hay que llamar igual al name del input y a lo que le pasas por register */}
      <section sx={{ maxWidth: 345 }}>
          <input {...register("name")}  placeholder="Name" label="Name"  name="name" required/>
          <input {...register("id")} placeholder="id" label="ID"  name="id" required/>
          <input {...register("nametype")} placeholder="NameType" label="Weight"  name="nametype" required/>
          <input {...register("recclass")} placeholder="class" label="Class"   name="recclass" required/>
          <input {...register("year")} placeholder="Year" type="date"  name="year" required/>
          <input {...register("mass")} placeholder="Mass" label="Weight"  name="mass" required/>
          <input {...register("fall")} placeholder="Fall" label="Weight"  name="fall" required/>
          <input {...register("reclat")} placeholder="Latitude" label="Latitude"  name="reclat" required/>
          <input {...register("reclong")} placeholder="Longitude" label="Longitude"  name="reclong" required/>
          <button size="small" type="submit">Submit</button>
      </section>
    </form>
  </div>
  )
}

export default Create