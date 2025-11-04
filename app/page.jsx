"use client"
import {BatteryFull,Wifi,ChevronDown,Volume2,Grip,StarOff,ArrowDownToLine,ChevronLeft,History,FileText,ChevronRight,X,Trash2,House,Search,HardDrive,Plus,Music4,Minus,FolderX ,ImageIcon,Film} from "lucide-react"
import Image from "next/image"
import { useState,useEffect,useRef } from "react"
import { motion } from "framer-motion";
import Tooltip from '@mui/material/Tooltip';
export default function Home() {



  const containerRef = useRef(null);
  const [size, setSize] = useState({ width: 600, height: 400 });
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDir, setResizeDir] = useState(null);



  const startResize = (e, dir) => {
    e.stopPropagation();
    e.preventDefault();
    setIsResizing(true);
    setResizeDir(dir);
  };

  const handleMouseMove = (e) => {
    if (!isResizing) return;

    setSize((prev) => {
      const newSize = { ...prev };
      const deltaX = e.movementX;
      const deltaY = e.movementY;

      if (resizeDir.includes("right"))
        newSize.width = Math.max(300, prev.width + deltaX);
      if (resizeDir.includes("bottom"))
        newSize.height = Math.max(200, prev.height + deltaY);
      if (resizeDir.includes("left")) {
        newSize.width = Math.max(300, prev.width - deltaX);
        setPosition((p) => ({ ...p, x: p.x + deltaX }));
      }
      if (resizeDir.includes("top")) {
        newSize.height = Math.max(200, prev.height - deltaY);
        setPosition((p) => ({ ...p, y: p.y + deltaY }));
      }

      return newSize;
    });
  };

  const stopResize = () => {
    setIsResizing(false);
    setResizeDir(null);
  };


  

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
 <div ref={containerRef} className="h-screen overflow-hidden select-none bg-[url('/wall.jpg')] bg-cover bg-center">
    {/* Top Head */}
    <div className="bg-[#171717]/70 px-3 overflow-hidden text-[#C2BFC0] h-[3.5%] flex items-center justify-between">

    

      
        <span className="text-[13.5px] font-semibold ">Activities</span>
        
    

      <span className="text-[13.5px] font-semibold ">{timeDate}</span>

      <div className="flex items-center gap-2">
        <Volume2 size={18} strokeWidth={2} color="#C2BFC0" />
        <Wifi size={18} strokeWidth={2} color="#C2BFC0" />
        <BatteryFull size={22} strokeWidth={1.5} color="#C2BFC0" />
        <ChevronDown size={20} strokeWidth={2} color="#C2BFC0" />
      </div>

    </div>

    <div className="h-[96.5%] flex overflow-hidden">
      <div className="bg-[#140D14]/30 overflow-hidden  px-0 py-3 border-r-[1px] border-slate-900/30 backdrop-blur-md w-[4%] z-0 flex flex-col items-center justify-between ">

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


     

      <div 
     
      
      className="overflow-hidden z-1 w-[96%] flex justify-center items-center">


      <motion.div
       ref={containerRef}
  drag
  dragMomentum={false}
  dragElastic={0}
  transition={{ type: "tween", duration: 0 }}
  className="w-[950px] resize h-[650px] min-w-[750px] min-h-[550px] max-w-[1400px] max-h-[900px] absolute overflow-hidden  backdrop-blur rounded-lg border border-black shadow-lg">

          <div className="py-2 flex items-center justify-between px-2 bg-[#222222] border-b-[1px] border-black">

                <div className="flex items-center gap-0.5">

                    <ChevronLeft  size={20} color="#C2BFC0" className="bg-[#464648]  rounded-tl-sm w-[25px] h-[25px] rounded-bl-sm hover:cursor-pointer hover:scale-[1.05] "/>
                    
                    <ChevronRight size={20} color="#C2BFC0" className="bg-[#393939] rounded-br-sm w-[24px] h-[25px] rounded-tr-sm hover:cursor-pointer hover:scale-[1.05]" />

                  <button className="flex items-center ml-2 gap-1 text-[12px] font-semibold text-[#C2BFC0] bg-[#464443] pl-2 pr-1 py-[4px] rounded-[4px] hover:cursor-pointer shadow-[inset_0px_0px_2px_rgba(0,0,0,0.6)]" >

                    <House size={14} color="#C2BFC0" />
                      Home
                    <ChevronDown size={16} strokeWidth={2.5} color="#C2BFC0" className="mt-1" />

                  </button>

                </div>

                <div className="flex items-center gap-2">
                 
                  <button className="bg-[#494949] shadow-[inset_0px_0px_2px_rgba(0,0,0,0.6)]  px-1.5 py-1.5 rounded-[4px] mr-1">
                    
                  <Search size={15} color="#C2BFC0" strokeWidth={3} className=" hover:cursor-pointer  hover:scale-[1.05] " />

                  </button>
                  
                  <button title="Minimize">

                    <Minus  size={15} color="#C2BFC0" strokeWidth={3} className=" mt-1 hover:cursor-pointer  hover:scale-[1.05] " />

                  </button>
                  
                  <button title="Close">

                    <X size={16} color="#C54918" strokeWidth={3} className=" hover:cursor-pointer  hover:scale-[1.05] " />

                  </button>

                 

                </div>

          </div>

          <div className=" h-full flex items-center justify-center  ">

              <div className="w-[25%] overflow-scroll bg-[#282828] border-r-[1px] border-[#1C1C1C] h-full">

                    <div className="py-2 rounded-[2px_2px_2px_2px] shadow-[inset_2.5px_-2.5px_2px_rgba(0,0,0,0.6)] mx-1 my-1 flex items-center gap-1  px-2 bg-[#DA3451] text-white text-[15px] hover:cursor-pointer font-semibold  ">
                      <History size={18} className="mt-0.5" strokeWidth={2} />
                      <span>Recents</span>
                    </div>

                   

                    <div className="py-2 rounded-[2px_2px_2px_2px] hover:bg-[#3d3c3c] mx-1 my-1 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)] flex items-center gap-1  px-2  text-white text-[15px] hover:cursor-pointer font-semibold hover:pl-3.5 transition-all  ">
                      <StarOff size={18} className="mt-0.5" strokeWidth={2} />
                      <span>Starred</span>
                    </div>


                    <hr className="bg-[#1C1C1C] text-[#1C1C1C]" />

                    <div  className="py-2 rounded-[2px_2px_2px_2px] hover:bg-[#3d3c3c] mx-1 my-1 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)] flex items-center gap-1  px-2  text-white text-[15px] hover:cursor-pointer font-semibold hover:pl-3.5 transition-all  ">
                      <House size={18} className="mt-0.5" strokeWidth={2} />
                      <span>Home</span>
                    </div>

                 


                    <div  className="py-2 rounded-[2px_2px_2px_2px] hover:bg-[#3d3c3c] mx-1 my-1 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)] flex items-center gap-1  px-2  text-white text-[15px] hover:cursor-pointer font-semibold hover:pl-3.5 transition-all  ">
                      <FileText size={18} className="mt-0.5" strokeWidth={2} />
                      <span>Documents</span>
                    </div>

                    <div  className="py-2 rounded-[2px_2px_2px_2px] hover:bg-[#3d3c3c] mx-1 my-1 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)] flex items-center gap-1  px-2  text-white text-[15px] hover:pl-3.5 hover:cursor-pointer font-semibold  transition-all  ">
                      <ArrowDownToLine size={18} className="mt-0.5" strokeWidth={2} />
                      <span>Downloads</span>
                    </div>


                    <div  className="py-2 rounded-[2px_2px_2px_2px] hover:bg-[#3d3c3c] mx-1 my-1 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)] flex items-center gap-1  px-2  text-white text-[15px] hover:cursor-pointer font-semibold hover:pl-3.5 transition-all  ">
                      <Music4 size={18} className="mt-0.5" strokeWidth={2} />
                      <span>Music</span>
                    </div>


                     <div  className="py-2 rounded-[2px_2px_2px_2px] hover:bg-[#3d3c3c] mx-1 my-1 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)] flex items-center gap-1  px-2  text-white text-[15px] hover:cursor-pointer font-semibold hover:pl-3.5 transition-all  ">
                      <ImageIcon size={18} className="mt-0.5" strokeWidth={2} />
                      <span>Pictures</span>
                    </div>


                    <div  className="py-2 rounded-[2px_2px_2px_2px] hover:bg-[#3d3c3c] mx-1 my-1 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)] flex items-center gap-1  px-2  text-white text-[15px] hover:cursor-pointer font-semibold  hover:pl-3.5 transition-all ">
                      <Film  size={18} className="mt-0.5" strokeWidth={2} />
                      <span>Videos</span>
                    </div>

                  
                    <div  className="py-2 rounded-[2px_2px_2px_2px] hover:bg-[#3d3c3c] mx-1 my-1 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)] flex items-center gap-1  px-2  text-white text-[15px] hover:cursor-pointer font-semibold hover:pl-3.5 transition-all  ">
                      <Trash2 size={18} className="mt-0.5" strokeWidth={2} />
                      <span>Trash</span>
                    </div>

                        <hr className="bg-[#1C1C1C] text-[#1C1C1C]" />

                    <div className="py-2 rounded-[2px_2px_2px_2px] hover:bg-[#3d3c3c] mx-1 my-1 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)] flex items-center gap-1  px-2  text-white text-[15px] hover:cursor-pointer font-semibold hover:pl-3.5 transition-all  ">
                      <HardDrive size={18} className="mt-0.5" strokeWidth={2} />
                      <span>Hard Disk</span>
                    </div>

                     <hr className="bg-[#1C1C1C] text-[#1C1C1C]" />

                     

                    <div className="py-2 rounded-[2px_2px_2px_2px] hover:bg-[#3d3c3c] mx-1 my-1 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)] flex items-center gap-1  px-2  text-white text-[15px] hover:cursor-pointer font-semibold hover:pl-3.5 transition-all  ">
                      <Plus size={18} className="mt-0.5" strokeWidth={2} />
                      <span>Other Locations</span>
                    </div>

                  

                    

                    

                  

                    



              </div>

              <div className="w-[75%] flex-col bg-[#2C2C2C] h-full flex justify-center items-center">
                  <FolderX strokeWidth={1.5} color="#5a5958"  size={55}/>
                  <p className="text-[25px] mb-13 text-[#5a5958] font-semibold ">Folder is Empty</p>
              </div>

          </div>

      </motion.div>




      </div>


    </div>


 </div>
  </>
}
