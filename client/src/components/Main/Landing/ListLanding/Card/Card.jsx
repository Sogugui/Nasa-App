import React, {useState} from 'react'
import axios from 'axios'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useForm } from "react-hook-form";

const Card = (data) => {
    const landing= data.data
    const { register, handleSubmit } = useForm();

    const deleteLanding= async () => {
        try {
            
            const  response  = await axios.delete(`http://localhost:5000/api/astronomy/landings/delete/${landing.id}`);
            const info= await response.data
            console.log("info:", info);
            console.log("esto es la peticion",response);
            console.log("landing. id que borramos", landing.id);
            data.remove(response);            
        } catch (error) {
            console.log(error)
        }
      }
      const editLanding = async(id)=>{
        try {
          const putLanding = {
            name: id.name,
            id: id.id,
            mass: id.mass,
            recclass: id.recclass,
            year: id.year,
            reclat: id.reclat,
            reclong: id.reclong,
            geolocation: {
              latitude: id.reclat,
              longitude: id.reclong
            }
          };
          console.log(id);
          const res = await axios.put(`http://localhost:5000/api/astronomy/landings/edit/${landing.id}`, putLanding);
          const data = await res.asteroid;
          console.log("esto es data", data);
          
          
        } catch (error) {
          console.log(error);
        }
      }



  return (
    <section>
    <div>
       <h3>{landing.name}</h3>
       <p>ID: {landing.id}</p>
       <p>Nametype: {landing.nametype}</p>
       <p>Reclass: {landing.recclass}</p>
       <p>Mass: {landing.mass}</p>
       <p>Fall: {landing.fall}</p>
       <p>Year: {landing.year}</p>
       <p>Reclat: {landing.reclat}</p>
       <p>Reclong: {landing.reclong}</p>
       <button onClick={deleteLanding}>Delete</button>
       <Popup trigger={<button>Edit</button>} position="bottom left">
        {close => (
          <div>
            <form onSubmit={handleSubmit(editLanding)}>
              <input {...register("name")} placeholder="Name" label="Name"  name="name" required/>
              <input {...register("id")}  placeholder="id" label="ID"  name="id" required/>
              <input {...register("recclass")} placeholder="Class" label="Class"   name="recclass" />
              <input {...register("mass")} placeholder="Mass" label="Weight"  name="mass"/>
              <input {...register("year")} placeholder="Year"  type="date"  name="year" />
              <input {...register("reclat")} placeholder="Latituded" label="Latitude"  name="reclat" required/>
              <input {...register("reclong")} placeholder="Longitude" label="Longitude"  name="reclong" required/>
              <button type="submit">Edit</button>
            </form>
          </div>
        )}
      </Popup>
     </div>
 </section>
  )
}

export default Card