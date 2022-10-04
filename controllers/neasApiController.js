const Neas = require('../models/queryNeas');

const getNeas = async(req,res) => {
    let orbitClass = req.query.class
    let dateParam= req.query.date
    if(orbitClass){
        try {
            let nea =  await Neas.getOrbit(orbitClass);// lo que esta entre comillas es para filtrar lo que quiero que me muestre
            res.status(200).json({nea});
         
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json( {"message":"Nea por orbit class no encontrado"}); // lo ponemos aqui a esto para que si falla el fetch no me de timeout y me pinte el array vacio
           //el .status(200) es para que me devuelva ese numero de codigo de que todo ha ido bien (200) o error(404)
        }
    }
    else if(req.query.from){
        try {
            let yearFrom =  await Neas.getYearFrom(req.query.from);// lo que esta entre comillas es para filtrar lo que quiero que me muestre
            res.status(200).json({yearFrom});
         
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json( {"message":"Nea por yearFrom especificada no encontrado"});
        } 
    }else if(req.query.to){
        try {
            let yearTo =  await Neas.getYearTo(req.query.to);// lo que esta entre comillas es para filtrar lo que quiero que me muestre
            res.status(200).json({yearTo});
         
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json( {"message":"Nea por yearTo especificada no encontrado"});
        } 
    }else if(req.query.from&&req.query.to){
        try {
            let year =  await Neas.getYear(req.query.from,req.query.to);// lo que esta entre comillas es para filtrar lo que quiero que me muestre
            res.status(200).json({year});
         
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json( {"message":"Nea por yearTo especificada no encontrado"});
        } 
    }else if (dateParam) {
        try {
            let neasDateParam = await Neas.getDate(dateParam)
            res.status(200).json(neasDateParam)

        } catch (error) {
            console.log(`ERROR: ${error.stack}`)
            res.status(404).json({"message": "Neas not found!"});
        }
    }
}

const postNeas = async (req, res) => {
    try {

        let postNea = await Neas.createNeas(req.body);
        res.status(200).json(postNea)   
        console.log("A new Nea was created", req.body);
        
    } catch (error) {
        console.log(`ERROR: ${error.stack}`)
        res.status(404).json({ "message": "Nea not created" });
    }
}

const putNeas= async (req, res) => {
    try {
        let editNea =  await Neas.updateNea(req.body);// lo que esta entre comillas es para filtrar lo que quiero que me muestre
        res.status(200).json(editNea);
        console.log("Nea modificado con exito", req.body);
     
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(404).json( {"message":"Nea no modificado"});
    } 
}
module.exports={
    getNeas,
    postNeas,
    putNeas
}