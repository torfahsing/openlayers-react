import React, { useContext, useEffect } from "react";
import FullScreen from "ol/control/FullScreen";
import MapContext from "../Map/MapContext";
const FullScreenControl = () => {
  const map = useContext(MapContext);
  useEffect(() => {
    if (!map) return;
    let fullScreenControl = new FullScreen({});
    map.addControl(fullScreenControl);
    
    return () => {map.removeControl(fullScreenControl)};
  }, [map]);
  return null;
};
export default FullScreenControl;