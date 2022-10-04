let Nea = require("../schemas/neas")

const getAllNeas = async () => {
    try{
        const getNeas = await Nea.find({},"-_id");
        return getNeas
    }
    catch(err){
        console.error(err);
    }
}

const getOrbit = async (orbit) => {
    try {
        const getOrbitClass = await Nea.find({orbit_class: orbit}, "orbit_class -_id designation period_yr")
        return getOrbitClass

    } catch (error) {
        console.error(error);
    }
}

const getYearFrom= async(from)=>{
    try{
        
        const getYearFrom= await Nea.find({year:{$gte:from}},"designation discovery_date period_yr");
        return getYearFrom
       
    }
    catch(err){console.log(err);}
}

const getYearTo= async(to)=>{
    try{
        const getYearTo= await Nea.find({year:{$lte:to}},"designation discovery_date period_yr");
        return getYearTo
    }
    catch(err){console.log(err);}
}
const getYear= async(from,to)=>{
    try{
        const getYear= await Nea.find({year:{$gte:from,$lte:to}},"designation discovery_date period_yr");
        return getYear
    }
    catch(err){console.log(err);}
}

const getDate = async(especificDate)=>{
    try{
        const getespecificDate= await Nea.find({discovery_date:{$in:especificDate}}, "designation discovery_date period_yr");
        return getespecificDate
    }
    catch(err){console.log(err);}
}
const createNeas= async(newNea)=> {

    try{
        const createNewNea= new Nea (newNea)
        let res= await createNewNea.save()
        console.log(res);
        return {res}
    }
    catch(err){console.log(err);}
}

const updateNea= async(updateNea)=>{
    try{
        const updateNea= {
            "designation": Nea.designation,
            "discovery_date": Nea.discovery_date,
            "h_mag": Nea.h_mag,
            "moid_au": Nea.moid_au,
            "q_au_1": Nea.q_au_1,
            "q_au_2": Nea.q_au_2,
            "period_yr": Nea.period_yr,
            "i_deg": Nea.i_deg,
            "pha": Nea.pha,
            "orbit_class": Nea.orbit_class
          }
        const oldNea= await Nea.findByIdAndUpdate({designation:Nea.designation},updateNea)
        oldNea.overwrite(updateNea)//Se sobreescribe el viejo por el nuevo
        console.log("Este es el Nea viejo despues de ser actualizado",oldNea);
        await oldNea.save()//se guarda en la bbdd
        return{
            oldNea
        }
        }
    
    catch(err){console.log(err);}
}


module.exports ={
    getAllNeas,
    getOrbit,
    getYearFrom,
    getYearTo,
    getYear,
    getDate,
    createNeas,
    updateNea
}
