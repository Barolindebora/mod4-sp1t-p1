import React from 'react'

function Tarjeta({ imagen, texto, descripcion }) {
  return (
    <div className='bg-[#3b2f2f]/20 backdrop-blur-md rounded-xl shadow-lg p-6 w-72 text-center  text-white hover:scale-105 transition-transform'>
      <>
        <img
          src={imagen}
          alt="imagen"
          className="w-24 h-24 mx-auto mb-4 rounded-full"
        />
        <h2 className="text-xl font-bold mb-2">{texto}</h2>
        <p className="text-sm">{descripcion}</p>
        
      </>
    </div>
  )
}

export default Tarjeta