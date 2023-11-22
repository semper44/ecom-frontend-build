import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Box } from '@mui/material';



const Loading = () => {
  return (
    <Box sx={{zIndex:"1", display:"flex", alignItems:"center", justifyContent:"center", width:"100%", height:"100%", position:"absolute"}}>
      <ThreeDots
          height="150"
          width="150"
          radius="9"
          color="cyan"
          ariaLabel="loading"
      />
    </Box>
     
  )
}

export default Loading
