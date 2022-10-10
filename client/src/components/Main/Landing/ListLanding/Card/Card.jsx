import React, {useState} from 'react'
import axios from 'axios'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useForm } from "react-hook-form";
import gif1 from '../../../../../assets/godofdeath.gif'
import gif2 from '../../../../../assets/comet.gif'
import gif3 from '../../../../../assets/morty.gif'
import gif4 from '../../../../../assets/rick.gif'
import gif5 from '../../../../../assets/sprinfield.gif'

const Card = (data) => {
    const landing= data.data
    const [deleted,setDeleted]= useState("")
    const { register, handleSubmit } = useForm();

    const gifs = [gif1,gif2,gif3,gif4,gif5];
    const allGifs = gifs.sort((a, b) => 0.5 - Math.random());
   

    const deleteLanding= async () => {
        try {
            
            const  response  = await axios.delete(`http://localhost:5000/api/astronomy/landings/delete/${landing.id}`);
            const info= await response.data
            console.log("info:", info);
            console.log("esto es la peticion",response);
            console.log("landing. id que borramos", landing.id);
            data.remove(response);
            
            setDeleted();
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
          console.log(putLanding);
          const response = await axios.put(`http://localhost:5000/api/astronomy/landings/update/${landing.id}`, putLanding);
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
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{landing.name}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Id: {landing.id}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Nametype:{landing.nametype}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Class: {landing.recclass}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Mass: {landing.mass}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Fall: {landing.fall}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Year: {landing.year}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Reclat: {landing.reclat}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Reclong: {landing.reclong}</p>
            <button onClick={deleteLanding}  className="w-full my-2 px-2 py-1 bg-gray-500/100 hover:bg-amber-400  text-slate-100 rounded-lg" type="submit">Delete</button>
            <Popup trigger={<button className="w-full px-2 py-1 bg-gray-500/100 hover:bg-amber-400  text-slate-100 rounded-lg">Edit</button>} position="bottom left">
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
   </a>
   </section>
  )
}

export default Card