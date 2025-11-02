"use client"
import {BatteryFull,Wifi,ChevronDown,Volume2,Grip,ChevronLeft,ChevronRight,X,House,Search,Square,Minus} from "lucide-react"
import Image from "next/image"
import { useState,useEffect } from "react"
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
export default function Home() {

  const [timeDate,setTimeDate] = useState()
   useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formatted = now.toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year:"numeric",
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })
      setTimeDate(formatted.replace(',', ' -'))
    }

    updateTime() // run once immediately
    const interval = setInterval(updateTime, 1000) // update every second

    return () => clearInterval(interval) // ✅ cleanup on unmount
  }, []) // ✅

  return <>
 <div className="h-screen select-none bg-[url('/wall.jpg')] bg-cover bg-center">
    {/* Top Head */}
    <div className="bg-[#171717]/70 px-3 text-[#C2BFC0] h-[3.5%] flex items-center justify-between">

    

      
        <span className="text-[13.5px] font-semibold ">Activities</span>
        
    

      <span className="text-[13.5px] font-semibold ">{timeDate}</span>

      <div className="flex items-center gap-2">
        <Volume2 size={18} strokeWidth={2} color="#C2BFC0" />
        <Wifi size={18} strokeWidth={2} color="#C2BFC0" />
        <BatteryFull size={22} strokeWidth={1.5} color="#C2BFC0" />
        <ChevronDown size={20} strokeWidth={2} color="#C2BFC0" />
      </div>

    </div>

    <div className="h-[96.5%] flex">
      <div className="bg-[#140D14]/30  px-0 py-3 border-r-[1px] border-slate-900/30 backdrop-blur-md w-[4%] flex flex-col items-center justify-between ">

        <div className="flex flex-col items-center justify-between">

          <Tooltip arrow title="Terminal" placement="right"  >
            <div className="flex items-center justify-center gap-0 px-2 py-2  rounded-sm shadow-sm hover:cursor-pointer">
          <Image src={"/terminal.png"} className="hover:scale-[1.1]" alt="Not found" width={40} height={40}/>
        </div>
          </Tooltip>

        
          <Tooltip placement="right" arrow title="Firefox">
          <div className="flex items-center justify-center gap-0 px-2 py-2  rounded-sm shadow-sm hover:cursor-pointer">
          <Image src={"/firefox.png"} className="hover:scale-[1.1]" alt="Not found" width={40} height={40}/>
        </div>
        </Tooltip>

           <Tooltip placement="right" arrow title="Files">
         <div className="flex items-center justify-center px-2 bg-white/15 hover:cursor-pointer  py-2 rounded-md gap-0  mt-2">
     
          <Image src={"/files.png"} className="hover:scale-[1.1]" alt="Not found" width={40} height={40}/>
        </div>
        </Tooltip>

        <Tooltip placement="right" arrow title="Software Center">
         <div className="flex items-center justify-center px-2  hover:cursor-pointer  py-2 rounded-md gap-0  mt-2">
     
          <Image src={"/software-center.png"} className="hover:scale-[1.1]" alt="Not found" width={40} height={40}/>
        </div>
        </Tooltip>

        <Tooltip placement="right" arrow title="Google Chrome">
          <div className="flex items-center justify-center px-2 hover:cursor-pointer  py-2 rounded-md gap-0  mt-2 mx-0.5">
          
          <Image src={"/chrome.png"} className="hover:scale-[1.1]" alt="Not found" width={45} height={45}/>
        </div>
        </Tooltip>

        </div>

          <Tooltip placement="right" arrow title="Applications">
         <div className="flex justify-center items-center hover:cursor-pointer">
            <Grip size={30} className="hover:scale-[1.1]" color="white"  />
          </div>
          </Tooltip>

      </div>


     

      <div className="bg-transparent w-[96%] flex justify-center items-center">


      <div className="w-[45%] h-[55%] overflow-hidden bg-transparent/30 backdrop-blur rounded-lg border-[1px] shadow-lg border-black/100">

          <div className="h-[8%] flex items-center justify-between px-2 bg-[#2B2B2B] border-b-[1px] border-black">
                <div className="flex items-center gap-0.5 ">
                    <ChevronLeft  size={20} color="#C2BFC0" className="bg-[#464648]  rounded-tl-sm rounded-bl-sm hover:cursor-pointer  hover:scale-[1.05] "/>
                    <ChevronRight size={20} color="#C2BFC0" className="bg-[#393939] rounded-br-sm rounded-tr-sm hover:cursor-pointer hover:scale-[1.05]" />

                  <button className="flex items-center ml-2 gap-1 text-[12px] font-semibold text-[#C2BFC0] bg-[#464443] pl-2 pr-1 py-0.5 rounded-[2px] hover:cursor-pointer">

                    <House size={14} color="#C2BFC0" />
                    Home
                    <ChevronDown size={16} strokeWidth={2.5} color="#C2BFC0" className="mt-1" />
                  </button>

                </div>

                <div className="flex items-center gap-2">
                 
                  <button className="bg-[#494949] px-1 py-1 rounded-[2px] mr-1">
                  <Search size={15} color="#C2BFC0" strokeWidth={3} className=" hover:cursor-pointer  hover:scale-[1.05] " />
                  </button>
                  <Minus size={15} color="#C2BFC0" strokeWidth={3} className=" mt-1 hover:cursor-pointer  hover:scale-[1.05] " />
                  <Square size={10} color="#C2BFC0" strokeWidth={3} className=" hover:cursor-pointer  hover:scale-[1.05] " />
                  <X size={16} color="#C54918" strokeWidth={3} className=" hover:cursor-pointer  hover:scale-[1.05] " />

                </div>
          </div>

          <div className=" h-full flex items-center justify-center  ">

              <div className="w-[25%] bg-[rgb(56,56,56)] border-r-[1px] border-black h-full">

              </div>

              <div className="w-[75%] bg-[#333333] h-full">

              </div>

          </div>

      </div>


      </div>
    </div>


 </div>
  </>
}
