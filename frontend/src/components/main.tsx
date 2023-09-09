import Map from "../components/ui/map"; 
import Sidebar from "../components/ui/sidebar";
import { Hospital } from "./types";

function Main() {

  const hospitals: Hospital[] = [
    {
      name: "メディカル新中野",
      address: "東京都中野区中央4-5-2",
      languages: [],
      longitude: 139.66795,
      latitude: 35.697641,
    },
    {
      name: "新中野内科外科中央クリニック",
      address: "東京都中野区中央3丁目31-1FLATone新中野",
      languages: [],
      longitude: 139.673178,
      latitude: 35.69783,
    },
    {
      name: "塔ノ山医院",
      address: "東京都中野区中央2-14-9",
      languages: [],
      longitude: 139.681825,
      latitude: 35.699961,
    },
    {
      name: "医療法人社団いなほ会頭とからだのクリニックかねなか脳神経外科",
      address: "東京都中野区中央4-4-2",
      languages: ["en"],
      longitude: 139.668946,
      latitude: 35.697647,
    },
    {
      name: "医療法人 虹耀会 中野坂上米沢医院",
      address: "東京都中野区中央2-4-3",
      languages: ["en"],
      longitude: 139.68041,
      latitude: 35.697582,
    },
    {
      name: "医療法人社団みやび　みやびハート＆ケアクリニック",
      address: "東京都中野区中央3‐35-4",
      languages: ["en"],
      longitude: 139.67103,
      latitude: 35.698172,
    },
    {
      name: "中野中央クリニック",
      address: "東京都中野区中央２－５９－１８",
      languages: [],
      longitude: 139.67698,
      latitude: 35.701506,
    },
    {
      name: "セイメイ内科",
      address: "東京都中野区中央1丁目25番5号",
      languages: [],
      longitude: 139.685911,
      latitude: 35.701444,
    },
  ];

  return (
    <div className="app-container">
      <Sidebar hospitals={hospitals}/>
      <div className="map-wrapper">
        <Map hospitals={hospitals}/>
      </div>
    </div>
  )
}

export default Main;
