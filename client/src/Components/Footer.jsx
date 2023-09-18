
const Footer = () => {
  return (
    <div className="w-full mt-auto flex flex-col py-4 ">
    <div className="h-[0.25px] bg-slate-600"></div>
    <div className="flex justify-between px-4 py-4 text-slate-600">
        <div className="flex gap-2 text-sm">
            <h1>Copyright © 2019</h1>
            <h1>HodlInfo.com</h1>
        </div>
        <div className="cursor-pointer text-sm">
             <h1>Support</h1>   
        </div>
    </div>
    </div>
  )
}

export default Footer