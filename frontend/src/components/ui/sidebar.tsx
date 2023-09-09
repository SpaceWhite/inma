import { Hospital } from "../types";

interface SidebarProps {
  hospitals: Hospital[],
}

function Sidebar({hospitals}: SidebarProps) {
	return (
		<aside className="fixed top-0 left-0 z-40 w-2/5 h-screen pt-100 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0" aria-label="Sidebar">
			<div className="h-full pt-3 px-3 pb-4 overflow-y-auto bg-white">
				<div className="grid grid-cols-2 gap-4">
          {hospitals.map(hospital => 
					<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
						<h5 className="mb-2 text-l font-bold tracking-tight text-gray-900">{hospital.name}</h5>
						    <p className="mb-3 font-normal text-gray-700">{hospital.address}</p>
						    <p className="text-xm mb-3 font-normal text-gray-700">Language :
                  {hospital.languages.map(language =>  
                  <span className="text-violet-700 font-bold">
                  {language}, </span>)} jp
                </p>
					</div>
          )}
				</div>
			</div>
		</aside>
	);
}

export default Sidebar;
