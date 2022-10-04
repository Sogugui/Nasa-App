let Landing = require("../schemas/landings")


const getAllLandings = async () => {
    try{
        const getLandings = await Landing.find({},"-_id");
        return getLandings
    }
    catch(err){
        console.error(err);
    }
}
const getLandingsById = async (id) => {
    try{
        const getLandingsById = await Landing.find({id:{$in:id}},"-_id year name ");
        return getLandingsById
    }
    catch(err){
        console.error(err);
    }
}

const getMinimumMass = async (minimumMass) => {
    try{
        const getMinimumLandings = await Landing.find({mass:{$gt:minimumMass}}, "name mass");
        return getMinimumLandings
    }
    catch(err){
        console.error(err);
    }
}

const getMass = async(especificMass)=>{
    try{
        const getespecificMass= await Landing.find({mass:{$in:especificMass}}, "name mass id year");
        return getespecificMass
    }
    catch(err){console.log(err);}
}

const getClass = async(especificClass)=>{
    try{
        const getespecificClass= await Landing.find({recclass:{$in:especificClass}},"name recclass");
        return getespecificClass
    }
    catch(err){console.log(err);}
}
const getYearFrom= async(from)=>{
    try{
        
        const getYearFrom= await Landing.find({year:{$gte:from}},"name year mass id3");
        return getYearFrom
       
    }
    catch(err){console.log(err);}
}

const getYearTo= async(to)=>{
    try{
        const getYearTo= await Landing.find({year:{$lte:to}},"name year mass");
        return getYearTo
    }
    catch(err){console.log(err);}
}
const getYear= async(from,to)=>{
    try{
        const getYear= await Landing.find({year:{$gt:from,$lt:to}},"name mass year");
        return getYear
    }
    catch(err){console.log(err);}
}

///////////  POST /////////////////////
const createNewLanding= async(newLanding)=> {

    try{
        const createNewLanding= new Landing (newLanding)
        let res= await createNewLanding.save()
        console.log(res);
        return {res}
    }
    catch(err){console.log(err);}
}

///////PUT/////////////////
const updateLanding= async(updateLanding)=>{
    try{
        const updateLanding= {
                "name": Landing.name,
                "id":  Landing.id,
                "nametype":  Landing.nametype,
                "recclass":  Landing.recclass,
                "mass": Landing.mass,
                "fall":  Landing.fall,
                "year":  Landing.year,
                "reclat":  Landing.reclat,
                "reclong":  Landing.reclong,
                "geolocation":  Landing.geolocation
              }
        const oldLanding= await Landing.findByIdAndUpdate({id:Landing.id},updateLanding)
        oldLanding.overwrite(updateLanding)//Se sobreescribe oldLanding por el nuevo esquema(updateLanding)
        console.log("Este es el landing viejo despues de ser actualizado",oldLanding);
        await oldLanding.save()//se guarda en la bbdd
        return{
            oldLanding
        }
        }
    
    catch(err){console.log(err);}
}

///////////////////DELETE///////////////////////
const dropLandings= async(deleteLanding)=> {

    try{
        const deleteLandings = async (deleteLanding) => {
            try {
                let response = await Landing.deleteOne({id:Landing.id});
                console.log("Landing deleted",response);
                return `Landing ${Landing.name} ${Landing.id} deleted.`
        
            } catch (error) {
                console.log(`ERROR:${error}`)
            }
        }
    }
    catch(err){console.log(err);}
}


module.exports={
    getAllLandings,
    getLandingsById,
    getMinimumMass,
    getMass, 
    getClass,
    getYearFrom,
    getYearTo,
    getYear,
    createNewLanding,
    updateLanding,
    dropLandings

}