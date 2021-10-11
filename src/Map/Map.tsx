import "./Map.css";
import MapContext from "./MapContext";
import * as ol from "ol";
import React, { useRef, useState, useEffect } from "react";

interface MapProps {
        center: number[],
        zoom: number,
}
const Map: React.FC<MapProps> = ({ center, zoom, children }) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<ol.Map | null>(null);
    // on component mount
    useEffect(() => {
        if (!mapRef.current) {
            return;
        }
        let options = {
            view: new ol.View({ zoom, center }),
            layers: [],
            controls: [],
            overlays: []
        };
        let mapObject = new ol.Map(options);
        mapObject.setTarget(mapRef.current);
        setMap(mapObject);
        return () => mapObject.setTarget(undefined);
    }, []);
    // zoom change handler
    useEffect(() => {
        if (!map) return;
        map.getView().setZoom(zoom);
    }, [zoom]);
    // center change handler
    useEffect(() => {
        if (!map) return;
        map.getView().setCenter(center)
    }, [center])
    return (
        <MapContext.Provider value={map}>
            <div ref={mapRef} className="ol-map">
                {children}
            </div>
        </MapContext.Provider>
    )
}
export default Map;