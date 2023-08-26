const map = new maplibregl.Map({
    container: 'map',
    style: './css/openmaptiles-style.json',
    center: [139.839478, 35.652832],
    zoom: 10
});

const hospitalCoordinates = [
	[139.667862, 35.697552],
[139.659378, 35.709152],
[139.670609, 35.694122],
[139.651978, 35.724586],
[139.667786, 35.694855],
[139.648239, 35.714504],
[139.681839, 35.699936],
[139.633194, 35.735432],
[139.67131, 35.697182],
[139.686615, 35.708271],
[139.660324, 35.721752],
[139.668854, 35.697586],
[139.672394, 35.721054],
[139.673233, 35.709816],
[139.652786, 35.719921],
[139.680283, 35.697411],
[139.665253, 35.712566],
[139.666748, 35.710205],
[139.665436, 35.683651],
[139.651505, 35.709797],
[139.658768, 35.713573],
[139.678558, 35.701756],
[139.642471, 35.72337],
[139.634796, 35.726658],
[139.68544, 35.704472],
[139.670959, 35.698208],
[139.677002, 35.701641],
[139.650665, 35.713051],
[139.654846, 35.709782],
[139.662308, 35.723751],
[139.667297, 35.708],
[139.666031, 35.683548],
[139.669281, 35.705193],
[139.68158, 35.708668],
[139.66275, 35.722015],
[139.664825, 35.703197],
[139.669128, 35.697361],
[139.674866, 35.709286],
[139.637497, 35.717564],
[139.672546, 35.709309],
[139.655777, 35.717983],
[139.661957, 35.70734],
[139.659729, 35.683525],
[139.682159, 35.69595],
[139.652603, 35.721001],
[139.646851, 35.719368],
[139.629593, 35.734814],
[139.630188, 35.733994],
[139.685806, 35.701508],
[139.650757, 35.713238],
[139.692734, 35.710293],
[139.629807, 35.732422],
[139.648529, 35.714664],
[139.671249, 35.723358],
[139.651566, 35.719017],
[139.653549, 35.718098],
[139.666016, 35.71302],
[139.638657, 35.723076],
[139.681351, 35.705921],
[139.67572, 35.698391],
[139.663193, 35.686798],
[139.675095, 35.692497],
[139.63588, 35.726818],
[139.665665, 35.709923],
[139.652344, 35.718719],
[139.64418, 35.722969],
[139.650681, 35.709545],
[139.677185, 35.697517],
[139.665298, 35.711887],
[139.669128, 35.697361],
[139.66716, 35.708847],
[139.664047, 35.727547],
[139.676712, 35.691483],
[139.678391, 35.696941],
[139.649994, 35.718319],
[139.677872, 35.691505],
[139.68013, 35.689487],
[139.65123, 35.717136],
[139.631149, 35.732426],
[139.641891, 35.723137],
[139.683533, 35.708282],
[139.652756, 35.710651],
[139.671997, 35.717136],
[139.668777, 35.684059],
[139.678253, 35.711613],
[139.668732, 35.707516],
[139.644684, 35.72123],
[139.682556, 35.707489],
[139.644058, 35.71172],
[139.649399, 35.711254],
[139.675613, 35.692554],
[139.683578, 35.706108],
[139.666061, 35.704781],
[139.671539, 35.685516],
[139.669266, 35.685276],
[139.665237, 35.708084],
[139.662521, 35.727081],
[139.650757, 35.723583],
[139.681, 35.708847],
[139.653397, 35.71981],
[139.652496, 35.718304],
[139.677399, 35.712299],
[139.652649, 35.719379],
[139.672424, 35.687668],
[139.67067, 35.711605],
[139.675858, 35.697403],
];

hospitalCoordinates.forEach(hospitalCoordinate => {
    const marker = new maplibregl.Marker()
        .setLngLat(hospitalCoordinate)
        .addTo(map);

    marker.getElement().addEventListener('click', () => {
        alert(1);
    }); 
});
