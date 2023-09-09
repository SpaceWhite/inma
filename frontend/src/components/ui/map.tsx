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
	onCreated,
	onLoaded,
	onRemoved,
}: MapProps) {
	const [map, setMap] = React.useState<maplibregl.Map>();

	const mapNode = React.useRef(null);

  // TODO : This is hack. Fix UI instead of using offset
  const offsetX = -0.03;

	React.useEffect(() => {
		const node = mapNode.current;
		if (typeof window === "undefined" || node === null) return;
		const mapboxMap = new maplibregl.Map({
			container: node,
			style: "https://tile.openstreetmap.jp/styles/osm-bright/style.json",
			zoom: 13,
      center: [139.7538 + offsetX, 35.6940],
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
