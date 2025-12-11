import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

interface AdministratorProfile{
    username?: string;
}


export default function AdministratorProfile() {
    const [username, setUsername] = useState<string>("Default Admin");
  return (
    
    <>
        <div className="grid grid-cols-12 min-h-screen ">
            <div className="col-span-2  bg-gray-300 text-cyan-700 p-4 flex flex-col justify-start gap-1">
                <h2 className="text-2xl font-bold mb-4 border-cyan-700 border-b-2">{username}</h2>
                <Link  className='hover:cursor-pointer hover:bg-neutral-200 font-sans hover:rounded-xl pl-3 boreder border  transition-all duration-200' to="/adminprofile/showlistjob">Pogledaj Narudzbine</Link>
                <Link  className='hover:cursor-pointer hover:bg-neutral-200 font-sans hover:rounded-xl pl-3 boreder border  transition-all duration-200' to="/adminprofile/createlistjob">Kreiraj Narudzbine</Link>
                <Link  className='hover:cursor-pointer hover:bg-neutral-200 font-sans hover:rounded-xl pl-3 boreder border  transition-all duration-200' to="/adminprofile/curentstate">Stanje</Link>
                <Link  className='hover:cursor-pointer hover:bg-neutral-200 font-sans hover:rounded-xl pl-3 boreder border  transition-all duration-200' to="/adminprofile/customers">Komitenti</Link>
                <Link  className='hover:cursor-pointer hover:bg-neutral-200 font-sans hover:rounded-xl pl-3 boreder border  transition-all duration-200' to="/adminprofile/services">Servisi</Link>
                <Link  className='hover:cursor-pointer hover:bg-neutral-200 font-sans hover:rounded-xl pl-3 boreder border  transition-all duration-200' to="/adminprofile/administratorspanel">Administracija</Link>
                <Link  className='hover:cursor-pointer hover:bg-neutral-200 font-sans hover:rounded-xl pl-3 boreder border  transition-all duration-200' to="/adminprofile/logout">Odjava Sa Sisterema</Link>
            </div>
            <div className="col-span-10 ">
                <Outlet/>
            </div>
        </div>
        
    </>
  )
}
