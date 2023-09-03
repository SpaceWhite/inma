import * as React from "react";
import Map from "../components/map"; 
import Sidebar from "../components/sidebar";

function App() {
	return (
			<div className="app-container">
				<Sidebar className="w-1/2"/>
				<div className="map-wrapper">
					<Map
						initialOptions={{ center: [38.0983, 55.7038] }}
					/>
				</div>
			</div>
	)
}

export default App;
