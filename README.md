Desarrollo de aplicación Mern basada en datos registrados por la Nasa respecto a Landings y Neas de la tierra. 
Se usaron Node y Express con MongoDB para el desarrollo de la API REST y para el front se usaron las librerías React y Leaflet asi como Tailwind para los estilos.

Al iniciarse la aplicación, esta se renderiza en la Home, donde se muestra la APOD (astronomic photo of the day) y la información de la misma. Esta APOD proviene de la página oficial de la Nasa

![home nasa](https://user-images.githubusercontent.com/101732872/196069030-0081003f-a177-4cb7-b9a1-b0bab8d55de2.jpg)


Uso de librería Leaflet para implementacón de un mapa que muestra la localización de todos los landings 

![landings nasa](https://user-images.githubusercontent.com/101732872/196068870-2e5a6ea9-6cd7-45ad-9697-584d943994ab.jpg)

Al hacer click en cualquiera de ellos se muestra un pop-up con su información correspondiente

![popup nasa](https://user-images.githubusercontent.com/101732872/196068910-34226255-0b5a-4af7-9c97-95edf903e0fc.jpg)

Dentro de la sección de landings tenemos la opción de acceder a la lista de todos los landings, que se verá asi:

![landingCard](https://user-images.githubusercontent.com/101732872/196069185-f6cbda38-83cb-4983-840d-6751e7416ddb.jpg)

Cada Landing puede ser editado o borrado desde su propia tarjeta

![editLanding](https://user-images.githubusercontent.com/101732872/196069246-5c7e52bd-342b-4c40-b8e6-82ebd42cc476.jpg)

Dentro de la sección Neas, podremos ver la lista de todos los Neas

![neasCard](https://user-images.githubusercontent.com/101732872/196069292-fae3d39f-9954-4395-b4ab-06d42ff833f1.jpg)

Podremos crear tanto Landings como Neas en la sección "Create"

![neasCreate](https://user-images.githubusercontent.com/101732872/196069340-20b562aa-0ab7-4fd8-a412-ecded9604ad0.jpg)







