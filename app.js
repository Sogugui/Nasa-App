const express = require('express')
require('./utils/dbMongo.js');
//Rutas de la Api

 const landingsApiRoutes = require('./routes/landingsApiRoutes');
 const neasApiRoutes= require('./routes/neasApiRoutes')





//Middleware error
// const manage404= require('./middlewares/error404');
// const checkApiKey = require('./middlewares/auth_API_KEY');
// const entries = require('./models/entry');

const app = express()
const port = 3000


// Permite leer el body recibido en una petición
app.use(express.json());

//Middleware de acceso a TODAS las rutas
// app.use(checkApiKey);

//Middleware de acceso a las rutas de products
// app.use("/products",checkApiKey,productsRoutes)

//Router de productos. Esto es el prefijo para todas las rutas. Despues de esta ruta nos fijamos en productsRoutes


app.use("/api/astronomy",landingsApiRoutes)
app.use("/api/astronomy",neasApiRoutes)






// app.use(manage404)// tiene que estar ultimo para que analice todas las rutas anteriores y si no es ninguna, que use la de middleware

app.listen(port, () => {
    console.log(`Mi servidor funciona en el puerto ${port}`)
    console.log(`Mi servidor funciona en el puerto http://localhost:${port}`)
    
})
