const Landing = require("../models/queryLandings");
const getLandings = async (req, res) => {
  let minimum_mass = req.query.minimum_mass;
  if (minimum_mass) {
    try {
      let landing = await Landing.getMinimumMass(minimum_mass); // lo que esta entre comillas es para filtrar lo que quiero que me muestre
      res.status(200).json({ landing });
    } catch (error) {
      console.log(`ERROR: ${error.stack}`);
      res
        .status(404)
        .json({ message: "landing por minimum mass no encontrado" }); // lo ponemos aqui a esto para que si falla el fetch no me de timeout y me pinte el array vacio
      //el .status(200) es para que me devuelva ese numero de codigo de que todo ha ido bien (200) o error(404)
    }
  } else if (req.query.id) {
    try {
      let LandingId = await Landing.getLandingsById(req.query.id); // lo que esta entre comillas es para filtrar lo que quiero que me muestre
      res.status(200).json({ LandingId });
    } catch (error) {
      console.log(`ERROR: ${error.stack}`);
      res
        .status(404)
        .json({ message: "landing por masa especificada no encontrado" });
    }
  } else if (req.query.mass) {
    try {
      let especificMass = await Landing.getMass(req.query.mass); // lo que esta entre comillas es para filtrar lo que quiero que me muestre
      res.status(200).json({ especificMass });
    } catch (error) {
      console.log(`ERROR: ${error.stack}`);
      res
        .status(404)
        .json({ message: "landing por masa especificada no encontrado" });
    }
  } else if (req.query.recclass) {
    try {
      let especificClass = await Landing.getClass(req.query.recclass); // lo que esta entre comillas es para filtrar lo que quiero que me muestre
      res.status(200).json({ especificClass });
    } catch (error) {
      console.log(`ERROR: ${error.stack}`);
      res
        .status(404)
        .json({ message: "landing por clase especificada no encontrado" });
    }
  } else if (req.query.from) {
    try {
      let yearFrom = await Landing.getYearFrom(req.query.from); // lo que esta entre comillas es para filtrar lo que quiero que me muestre
      res.status(200).json({ yearFrom });
    } catch (error) {
      console.log(`ERROR: ${error.stack}`);
      res
        .status(404)
        .json({ message: "landing por yearFrom especificada no encontrado" });
    }
  } else if (req.query.to) {
    try {
      let yearTo = await Landing.getYearTo(req.query.to); // lo que esta entre comillas es para filtrar lo que quiero que me muestre
      res.status(200).json({ yearTo });
    } catch (error) {
      console.log(`ERROR: ${error.stack}`);
      res
        .status(404)
        .json({ message: "landing por yearTo especificada no encontrado" });
    }
  } else if (req.query.from && req.query.to) {
    try {
      let year = await Landing.getYear(req.query.from, req.query.to); // lo que esta entre comillas es para filtrar lo que quiero que me muestre
      res.status(200).json({ year });
    } catch (error) {
      console.log(`ERROR: ${error.stack}`);
      res
        .status(404)
        .json({ message: "landing por yearTo especificada no encontrado" });
    }
  } else {
    console.log("aqui!");
    let mass = await Landing.getMass();
    res.status(200).json({ mass });
  }
};

const postLandings = async (req, res) => {
  try {
    let newLanding = await Landing.createNewLanding(req.body); // lo que esta entre comillas es para filtrar lo que quiero que me muestre
    res.status(200).json(newLanding);
    console.log("New landing creado", req.body);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(404).json({ message: "New landing no creado" });
  }
};

const putLandings = async (req, res) => {
  try {
    let editLanding = await Landing.updateLanding(req.body); // lo que esta entre comillas es para filtrar lo que quiero que me muestre
    res.status(200).json(editLanding);
    console.log("Landing modificado con exito", req.body);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(404).json({ message: "Landing no modificado" });
  }
};

const dropLandings = async (req, res) => {
  try {
    let dropLanding = await Landing.dropLandings(req.body); // lo que esta entre comillas es para filtrar lo que quiero que me muestre
    res.status(200).json(dropLanding);
    console.log("Landing eliminado con exito", req.body);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(404).json({ message: "Landing no eliminado" });
  }
};

module.exports = {
  getLandings,
  postLandings,
  putLandings,
  dropLandings,
};
