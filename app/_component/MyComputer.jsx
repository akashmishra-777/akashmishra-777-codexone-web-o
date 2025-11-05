import {ChevronDown,StarOff,ArrowDownToLine,ChevronLeft,History,FileText,ChevronRight,X,Trash2,House,Search,HardDrive,Plus,Music4,Minus,FolderX ,ImageIcon,Film} from "lucide-react";

import { motion } from "framer-motion";

import { useRef,useState } from "react";

export default function MyComputer({
  id,
  isVisible,
  setIsVisible,
  bringToFront,
  close,
  zIndex,
}){

    

    const containerRef = useRef(null);
    

    return<>

         <motion.div
                onClick={bringToFront}
                style={{zIndex}}
                ref={containerRef}
                drag
                dragMomentum={false}
                dragElastic={0}
                transition={{ type: "tween", duration: 0 }}
                className={`w-[950px] resize h-[650px] min-w-[750px] min-h-[550px] max-w-[1400px] max-h-[900px] absolute overflow-hidden ${isVisible?null:"hidden"}  backdrop-blur rounded-lg border border-black shadow-lg`}>

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
                  
                  <button title="Minimize" onClick={()=>setIsVisible(false)}>

                    <Minus  size={15} color="#C2BFC0" strokeWidth={3} className=" mt-1 hover:cursor-pointer  hover:scale-[1.05] " />

                  </button>
                  
                  <button title="Close">

                    <X onClick={()=>close(id)} size={16} color="#C54918" strokeWidth={3} className=" hover:cursor-pointer  hover:scale-[1.05] " />

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


    </>
}