import * as React from "react";
import { cookies } from 'next/headers';
import Main from "../components/main";
import Welcome from "../components/welcome";
import Setup from "../components/setup";
import SecondSetup from "../components/secondsetup";

function App() {
	const cookieStore = cookies();

  // TODO : do not use cookie for routing decision
 
  if (cookieStore.get("welcome") == undefined) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <Welcome/>
        </div>
			</div>
    )
  }

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
    <Main/>
	);
}

export default App;
