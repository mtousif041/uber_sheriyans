import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div>
      <h5
        className="absolute w-[93%] p-1 text-center top-0 "
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Finish this ride to End</h3>

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
        <div className="mt-6 w-full">
          <Link
            to="/captain-home"
            className="w-full mt-5 flex justify-center bg-green-600 text-white font-semibold p-2 rounded-lg"
          >
            Finish Ride
          </Link>
          <p className="text-gray-500 mt-6 text-sm ">
            click on finish the ride if you have completed the payment.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
