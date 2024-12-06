import React from "react";

const LocationSearchPanel = (props) => {
  console.log(props);

  const locations = [
    "25B, near kapoor cafe, pizza plaza saki naka kerani road mumbai",
    "25B, lucky hotel and cafe, mrol naka   kerani road mumbai",
    "28B, jhat nagr kurla do road , mumbai",
    "7 rasta jhuhu andheri  , mumbai",
  ];
  return (
    <div>
      {/* this is just a sample data  */}
      {locations.map((item, ind) => {
        return (
          <div
            key={ind}
            onClick={() => {
              props.setVehiclePanelOpen(true);
              props.setPanelOpen(false);
            }}
            className="flex  gap-4 border-2 border-gray-50 active:border-black p-3 rounded-xl  items-center justify-start my-2"
          >
            <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill  text-xl"></i>
            </h2>
            <h4 className="font-medium">{item}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
