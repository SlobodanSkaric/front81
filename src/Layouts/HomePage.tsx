import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
    <div className="grid grid-cols-12 min-h-screen gap-2">
      <div className="col-span-2  bg-gray-300 text-cyan-700 p-4 flex flex-col justify-start gap-1">
        <h2 className="text-2xl font-bold mb-4 border-cyan-700 border-b-2">Inco Print</h2>
        <Link  className='hover:cursor-pointer hover:bg-neutral-200 font-sans hover:rounded-xl pl-3 boreder border  transition-all duration-200' to="/info">Info</Link>
        <Link  className='hover:cursor-pointer hover:bg-neutral-200 font-sans hover:rounded-xl pl-3 boreder border  transition-all duration-200' to="/joblist">Lista Poslova</Link>
        <Link  className='hover:cursor-pointer hover:bg-neutral-200 font-sans hover:rounded-xl pl-3 boreder border  transition-all duration-200' to="/login">Prijavi Se</Link>
      </div>
      <div className="col-span-10 grid grid-rows-2 gap-4">
        <div className="bg-gray-100 text-black p-4 flex items-center justify-center">
          <h2 className="text-7xl font-bold text-cyan-700 ">Inco Print Portal</h2>
        </div>
        <div className="bg-gray-100 text-black p-4 flex items-center justify-center">
          <h2 className="text-xl font-bold">Image Galery</h2>
        </div>
      </div>
    </div>
    </>
  )
}
