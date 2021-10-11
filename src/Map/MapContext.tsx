import { createContext } from "react";
import * as ol from "ol";
const MapContext = createContext<ol.Map | null>(null);
export default MapContext;
