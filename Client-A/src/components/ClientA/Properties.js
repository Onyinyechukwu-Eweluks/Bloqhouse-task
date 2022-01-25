import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Properties({ data }) {
  //console.log(data);
  const [isAvailable, setIsAvailable] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [location, setLocation] = useState("");

  const uniqueLocation = [...new Set(data.map((tag) => tag.location))];
  //console.log(uniqueLocation);

  //display properties on select of a location
  const showAllProperty = (selectedLocation) => {
    setLocation(selectedLocation);
    const projects = data.filter((d) => d.location === selectedLocation);
    setSelectedLocation(projects);
  };

  //show only available properties in the selected location
  const showAvailableProperty = (selectedLocation) => {
    setLocation(selectedLocation);
    const projects = data.filter(
      (d) => d.location === selectedLocation && d.availableShares > 0
    );
    setSelectedLocation(projects);
  };

  //toggle property availability
  const toggleAvailability = (e) => {
    const isChecked = e.target.checked;
    if (isChecked === true) {
      setIsAvailable(true);
      showAvailableProperty(location);
    } else if (isChecked === false) {
      setIsAvailable(false);
      showAllProperty(location);
    }
  };

  //console.log("property: ", locationProp);

  return (
    <div className="container my-3 ">
      <div className="flex flex-row gap-1">
        {/* Left Side */}
        <div className="basis-1/6  box-border h-70 w-32 p-1 sm:p-4 border-4">
          <h2 className="text-2xl py-3">Locations</h2>
          <ul>
            {uniqueLocation.map((location, index) => (
              <li
                key={index}
                className="text-lg py-3 flex flex-column gap-2 cursor-pointer "
              >
                <input
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-sky-400 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault10"
                  onClick={() => {
                    !isAvailable
                      ? showAllProperty(location)
                      : showAvailableProperty(location);
                  }}
                />
                {location}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl py-3">Availability</h2>
          <ul>
            <li className="text-lg  flex flex-column gap-2">
              <input
                className="form-check-input appearance-none h-4 w-4 border border-sky-400 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault3"
                onClick={(e) => toggleAvailability(e)}
              />
              Show available only
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="basis-5/6 box-border h-70 w-32 p-4 border-4 flex flex-col sm:flex-row gap-6">
          {selectedLocation.map((prop) => (
            <div key={prop?.id} className="flex flex-col">
              <Image
                src={prop?.img}
                alt={prop?.name}
                width={300}
                height={200}
              />
              <div className="box-border border-2 w-300 grid justify-items-center ">
                <p className="text-xl py-3 font-semibold">{prop?.name}</p>
                <p className=" py-2">
                  Total value: {prop?.totalValue}
                  <i>e</i>
                </p>
                <p className=" py-2">Total shares: {prop?.totalShares}</p>
                <p className=" py-2">
                  Available shares: {prop?.availableShares}
                </p>

                <Link href={`/properties/checkout/${prop?.id}`} passHref={true}>
                  <button className="w-24 h-12 box-border border-2 rounded-lg bg-sky-400 my-4 cursor-pointer  ">
                    Invest
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Properties;
