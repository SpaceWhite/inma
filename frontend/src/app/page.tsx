import * as React from "react";
import { cookies } from 'next/headers';
import Map from "../components/map"; 
import Sidebar from "../components/sidebar";
import Setup from "../components/setup";
import SecondSetup from "../components/secondsetup";

function App() {
	const cookieStore = cookies();

	if (cookieStore.get("languages") == undefined) {
		return (
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <Setup/>
        </div>
			</div>
		);
	}

  if (cookieStore.get("medicalAids") == undefined) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-4 lg:px-8">
          <SecondSetup/>
			</div>
    )
  }

	return (
			<div className="app-container">
				<Sidebar/>
				<div className="map-wrapper">
					<Map/>
				</div>
			</div>
	);
}

export default App;
