import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import OLVectorLayer from "ol/layer/Vector";
import { Style } from "ol/style";
import VectorSource from "ol/source/Vector";

interface VectorLayerProp {
    source: VectorSource<any>,
    style: Style,
    zIndex?: number
}
const VectorLayer: React.FC<VectorLayerProp> = ({ source, style, zIndex = 0 }) => {
  const map  = useContext(MapContext);
  useEffect(() => {
    if (!map) return;
    let vectorLayer = new OLVectorLayer({
      source,
      style
    });
    map.addLayer(vectorLayer);
    vectorLayer.setZIndex(zIndex);
    return () => {
      if (map) {
        map.removeLayer(vectorLayer);
      }
    };
  }, [map]);
  return null;
};
export default VectorLayer;