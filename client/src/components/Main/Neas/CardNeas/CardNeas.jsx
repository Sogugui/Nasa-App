import React, {useState} from 'react'
import axios from 'axios'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useForm } from "react-hook-form";

const CardNeas = (data) => {
    const nea= data.data
    const { register, handleSubmit } = useForm();

    const deleteNea= async () => {
        try {
            
            const  response  = await axios.delete(`http://localhost:5000/api/astronomy/neas/delete/${nea.designation}`);
            const info= await response.data
            console.log("info:", info);
            console.log("esto es la peticion",response);
            console.log("landing. id que borramos", nea.designation);
            data.remove(response);
        } catch (error) {
            console.log(error)
        }
      }
      const editNea = async(designation)=>{
        try {
          const putNea = {
            designation: designation.designation,
            discovery_date: designation.discovery_date,
            latitude:designation.reclat,
            orbit_class: designation.orbit_class,            
          };
          console.log(putNea);
          const response = await axios.put(`http://localhost:5000/api/astronomy/neas/edit/${nea.designation}`, putNea);
          console.log(response);
          const data = await response.data;
          console.log("esto es data", data);
          
          
        } catch (error) {
          console.log(error);
        }
      }
  return (
    <section>
    <div>
       <h3>{nea.designation}</h3>
       <p>Discovery Date: {nea.discovery_date}</p>
       <p>Period Year: {nea.period_yr}</p>
       <p>Orbit Class: {nea.orbit_class}</p>

       <button onClick={deleteNea}>Delete</button>
       <Popup trigger={<button>Edit</button>} position="bottom left">
                  {close => (
                      <div>
                          <form onSubmit={handleSubmit(editNea)}>
                              <section sx={{ maxWidth: 345 }}>
                                  <input {...register("designation")} placeholder="Name" label="name" name="designation" required />
                                  <input {...register("discovery_date")} placeholder="Discovery date" label="discovery_date" name="discovery_date" required />
                                  <input {...register("period_yr")} placeholder="Period year" label="Latitude" name="period_yr" required />
                                  <input {...register("orbit_class")} placeholder="Orbit Class" label="orbit_class" name="orbit_class" required />
                                  <button size="small" type="submit">Edit</button>
                              </section>
                          </form>
                      </div>
                  )}
      </Popup>
     </div>
 </section>
  )
}

export default CardNeas