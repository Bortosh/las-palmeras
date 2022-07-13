import React from "react";
import { MapMaster, MapWrapper } from "../style";

export const Map = () => {

    const coords = "https://maps.google.com/maps?q=Cali,+Valle+del+Cauca,+Colombia/@3.395397,-76.665753,11z/data=!3m1!4b1!4m5!3m4!1s0x8e30a6f0cc4bb3f1:0x1f0fb5e952ae6168!8m2!3d3.4516467!4d-76.5319854?hl=en=&output=embed"

    return (
            <MapWrapper 
                id="gmap_canvas"
                src={coords} 
                frameborder="0" 
                scrolling="no" 
                marginheight="0" 
                marginwidth="0">
            </MapWrapper>    
    )
}