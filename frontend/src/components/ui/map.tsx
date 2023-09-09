"use client";

import * as React from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Hospital } from "../types";

interface MapProps {
  hospitals: Hospital[],
	onCreated?(map: maplibregl.Map): void;
	onLoaded?(map: maplibregl.Map): void;
	onRemoved?(): void;
}

function Map({
  hospitals,
	onCreated,
	onLoaded,
	onRemoved,
}: MapProps) {
	const [map, setMap] = React.useState<maplibregl.Map>();

	const mapNode = React.useRef(null);

  // TODO : This is hack. Fix UI instead of using offset
  const offsetX = -0.00;

	React.useEffect(() => {
		const node = mapNode.current;
		if (typeof window === "undefined" || node === null) return;
		const mapboxMap = new maplibregl.Map({
			container: node,
			//style: "https://tile.openstreetmap.jp/styles/osm-bright-en/style.json",
			style: "https://tile.openstreetmap.jp/styles/maptiler-basic-en/style.json",
			zoom: 15,
      //center: [139.7538 + offsetX, 35.6940],
      center: [139.67103 + offsetX, 35.698172],
		});

		setMap(mapboxMap);
		if (onCreated) onCreated(mapboxMap);

		if (onLoaded) mapboxMap.once("load", () => onLoaded(mapboxMap));

    hospitals.forEach(hospital => {
      let color = hospital.languages.length == 0 ? "#F8FF95" : "#BC7AF9";

      const marker = new maplibregl.Marker({color: color})
        .setLngLat([hospital.longitude, hospital.latitude])
        .addTo(mapboxMap);

      marker.getElement().addEventListener("click", () => {
        const url = `http://maps.google.com/maps?z=12&t=m&q=loc:${hospital.latitude}+${hospital.longitude}`
        window.open(url);
      })
    })


		return () => {
			mapboxMap.remove();
			if (onRemoved) onRemoved();
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <div ref={mapNode} style={{ width: "100%", height: "100%" }} />;
}

export default Map;
