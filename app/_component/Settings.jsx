import {Minus,X,Settings} from "lucide-react";

import { motion } from "framer-motion";

import { useRef } from "react";




export default function Settingsx({
  id,
  isVisible,
  setIsVisible,
  bringToFront,
  close,
  zIndex,
}){
    const containerRef = useRef(null)
    return<>
    <motion.div
                onClick={bringToFront}
                style={{zIndex}}
                ref={containerRef}
                drag
                dragMomentum={false}
                dragElastic={0}
                transition={{ type: "tween", duration: 0 }}
                className={`w-[950px] resize h-[650px] min-w-[750px] min-h-[550px] max-w-[1400px] max-h-[900px] absolute overflow-hidden   backdrop-blur rounded-lg border border-black shadow-lg ${isVisible?null:"hidden"}`}>

          <div className="py-1 flex items-center justify-between px-2 bg-[#202020] border-b-[1px] border-black shadow h-[6%]">

                <div className="flex items-center gap-1.5">

                        <span className=" font-semibold text-[14px] bg-[#2C2C2C] rounded-tl-md rounded-tr-md border-b-2 border-b-white  px-5 py-1 text-[#C2BFC0]">Untitled</span>

                    

                </div>

                <div className="flex items-center gap-2">
                 
                 
                  
                  <button title="Minimize" onClick={()=>setIsVisible(false)}>

                    <Minus  size={15} color="#C2BFC0" strokeWidth={3} className=" mt-1 hover:cursor-pointer  hover:scale-[1.05] " />

                  </button>
                  
                  <button title="Close">

                    <X onClick={()=>close(id)} size={16} color="#C54918" strokeWidth={3} className=" hover:cursor-pointer  hover:scale-[1.05] " />

                  </button>

                 

                </div>

          </div>


        <div className="h-full bg-[#202020]">

            <div className="h-[4.5%] flex items-center gap-4 px-3 bg-[#2C2C2C] text-[14px] justify-between border-b-[1px] border-black ">
                    <div className="flex items-center gap-4">
                        <button className="text-[#C2BFC0] font-semibold">File</button>
                    <button className="text-[#C2BFC0] font-semibold">Edit</button>
                    <button className="text-[#C2BFC0] font-semibold">View</button>
                    </div>


                    <div className="flex items-center">
                        <button title="Notepad Settings ">
                          <Settings color="#C2BFC0" className="hover:cursor-pointer hover:rotate-[90deg] transition-all duration-[0.2s]" size={18}/>
                        </button>
                    </div>

                    
            </div>

            <div className="h-[85%] px-3 py-3 border-0 outline-0 text-[#C2BFC0] text-[16px] font-semibold overflow-y-scroll select-auto" contentEditable={true}>
                    <p>This is settings</p>
                    </div>


              <div className="h-[4.5%]  px-4 flex items-center justify-between bg-[#2C2C2C] text-[#B8B6B7] font-semibold text-[14px]">
                <span>Characters : 28334</span>
                <span className="text-[#767374]">|</span>
                <span>File extension : .txt</span>
                <span className="text-[#767374]">|</span>
                <span>Filetype : text file</span>
                <span className="text-[#767374]">|</span>
                <span>UTF-8</span>
            </div>

          </div>

         

         </motion.div>
    </>
}