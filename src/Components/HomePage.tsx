import React from 'react'

export default function HomePage() {
  return (
    <>
    <div className="grid grid-cols-12 min-h-screen gap-2">
      <div className="col-span-2  bg-gray-300 text-cyan-700 p-4 flex flex-col justify-start gap-1">
        <h2 className="text-2xl font-bold mb-4 border-cyan-700 border-b-2">Inco Print</h2>
        <div className='hover:cursor-pointer hover:bg-neutral-200 font-sans hover:rounded-xl pl-3 boreder border transition-all duration-200'><a href="/info">Info</a></div>
        <div className='hover:cursor-pointer hover:bg-neutral-200 font-sans hover:rounded-xl pl-3 boreder border transition-all duration-200'><a href="/list">Lista Poslova</a></div>
        <div className='hover:cursor-pointer hover:bg-neutral-200 font-sans hover:rounded-xl pl-3 boreder border transition-all duration-200'><a href="/login">Prijava Na Sistem</a></div>
      </div>
      <div className="col-span-10 grid grid-rows-2 gap-4"> {/* Glavni sadržaj sada ima svoj unutrašnji grid od 2 reda */}
        <div className="bg-gray-100 text-black p-4 flex items-center justify-center">
          <h2 className="text-xl font-bold">Glavni Sadržaj - Gornji Deo (02)</h2>
        </div>
        <div className="bg-gray-100 text-black p-4 flex items-center justify-center">
          <h2 className="text-xl font-bold">Glavni Sadržaj - Donji Deo (03)</h2>
        </div>
      </div>
    </div>
    </>
  )
}
