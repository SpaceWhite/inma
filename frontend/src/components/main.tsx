import Map from "../components/ui/map"; 
import Sidebar from "../components/ui/sidebar";

function Main() {
  return (
    <div className="app-container">
      <Sidebar/>
      <div className="map-wrapper">
        <Map/>
      </div>
    </div>
  )
}

export default Main;
