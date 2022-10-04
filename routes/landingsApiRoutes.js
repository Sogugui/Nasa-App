const express = require('express')


//Rutas de productos

const landingsApiController= require("../controllers/landingsApiController");
const landingsApiRouter= express.Router();

landingsApiRouter.get("/landings",landingsApiController.getLandings)
landingsApiRouter.post("/create",landingsApiController.postLandings)
landingsApiRouter.put("/edit",landingsApiController.putLandings)
landingsApiRouter.delete("/delete",landingsApiController.dropLandings)



module.exports= landingsApiRouter