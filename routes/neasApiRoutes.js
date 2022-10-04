const express = require('express')


//Rutas de productos

const neasApiController= require("../controllers/neasApiController");
const neasApiRouter= express.Router();

neasApiRouter.get("/neas",neasApiController.getNeas)
neasApiRouter.post("/neas/create",neasApiController.postNeas)
neasApiRouter.put("/neas/edit",neasApiController.putNeas)
// neasApiRouter.delete("/neas/delete",neasApiController.dropNeas)



module.exports= neasApiRouter