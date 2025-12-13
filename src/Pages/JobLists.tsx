import Dropdown from "../Components/ui/Dropdown";


export default function JobLists() {
  return (    
    <>
      <div className="flex flex-col justify-start items-center bg-gray-100 h-full  w-full">
        <div className="text-2xl font-bold text-cyan-700 my-7">Spisak narudzbina</div>        
        <div className="  w-11/12">
        <div className="w-full">
          <Dropdown />
        </div>
          <table className="w-full text-sm text-left bg-cyan-700 text-gray-100 rounded-lg shadow-2xl overflow-hidden   ">
            <thead className=" bg-gray-100 text-cyan-700 ">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium border rounded-lg">
                    Narucilac
                </th>
                <th scope="col" className="px-6 py-3 font-medium border rounded-lg">
                    Broj Narudzbine
                </th>
                <th scope="col" className="px-6 py-3 font-medium border rounded-lg">
                    Status
                </th>
                 <th scope="col" className="px-6 py-3 font-medium border rounded-lg">
                    Datum Narucivanja
                </th>
                <th scope="col" className="px-6 py-3 font-medium border rounded-lg">
                    Pogledaj Nardzbinu
                </th>
            </tr>
            </thead>  

        <tbody>
            <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap ">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Google Pixel Phone
                </th>
                <td className="px-6 py-4">
                    Gray
                </td>
                <td className="px-6 py-4">
                    Phone
                </td>
                <td className="px-6 py-4">
                    $799
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft">
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple Watch 5
                </th>
                <td className="px-6 py-4">
                    Red
                </td>
                <td className="px-6 py-4">
                    Wearables
                </td>
                <td className="px-6 py-4">
                    $999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
