import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        className="absolute w-[93%] p-1 text-center top-0 "
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Availabe</h3>

      <div className="flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg">
        <div className=" flex items-center gap-3 ">
          <img
            className="h-12 rounded-full object-cover w-10"
            src="http://img.izismile.com/img/img3/20100428/640/she_makes_random_640_03.jpg"
            alt="img"
          />
          <h2 className="text-lg font-medium">Harsh Ptael</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 ">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium ">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Khankariya road, Mumbai
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 ">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium ">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Khankariya road, Mumbai
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3  ">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium ">₹ 193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Payment By Cash</p>
            </div>
          </div>
        </div>
        <div className="flex w-full mt-5  items-center justify-between">
          <button
            onClick={() => {
              props.setRidePopupPanel(false);
            }}
            className=" bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg"
          >
            Ignore
          </button>
          <button
            onClick={() => {
              props.setConfirmRidePopupPanel(true);
            }}
            className=" bg-green-600 text-white font-semibold p-3 px-10 rounded-lg"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
