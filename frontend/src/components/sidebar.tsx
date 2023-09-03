function Sidebar() {
	return (
		<aside className="fixed top-0 left-0 z-40 w-1/3 h-screen pt-100 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0" aria-label="Sidebar">
			<div className="h-full pt-3 px-3 pb-4 overflow-y-auto bg-white">
				<div class="grid grid-cols-2 gap-4">
					<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
						<h5 class="mb-2 text-l font-bold tracking-tight text-gray-900">National Center for Global Health and Medicine</h5>
						    <p class="mb-3 font-normal text-gray-700">1 Chome-21-1 Toyama, Shinjuku City, Tokyo 162-8655</p>
						    <p class="mb-3 font-normal text-gray-700">Language : English, Chinese, Korean</p>
					</div>
					<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
						<h5 class="mb-2 text-l font-bold tracking-tight text-gray-900">National Center for Global Health and Medicine</h5>
						    <p class="mb-3 font-normal text-gray-700">1 Chome-21-1 Toyama, Shinjuku City, Tokyo 162-8655</p>
						    <p class="mb-3 font-normal text-gray-700">Language : English, Chinese, Korean</p>
					</div>
				</div>
			</div>
		</aside>
	);
}

export default Sidebar;
