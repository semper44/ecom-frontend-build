import { Box, Typography} from "@mui/material";
import React, {useContext} from "react";
import ProgressCircle from "./ProgressCircle";
import { ThemeData } from "../../../App";
import { screensizecontext } from "../../../stores/CartContxt";


const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const Theme=useContext(ThemeData)
  const {dontdisplay}=useContext(screensizecontext)
 
  return (
    <Box sx={{
      width:"100%", boxShadow:"3"
    }} >
      <Box sx={{p:"3%", width:"100%"}}>
        <Box sx={{display:"flex", 
              justifyContent: "space-between",
              }}>
          <Box>
            {icon}
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: Theme? "white":"gray"}}
            >
              {title}
            </Typography>
          </Box>
          <Box>
            <ProgressCircle progress={progress} increase={increase} />
          </Box>
        </Box>
        <Box sx={{display:"flex", justifyContent:"space-between",
              gap:dontdisplay && "2%", mt:"2px"}}>
          <Typography variant="p" sx={{ color: Theme? "cyan": "black", opacity:"0.7", mt:"12px" }}>
            {subtitle}
          </Typography>
          <Typography
            variant="h5"
            fontStyle="italic"
            sx={{ color: "cyan" }}
          >
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;