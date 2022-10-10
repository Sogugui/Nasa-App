import React, {useState} from 'react'
import axios from 'axios'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useForm } from "react-hook-form";
import gif1 from '../../../../assets/godofdeath.gif'
import gif2 from '../../../../assets/comet.gif'
import gif3 from '../../../../assets/morty.gif'
import gif4 from '../../../../assets/rick.gif'
import gif5 from '../../../../assets/sprinfield.gif'

const CardNeas = (data) => {
    const nea= data.data
    const { register, handleSubmit } = useForm();

    const gifs = [gif1,gif2,gif3,gif4,gif5];
    const allGifs = gifs.sort((a, b) => 0.5 - Math.random());
   

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
    <section className="flex flex-col flex-wrap justify-center content-center  items-center justify-items-center my-3">
    <a href="#" className="flex flex-col items-center justify-items-center mx-3 bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl lg:px-5   hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
     
        <div className="flex flex-col justify-between p-4 leading-normal">
        <img src={allGifs[0]} className="object-cover w-full h-[100%] rounded-t-lg md:h-auto md:w-60  md:rounded-l-lg  md:rounded-b-lg "  alt=""/>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{nea.designation}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Date: {nea.discovery_date}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Period Year: {nea.period_yr}</p>
          <button onClick={deleteNea}  className="w-full my-2 px-2 py-1 bg-gray-500/100 hover:bg-amber-400  text-slate-100 rounded-lg" type="submit">Delete</button>
          <Popup trigger={<button className="w-full px-2 py-1 bg-gray-500/100 hover:bg-amber-400  text-slate-100 rounded-lg">Edit</button>} position="bottom left">
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
 </a>
    {/* <div>
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
     </div> */}
 </section>
  )
}

export default CardNeas