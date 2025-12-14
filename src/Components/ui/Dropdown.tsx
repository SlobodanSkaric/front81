import { useEffect, useRef, useState } from "react";

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [firmName, setFirmName] = useState(true);   
    const [orderNumber, setOrderNumber] = useState(false);   
    const [status, setStatus] = useState(false);   
    const [date, setDate] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);

    const toogleDropdown = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handeleCliskOutside = (event: MouseEvent) =>{
                if(menuRef.current && !menuRef.current.contains(event.target as Node)){
                    setIsOpen(false);
                    setFirmName(true);
                    setOrderNumber(false);
                    setStatus(false);
                    setDate(false);
                }
             }

            document.addEventListener("mousedown", handeleCliskOutside);

            return () => {
                document.removeEventListener("mousedown", handeleCliskOutside)
            }
           
       
    }, []);

    const serchDefinition = (data: any) => {
        if(data === "f-name"){
            setFirmName(true);
            setOrderNumber(false);
            setStatus(false);
            setDate(false);
        }
        if(data === "f-number"){
            setFirmName(false);
            setOrderNumber(true);
            setStatus(false);
            setDate(false);
        }
        if(data === "f-status"){
            setFirmName(false);
            setOrderNumber(false);
            setStatus(true);
            setDate(false);
        }
        if(data === "f-date"){
            setFirmName(false);
            setOrderNumber(false);
            setStatus(false);
            setDate(true);
        }
    }
  return (
    <div className="relative  inline-block  text-left w-full" ref={menuRef}>
        <div className="flex w-full">
            <div>
                <button type="button" 
                        onClick={toogleDropdown} 
                        className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 my-2 bg-cyan-700 text-gray-100 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-cyan-500 text-sm font-medium">
                            Pretraga
                </button>
            </div>
            <div className="w-full mr-3 base-">
                <form action="">
                    {firmName &&
                        <input type="text" className="my-2 mx-3 py-1.5 border px-3 border-cyan-700 rounded-xl w-full" placeholder="Pretraga prema nazivu firme"/>
                    }
                    {orderNumber &&
                        <input type="text" className="my-2 mx-3 py-1.5 px-3 border border-cyan-700 rounded-xl w-full" placeholder="Pretraga prema broju narudzbenice"/>
                    }
                    {status &&
                        <input type="text" className="my-2 mx-3 py-1.5 px-3 border border-cyan-700 rounded-xl w-full" placeholder="Pretraga prema statusu"/>
                    }
                    {date &&
                        <input type="text" className="my-2 mx-3 py-1.5 px-3 border border-cyan-700 rounded-xl w-full" placeholder="Pretragaprema datumu"/>
                    }
                </form>            
            </div>
        </div>
        {isOpen && (
            <div 
          className="origin-top-right absolute left-0  w-3xs rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 bg-gray-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="text-cyan-700" role="none">
            <a href="#" onClick={() => serchDefinition("f-name")} className=" block px-4 py-2 text-sm hover:bg-white hover:rounded-md transition-colors duration-150" role="menuitem" tabIndex={-1} id="menu-item-0">
              Pretraga po imenu firme
            </a>
            <a href="#" onClick={() => serchDefinition("f-number")} className=" block px-4 py-2 text-sm hover:bg-white transition-colors duration-150" role="menuitem" tabIndex={-1} id="menu-item-1">
              Pretraga po broju narudzbine
            </a>
            <a href="#" onClick={() => serchDefinition("f-status")} className=" block px-4 py-2 text-sm hover:bg-white transition-colors duration-150" role="menuitem" tabIndex={-1} id="menu-item-1">
              Pretraga po statusu
            </a>
            <a href="#" onClick={() => serchDefinition("f-date")} className=" block px-4 py-2 text-sm hover:bg-white hover:rounded-md transition-colors duration-150" role="menuitem" tabIndex={-1} id="menu-item-1">
              Pretraga po datumu
            </a>
          </div>
        </div>
        )}
    </div>
  )
}
