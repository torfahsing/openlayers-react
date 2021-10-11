import VectorSource from 'ol/source/Vector';
import Feature from "ol/Feature"

function vector (features: Feature<any>[]) {
	return new VectorSource({
		features
	});
}

export default vector;