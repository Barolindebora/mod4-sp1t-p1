


import loloNuez from '../assets/loloNuez.png';
import nuecesia from '../assets/nuecesia.jpg';
import nuecesSueltas from '../assets/nuecesSueltas.jpg';
import confitadas from '../assets/confitadas.jpg';
import Tarjeta from './Tarjeta';




function Body() {
  const tarjetas=[
    {id: 1, imagen: nuecesSueltas, texto: 'Nueces por KG', descripcion: 'Paquetes por 1/4KG - 1/2KG - 1KG'},
    {id: 2, imagen: confitadas, texto: 'Nueces Confitadas', descripcion: 'Deliciosas nueces rellenas con dulce de leche cubiertas de azúcar.'},
    {id: 3, imagen: loloNuez, texto: 'Ordenar', descripcion: 'Quiero mis nueces!!'}
  ]
  return (
    <body>
      <div className="w-full h-screen relative overflow-hidden">
        {/* Fondo escritorio */}
        <div
          className="hidden md:block min-h-screen w-screen bg-no-repeat bg-cover object-contain bg-center "
          style={{ backgroundImage: `url(${nuecesia})` }}
        />
        {/* Fondo mobile */}
        <div
          className="block md:hidden w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${loloNuez})` }}
        />
        {/* Tarjetas */}
        <div className="absolute inset-0 mt-10  flex flex-col md:flex-row justify-center items-center gap-6 p-6">
          {tarjetas.map((tarjeta) => (
            <Tarjeta
              key={tarjeta.id}
              imagen={tarjeta.imagen}
              texto={tarjeta.texto}
              descripcion={tarjeta.descripcion}
            />
          ))}
        </div>
      </div>
    </body>
  );
}

export default Body;