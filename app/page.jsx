"use client"
import {BatteryFull,Wifi,ChevronDown,Volume2,Grip} from "lucide-react"
import Image from "next/image"
import { useState,useEffect,useRef } from "react"
import Tooltip from '@mui/material/Tooltip';
import MyComputer from "./_component/MyComputer";
import CircularProgress from '@mui/material/CircularProgress';
import Notepad from "./_component/Notepad";

export default function Home() {

  const containerRef = useRef(null)
  const [windows,setWindows] = useState([])
  const [zCounter,setZcounter] = useState(1)
  const [windowsCountInfo,setWindowsCountInfo] = useState([])
  const [isLoaded,setIsloaded] = useState(false)


useEffect(() => {
  const handleLoad = () => {
    setIsloaded(true)
  };

  if (document.readyState === "complete") {
    // Page already loaded
    handleLoad();
  } else {
    // Wait for full load
    window.addEventListener("load", handleLoad);
  }

  // Cleanup
  return () => {
    window.removeEventListener("load", handleLoad);
  };
}, []);



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

    updateTime() 
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval) 
  }, [])



  function HandleWindowsCountStatus(){

  }


  function OpenFiles(){
    const newId = "files - "+ Date.now();
    setWindows((prev)=>[...prev,{id:newId,type:"files",isVisible:true,zIndex:zCounter+1}])
    setZcounter((z)=>z+1)

  }


  function OpenNotepad(){
    const newId = "nodepad - "+ Date.now();
    setWindows((prev)=>[...prev,{id:newId,type:"notepad",isVisible:true,zIndex:zCounter+1}])
    setZcounter((z)=>z+1)

  }


 function BringToFront(id) {
  const maxz = zCounter + 1;

  setWindows((prev) =>
    prev.map((win) =>
      win.id === id ? { ...win, zIndex: maxz } : win
    )
  );

  setZcounter(maxz);
}


  if(!isLoaded){
    return<>
    <div className="h-screen flex justify-center items-center">
      <CircularProgress color="black"/>
    </div>
    </>
  }

  return <>
 <div ref={containerRef} className="h-screen overflow-hidden select-none bg-[url('/wall.jpg')] bg-cover bg-center">
    {/* Top Head */}
    <div className="bg-[#171717]/70 px-3 overflow-hidden text-[#C2BFC0] h-[3.5%] flex items-center justify-between">

    

      
        <div className="flex items-center gap-1.5 w-[40%]">

          <span className="text-[13.5px] font-semibold mr-3">Activities</span>

          


         

          <span className="text-[14px] font-semibold bg-[#606060]/40 px-3 hover:bg-[#606060]/30 rounded-[1px] py-0.5 hover:cursor-pointer border-b-2">Google Chrome</span>

        </div>
        
    

      <span className="text-[13.5px] font-semibold w-[10%] ">{timeDate}</span>

      <div className="flex items-center gap-2 w-[40%] justify-end">
        <Volume2 size={18} strokeWidth={2} color="#C2BFC0" />
        <Wifi size={18} strokeWidth={2} color="#C2BFC0" />
        <BatteryFull size={22} strokeWidth={1.5} color="#C2BFC0" />
        <ChevronDown size={20} strokeWidth={2} color="#C2BFC0" />
      </div>

    </div>

    <div className="h-[96.5%] flex overflow-hidden ">
      <div className="bg-[#140D14]/30 overflow-hidden  px-0 py-3 border-r-[1px] border-slate-900/30 backdrop-blur-md w-[4%] z-0 flex flex-col items-center justify-between ">

        <div className="flex flex-col items-center justify-between">

          <Tooltip arrow title="Terminal" placement="right"  >
            <div className="flex items-center justify-center gap-0 px-2 py-2  rounded-sm shadow-sm hover:cursor-pointer">
          <Image src={"/terminal.png"} className="hover:scale-[1.1]" alt="Not found" width={40} height={40}/>
        </div>
          </Tooltip>

        
          <Tooltip placement="right" arrow title="Firefox">
          <div className="flex items-center justify-center gap-0 px-2 py-2  rounded-sm shadow-sm hover:cursor-pointer">
          <Image src={"/firefox.png"} className="hover:scale-[1.1]" alt="Not found" width={38} height={38}/>
        </div>
        </Tooltip>

           <Tooltip placement="right" arrow title="Files">
         <div className="flex items-center justify-center px-2 bg-white/15 hover:cursor-pointer  py-2 rounded-md gap-0  mt-2">
     
          <Image onClick={OpenFiles} src={"/files.png"} className="hover:scale-[1.1]" alt="Not found" width={40} height={40}/>
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



        <Tooltip placement="right" arrow title="Notepad">
          <div className="flex items-center justify-center px-2 hover:cursor-pointer  py-2 rounded-md gap-0  mt-2 mx-0.5">
          
          <Image onClick={OpenNotepad} src={"/note.png"} className="hover:scale-[1.1]" alt="Not found" width={35} height={35}/>
        </div>
        </Tooltip>



        <Tooltip placement="right" arrow title="Settings">
          <div className="flex items-center justify-center px-2 hover:cursor-pointer  py-2 rounded-md gap-0  mt-2 mx-0.5">
          
          <Image src={"/settings.png"} className="hover:scale-[1.1]" alt="Not found" width={100} height={100}/>
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
     
      
     className="w-[96%] flex justify-center items-center">

       

    <Notepad/>
        

     {
  windows.map((win) => {
    if (win.type === "files") {
      return (
        <MyComputer
          key={win.id}
          id={win.id}
          zIndex={win.zIndex}
          bringToFront={() => BringToFront(win.id)}
          isVisible={win.isVisible}
          setIsVisible={(val) => {
            setWindows((prev) =>
              prev.map((winx) =>
                winx.id === win.id ? { ...winx, isVisible: val } : winx
              )
            );
          }}
          close={(val) => {
            setWindows((prev) =>
              prev.filter((windowx) => windowx.id !== val)
            );
          }}
        />
      );
    } else if(win.type == "notepad") {
      return <Notepad
      key={win.id}
          id={win.id}
          zIndex={win.zIndex}
          bringToFront={() => BringToFront(win.id)}
          isVisible={win.isVisible}
          setIsVisible={(val) => {
            setWindows((prev) =>
              prev.map((winx) =>
                winx.id === win.id ? { ...winx, isVisible: val } : winx
              )
            );
          }}
          close={(val) => {
            setWindows((prev) =>
              prev.filter((windowx) => windowx.id !== val)
            );
          }}
      />
    }
  })
}

        
     




      </div>


    </div>


 </div>
  </>
}
