"use client";

import * as React from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

interface MapProps {
	initialOptions?: Omit<maplibregl.Options, "container">;
	onCreated?(map: maplibregl.Map): void;
	onLoaded?(map: maplibregl.Map): void;
	onRemoved?(): void;
}

function Map({
	initialOptions = {},
	onCreated,
	onLoaded,
	onRemoved,
}: MapProps) {
	const [map, setMap] = React.useState<maplibregl.Map>();

	const mapNode = React.useRef(null);

	React.useEffect(() => {
		const node = mapNode.current;
		if (typeof window === "undefined" || node === null) return;
		const mapboxMap = new maplibregl.Map({
			container: node,
			style: "https://tile.openstreetmap.jp/styles/osm-bright/style.json",
			zoom: 9,
			...initialOptions,
		});

		setMap(mapboxMap);
		if (onCreated) onCreated(mapboxMap);

		if (onLoaded) mapboxMap.once("load", () => onLoaded(mapboxMap));

		return () => {
			mapboxMap.remove();
			if (onRemoved) onRemoved();
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <div ref={mapNode} style={{ width: "100%", height: "100%" }} />;
}

export default Map;
