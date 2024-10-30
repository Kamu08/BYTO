import React, { useState } from "react";
import p1 from "../assets/xs.png";
import p2 from "../assets/sm.png";
import p3 from "../assets/s.png";
import p4 from "../assets/m.png";
import p5 from "../assets/L.png";
import p6 from "../assets/xl.png";
import { FaWeightHanging } from "react-icons/fa";
import VehicleDetailsForm from "./VehicleDetails";

const RentVeh = () => {
    const [selectedTab, setSelectedTab] = useState("light");
    const [showModal, setShowModal] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState(null);

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const handleKnowMoreClick = (vehicle) => {
        setSelectedVehicle(vehicle);
        setShowModal(true);
    };

    const renderCarts = () => {
        const vehicles = selectedTab === "light" ? [
            { img: p1, weight: "250 - 500 kg", price: "₹15/km", name: "3 Wheeler" },
            { img: p2, weight: "500 - 750 kg", price: "₹15/km", name: "Tata Ace" },
            { img: p3, weight: "750 - 1000 kg", price: "₹15/km", name: "Truck" }
        ] : [
            { img: p4, weight: "1000 - 1500 kg", price: "₹17/km", name: "Heavy Truck 1" },
            { img: p5, weight: "1500 - 2000 kg", price: "₹17/km", name: "Heavy Truck 2" },
            { img: p6, weight: "above 2000 kg", price: "₹17/km", name: "Heavy Truck 3" }
        ];

        return (
            <div className="grid gap-6 sm:grid-cols-3 p-10">
                {vehicles.map((vehicle, index) => (
                    <div key={index} className="group relative flex flex-col items-center overflow-hidden rounded-lg bg-white p-6 shadow-lg">
                        <img src={vehicle.img} alt={vehicle.name} className="w-44 h-44" />
                        <div className="relative flex flex-col items-center bg-white p-4 text-center mt-4">
                          <div className="flex items-center justify-center">
                          <FaWeightHanging className="text-orange-500 mr-2" />
                            <span className="text-lg font-bold text-gray-800 lg:text-xl">
                                {vehicle.weight}
                            </span>
                            </div>  
                            <span>Starting from {vehicle.price}</span>
                            <button onClick={() => handleKnowMoreClick(vehicle)} className="text-blue-500 mt-2">
                                Know more
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-10 md:mb-16 text-center">
                    <div className="flex items-center justify-center">
                        <h2 className="text-xl font-bold text-gray-700">
                            Book Your Vehicle
                        </h2>
                    </div>
                    <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-2 mb-4"></span>
                    <p className="max-w-md mx-auto text-gray-600 mb-6">
                        Book a vehicle easily and quickly for all your transportation needs.
                        We provide reliable and efficient vehicle booking services.
                    </p>

                    <div className="inline-flex">
                        <button
                            onClick={() => handleTabClick("light")}
                            className={`px-4 py-2 font-semibold ${selectedTab === "light" ? "text-orange-500 border-b-2 border-orange-300" : "text-gray-600"}`}
                        >
                            Light (below 1000kg)
                        </button>
                        <button
                            onClick={() => handleTabClick("heavy")}
                            className={`px-4 py-2 font-semibold ${selectedTab === "heavy" ? "text-orange-500 border-b-2 border-orange-300" : "text-gray-600"}`}
                        >
                            Heavy (above 1000kg)
                        </button>
                    </div>
                </div>
                {renderCarts()}
                {showModal && <VehicleDetailsForm vehicle={selectedVehicle} onClose={() => setShowModal(false)} />}
            </div>
        </div>
    );
};

export default RentVeh;
