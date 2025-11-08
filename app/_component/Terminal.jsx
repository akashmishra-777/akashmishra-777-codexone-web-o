import {Minus,X,Settings} from "lucide-react";

import { motion } from "framer-motion";

import { useRef } from "react";




export default function Terminal({
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

                        <span className=" font-semibold text-[14px] bg-[#2C2C2C] rounded-tl-md rounded-tr-md border-b-2 border-b-white  px-5 py-1 text-[#C2BFC0]">Terminal 1</span>

                    

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

           

            <div className="h-[85%] px-3 py-3 border-0 outline-0 text-[#C2BFC0] text-[16px] font-semibold overflow-y-scroll select-auto" >

                <div>
                    <span className="text-[#3b78ff]"> 𒆜( <span className="text-red-500">root@sant</span> ) - [ <span className="text-[#C2BFC0]">home/</span> ]</span>
                </div>

                <div>
                        <span>: :  &nbsp; </span>
                        <input type="text" autoFocus className="outline-none font-normal font-sans" />
                </div>

                    </div>
                    


              

          </div>

         

         </motion.div>
    </>
}