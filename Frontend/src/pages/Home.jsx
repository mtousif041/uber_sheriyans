import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null); // ref basically kisi bhi element ko select krne ka kaam krta hai
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false); // isse kiya hoga ki vehicle ka panel kab khulega jab app kisi bhi location pr click krnge
  const vehiclePanelRef = useRef(null);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const confirmRidePanelRef = useRef(null);
  ////////////////////
  const [vehicleFound, setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null);
  ////////////////////
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const waitingForDriverRef = useRef(null);

  const submitHandler = () => {
    e.preventDefault();
  };

  //gsap ek hook hai jo GSAP hume provide krta hai
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          // yaani useRef ka use krte hue mene ref={panelRef} waale div ko target kr liya
          height: "70%",
          padding: 24,
          // opacity: 1,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1, //yaani jab bhi gsap pr click hota hai to panelcloseRef ki opacity krdena 1
        });
      } else {
        gsap.to(panelRef.current, {
          // yaani agr panael open nhai hai to wapas iski height 0 krdo
          height: "0%",
          // opacity: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0, //yaani jab  gsap pr click  nhai hota hai to panelcloseRef ki opacity krdena 0
        });
      }
    },
    [panelOpen]
  ); //lagta hai useGSAP hook useEffect hook ki trha hi hai

  ///this useGSAP for vehicle panel open krne ke liye
  useGSAP(
    function () {
      if (vehiclePanelOpen) {
        gsap.to(vehiclePanelRef.current, {
          //vehiclePanelRef.current yaani ki jo vehiclePanelRef ki jo current value hai usko mene target kiya , {} fir usme ye ye change krde
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          //vehiclePanelRef.current yaani ki jo vehiclePanelRef ki jo current value hai usko mene target kiya , {} fir usme ye ye change krde
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanelOpen]
  );
  ///this useGSAP for ConfirmedRide.jsx , yaani confirmed ride pr click krke open krne ke liye
  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          //vehiclePanelRef.current yaani ki jo vehiclePanelRef ki jo current value hai usko mene target kiya , {} fir usme ye ye change krde
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          //vehiclePanelRef.current yaani ki jo vehiclePanelRef ki jo current value hai usko mene target kiya , {} fir usme ye ye change krde
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );
  ///this useGSAP for LookingForDriver.jsx ,
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );
  ///this useGSAP for WaitingForDriver ,
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://logospng.org/download/uber/logo-uber-4096.png"
        alt="logo"
      />
      <div className="h-screen w-screen ">
        {/* image for tempraarory  */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 top-6 right-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-green-500 rounded-full"></div>
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              placeholder="Add a Pick-up location"
            />
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white  h-0">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>

      {/* /// */}
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-10 pt-12"
      >
        <VehiclePanel
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanelOpen={setVehiclePanelOpen}
        />
      </div>
      {/* ///// */}
      <div
        ref={confirmRidePanelRef}
        className="fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-6 pt-12"
      >
        <ConfirmedRide
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFound={setVehicleFound}
          setVehiclePanelOpen={setVehiclePanelOpen} ////********* */
        />
      </div>
      {/* //// */}
      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-6 pt-12"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      {/* //// */}
      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10 bg-white bottom-0  px-3 py-6 pt-12"
      >
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
