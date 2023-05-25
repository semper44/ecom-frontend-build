import React,{useContext} from 'react'
import { ThemeData } from '../../App'

function NotFound() {
  const {theme}= useContext(ThemeData)

  return (
    <div style={{width:"100%", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center", color:theme?"cyan":"black" }}>
        <h1>Not Found</h1>
    </div>
  )
}

export default NotFound