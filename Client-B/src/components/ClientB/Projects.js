import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Properties({ data }) {
  //console.log(data);
  const [isAvailable, setIsAvailable] = useState(false);
  const [category, setCategory] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const uniqueCategory = [...new Set(data.map((tag) => tag.category))];
  //console.log(uniqueCategory);

  //display project on select of a category
  const showAllProjects = (selectedCategory) => {
    setCategory(selectedCategory);
    let projects = data.filter((d) => d.category === selectedCategory);
    setSelectedCategories(projects);
  };

  //show only available projects in the selected category
  const showAvailableProject = (selectedCategory) => {
    setCategory(selectedCategory);
    let projects = data.filter(
      (d) => d.category === selectedCategory && d.availableSlots > 0
    );
    setSelectedCategories(projects);
  };

  //toggle project availability
  const toggleAvailability = (e) => {
    const isChecked = e.target.checked;
    if (isChecked === true) {
      setIsAvailable(true);
      showAvailableProject(category);
    } else if (isChecked === false) {
      setIsAvailable(false);
      showAllProjects(category);
    }
  };

  //console.log("available: ", isAvailable);
  //console.log("project: ", selectedCategories);

  return (
    <div className="container my-3 ">
      <div className="flex flex-row gap-1">
        {/* Left Side */}
        <div className="basis-1/6  box-border h-70 w-32 p-1 sm:p-4 border-4">
          <h2 className="text-2xl py-3">Categories</h2>
          <ul>
            {uniqueCategory.map((category, index) => (
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
                      ? showAllProjects(category)
                      : showAvailableProject(category);
                  }}
                />
                {category}
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
                onClick={(e) => {
                  toggleAvailability(e);
                }}
              />
              Show available only
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="basis-5/6 box-border h-70 w-32 p-4 border-4 flex flex-col justify-center gap-6">
          {selectedCategories.map((prop) => (
            <div key={prop?.id} className="flex flex-col md:flex-row">
              <Image
                src={prop?.img}
                alt={prop?.name}
                width={300}
                height={250}
              />
              <div className=" box-border border-2 p-6 w-300 md:w-500">
                <p className="text-xl pb-3 font-semibold">{prop?.name}</p>
                <div className="flex flex-col md:flex-row gap-5 md:mt-20">
                  <div>
                    <p className=" py-2 md:py-0 ">
                      Project goal: {prop?.projectGoal}
                      <i>e</i>
                    </p>
                    <p className=" py-2 md:py-0">
                      Total slots: {prop?.totalSlots}
                    </p>
                    <p className=" py-2 md:py-0">
                      Available slots: {prop?.availableSlots}
                    </p>
                  </div>

                  <div>
                    <Link
                      href={`/projects/checkout/${prop?.id}`}
                      passHref={true}
                    >
                      <button className="w-24 h-12 box-border border-2  rounded-lg bg-sky-400 my-4 cursor-pointer md:mt-6 ">
                        Fund
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Properties;
