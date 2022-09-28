import React from "react";
import { Box } from "@mui/material";
import Map from "../components/Map";
// import NavBar from "../components/NavBar";
import MiniDrawer from "../components/MiniDrawer";
import TruckTimeline from "../components/TimeLine";
import SearchLocationMap from "../components/SearchLocationMap";
import LocationRoutingMap from "../components/LocationRoutingMap";


const DefaultLayout = () => {
    return (
        <Box>
            <MiniDrawer>

            {/* <NavBar></NavBar> */}
            <Box sx={{ backgroundColor: "#E6FABF", width: "100%", height: "100vh", display:"flex", justifyContent:"Space-around"}}>
        
                <TruckTimeline></TruckTimeline>  
                    <Box sx={{m:5}}>
                        <LocationRoutingMap></LocationRoutingMap>
                        <Box sx={{display:"fixed"}}>
                            {/* <Map></Map> */}
                        </Box>
                    </Box>
                </Box>
            </MiniDrawer>
        </Box>

    )

}

export default DefaultLayout;