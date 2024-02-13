import { useContext} from 'react'

import { Box} from "@mui/material";
import { ThemeData } from "../../../App";

const ProgressCircle = ({ progress = progress, size = "40" }) => {
  const {theme}=useContext(ThemeData)
 
  const angle = progress * 360;
  return (
    <Box
      sx={{
        // background: `radial-gradient(red 55%, transparent 56%),
        //     conic-gradient(transparent 0deg ${angle}deg, lime} ${angle}deg 360deg)`,
        background:theme?`radial-gradient(#050c30 55%, transparent 56%), conic-gradient(transparent 0deg ${angle}deg, rgba(255, 99, 400, 0.5) ${angle}deg 360deg), cyan`:
        `radial-gradient(white 55%, transparent 56%), conic-gradient(transparent 0deg ${angle}deg, cyan ${angle}deg 360deg), rgba(255, 99, 400, 0.5)`,

        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
        // backgroundColor:"red"
      }}
    />
  );
};

export default ProgressCircle;