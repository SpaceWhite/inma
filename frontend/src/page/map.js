function fillTitlePlaceholder() {
	const textPlaceholders = {
		"titleSidebar": {
			"en": "Recommended hospitals",
		},
	};
}

function appendData(data) {
	var mainContainer = document.getElementById("myData");
	for (var i = 0; i < data.length; i++) {
		var div = document.createElement("div");
		div.innerHTML = 'Name: ' + data[i].latitude + ' ' + data[i].longitude;
		mainContainer.appendChild(div);

	}
}

function main() {
	const map = new maplibregl.Map({
		container: 'map',
		style: '/asset/openmaptiles-style.json',
		center: [139.839478, 35.652832],
		zoom: 10
	});

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


	//---------------Get data from Json--------------------



	const url = 'http://170.187.141.21:8080/api/v1/hospital'

	fetch(url)
		.then(response => response.json())
		.then(function (data) {
			appendData(data["data"]);
		})
		.catch(function (err) {
			console.log('error:' + err);
		});
}

main();
