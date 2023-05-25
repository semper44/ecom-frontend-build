import React,{useEffect, useState} from 'react'
import { screensizecontext } from './CartContxt'

function ScreenSize(props) {
    const[dontdisplay, setdontDisplay]= useState(undefined)
    const[gridlg, setgridlg]= useState(false)
    const[gridxl, setGridxl]= useState(false)
    const[gridxlxl, setGridxlxl]= useState(false)
    const[gridbxlxl, setGridbxlxl]= useState(false)
    const[screenWidth, setScreenWidth]= useState(window.innerWidth)

  
  useEffect(()=>{
    if(screenWidth<=810){
      setdontDisplay("md")
      setgridlg(false)
      setGridxl(false)
      setGridxlxl(false)
      setGridbxlxl(false)


    }
    else if(screenWidth>810 && screenWidth<=1023 ){
      setgridlg(true)
      setGridxl(false)
      setdontDisplay(undefined)
      setGridxlxl(false)
      setGridbxlxl(false)



    }
    else if(screenWidth>1023 && screenWidth<=1223 ){
      setgridlg(true)
      setGridxl(false)
      setdontDisplay(undefined)
      setGridxlxl(false)
      setGridbxlxl(false)



    }
    else if(screenWidth>1223 && screenWidth<=1505 ){
      setgridlg(true)
      setGridxl(false)
      setdontDisplay(undefined)
      setGridxlxl(true)
      setGridbxlxl(false)



    }
    else if(screenWidth>1620){
      setGridbxlxl(true)

    }
    // else{
    //   setgridlg(true)
    //   setGridxl(true)
    //   setdontDisplay(undefined)
    //   setGridxlxl(true)


    // }
    // else{
    //   setdontDisplay(undefined)
    //   // setlg(false)

    // }
   
  }, [ screenWidth])


  useEffect(()=>{
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize);

    return ()=>{
      window.removeEventListener("resize", handleResize)
   }
  }, [screenWidth])

 

  return (
    <>
        <screensizecontext.Provider value={{dontdisplay:dontdisplay, 
          gridlg:gridlg, 
          gridxl:gridxl, 
          gridxlxl:gridxlxl,
          gridbxlxl:gridbxlxl
          }}>
            {props.children}
        </screensizecontext.Provider>
    </>
  )
}

export default ScreenSize