import React, { useEffect, useContext,useState, } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
const Landing = () => {
    const [ landing, setLanding ] = useState([])
    const [filteredLandings, setFilteredLandings] = useState("");
    const [menuItem, setMenuItem] = useState(null);
    const [input, setInput] =useState(null);

    const asteroidGif = new L.Icon({
        iconUrl: require('../../../assets/tenor.gif'),
        iconSize: new L.Point(25, 25),
    })
    const asteroidGif2 = new L.Icon({
        iconUrl: require('../../../assets/land.gif'),
        iconSize: new L.Point(25, 25),
    })


    useEffect(() => {
        getLandings()
    }, []) //componentDidUpdate, para actualizar estado del componente actual

    useEffect(() => {
        getLandingsFiltered()
    },
    [input,menuItem]) //componentDidUpdate, para actualizar estado del componente actual


    const getLandings = async () => {
        try {
            
                const { data } = await axios.get(`http://localhost:5000/api/astronomy/landings`);
                // console.log(data);
                //sacamos objeto con la info a pintar
                //data es del destructuring del fetch
                const dataSliced = data.slice(0,300);
                setLanding(data) //seteamos el estado con 'data' del fetch 
            
            
        } catch (error) {
            console.log(error)
        }
    }

    const getLandingsFiltered  = async () => {
        try {
            
                const { data } = await axios.get(`http://localhost:5000/api/astronomy/landings/${menuItem}/${input}`);
                // console.log(data);
                //sacamos objeto con la info a pintar
                //data es del destructuring del fetch
                setLanding(data) //seteamos el estado con 'data' del fetch 
                setFilteredLandings(data)
            
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const menu = e.target.menu.value;
        const input = e.target.input.value;
        const mayusInput = input.toUpperCase();
        setInput(mayusInput);
        setMenuItem(menu);
        
        setFilteredLandings(filteredLandings)
        
        e.target.input.value="";
    
      }

   
  let navigate = useNavigate();
  const handleClick = () =>{
    let path = `list`; 
    navigate(path);
  }
  
  const routeChange = () =>{ 
    let path = `create`; 
    navigate(path);
  }

      if (landing){
    return (
        <>
        <div className="menu">
        <h5>Search landings by class or weight!</h5>
          <form onSubmit={handleSubmit} className="formLanding">
            <select name="menu" >
                <option value="mass">Weight</option>
                <option value="class">Class</option>
            </select>
            <input id="outlined-basic" label={menuItem}  name="input"/>
            <button type="submit">Submit</button>
          </form>
          <div style={{margin:'30px'}}>
                        <h4>Check all landings</h4>
                        <button variant="outlined" onClick={handleClick}>Landings</button>
                    </div>
                    <div style={{margin:'30px'}}>
                        <h4>Create your own landing!</h4>
                        <button onClick={routeChange} variant="outlined" type="submit">Create</button>
                    </div>
        </div>
            <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={true} style={{ width: '100%', height: '500px' }}>
                <TileLayer
                    attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
                    url="https://api.mapbox.com/styles/v1/mogar99/cl8w4411n000j15prntrktrgw/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibW9nYXI5OSIsImEiOiJja2Z3ZDJoaGQxOXFqMzN0OHBhajdjMXBxIn0.1-1aPslRK9n1m1QAS20q3g"
                />mapbox://styles/mapbox/dark-v10
                {landing.map((asteroid, i) => asteroid.geolocation && asteroid.reclat && asteroid.reclong ? (
                    <Marker position={[String(asteroid.reclat), String(asteroid.reclong)]} key={i} icon={asteroidGif} >
                        <Popup>
                            <ul>
                                <li><h3>{asteroid.name}</h3></li>
                                <li><p>ID: {asteroid.id}</p></li>
                                <li><p>Nametype: {asteroid.nametype}</p></li>
                                <li><p>Reclass: {asteroid.recclass}</p></li>
                                <li><p>Mass: {asteroid.mass}</p></li>
                                <li><p>Year: {asteroid.year}</p></li>
                            </ul>
                        </Popup>
                    </Marker>) : null)}
            </MapContainer>
        </>
    )
}
else if(filteredLandings){
    console.log(filteredLandings);
    return ( <>
        <div className="menu">
        <h5>Search landings by class or weight!</h5>
          <form onSubmit={handleSubmit} className="formLanding">
            <select name="menu" >
                <option value="mass">Weight</option>
                <option value="class">Class</option>
            </select>
            <input id="outlined-basic" label={menuItem} variant="outlined" name="input"/>
            <button variant="outlined" type="submit">Submit</button>
          </form>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
        <div style={{margin:'30px'}}>
                        <h4>Check all landings</h4>
                        <button variant="outlined" onClick={handleClick}>Landings</button>
                    </div>
                    <div style={{margin:'30px'}}>
                        <h4>Create your own landing!</h4>
                        <button onClick={routeChange} variant="outlined" type="submit">Create</button>
                    </div>
                </div>
            <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={true} style={{ width: '100%', height: '500px' }}>
                <TileLayer
                    attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
                    url="https://api.mapbox.com/styles/v1/mogar99/cl8w4411n000j15prntrktrgw/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibW9nYXI5OSIsImEiOiJja2Z3ZDJoaGQxOXFqMzN0OHBhajdjMXBxIn0.1-1aPslRK9n1m1QAS20q3g"
                />
                {filteredLandings.map((asteroid, j) => asteroid.geolocation && asteroid.reclat && asteroid.reclong ? (
                    <Marker position={[String(asteroid.reclat), String(asteroid.reclong)]} key={j} icon={asteroidGif2} >
                        <Popup>
                            <ul>
                                <li><h3>{asteroid.name}</h3></li>
                                <li><p>ID: {asteroid.id}</p></li>
                                <li><p>Nametype: {asteroid.nametype}</p></li>
                                <li><p>Reclass: {asteroid.recclass}</p></li>
                                <li><p>Mass: {asteroid.mass}</p></li>
                                <li><p>Year: {asteroid.year}</p></li>
                            </ul>
                        </Popup>
                    </Marker>) : null)}
            </MapContainer>
        </>
    )

}
}
export default Landing