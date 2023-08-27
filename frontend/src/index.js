const map = new maplibregl.Map({
    container: 'map',
    style: './css/openmaptiles-style.json',
    center: [139.839478, 35.652832],
    zoom: 10
});

import ApiClient from "./ApiClient.js";

const hospitalCoordinates = [
    [139.671204, 35.681717],
    [139.671509, 35.683224],
    [139.671494, 35.683605],
    [139.671539, 35.685516],
    [139.670364, 35.686111],
    [139.669266, 35.685276],
    [139.668777, 35.684059] 
];

hospitalCoordinates.forEach(hospitalCoordinate => {
    const marker = new maplibregl.Marker()
        .setLngLat(hospitalCoordinate)
        .addTo(map);

    marker.getElement().addEventListener('click', () => {
        alert(1);
    }); 
});
