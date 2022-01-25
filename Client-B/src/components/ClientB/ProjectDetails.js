import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function PropertyDetails({ data }) {
  const router = useRouter();
  const [fundSlot, setFundSlot] = useState(0);
  const [slotsAvailable, setSlotsAvailable] = useState(data.availableSlots);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountDiff = Number(slotsAvailable) - fundSlot;
    setSlotsAvailable(amountDiff);
    router.push("/projects");
  };

  return (
    <div className="container my-6 ">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="md:basis-1/2  h-70 w-fit flex flex-col  box-border border-2">
          <div className="basis-1/4  grid justify-center ">
            <p className="text-4xl py-3 font-semibold ">Project Description</p>
          </div>
          <div className="basis-3/4 m-5 box-border border-2  grid justify-center ">
            <p className="text-xl p-5 font-bold ">{data.description}</p>
          </div>
        </div>
        <div className="md:basis-1/2 p-5 sm:p-4 h-70 w-fit box-border border-2">
          <div className="flex flex-row">
            <p className="text-2xl py-3 font-semibold basis-1/2">
              Checkout Form
            </p>
            <p className="text-2xl pl-3 font-semibold  grid justify-end basis-1/2">
              {data?.name}
            </p>
          </div>

          <div className="my-5">
            <p className="text-xl py-3">Available Slots: {slotsAvailable}</p>
            <p className="text-xl py-3">
              Slot size: {data?.availableSlots} <i>e</i>
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-row my-5">
              <input
                type="number"
                placeholder="Shares to buy"
                className="basis-1/3 box-border border-2 border-slate-400 px-3
              py-1.5 h-10"
                min="1"
                defaultValue={fundSlot}
                onChange={(e) => setFundSlot(e.target.value)}
              />
              <p className="basis-1/3 text-xl grid justify-center">=</p>
              <p className="basis-1/3 text-xl">
                <i>x e</i>
              </p>
            </div>

            <div>
              <button className="w-32 h-12 box-border border-2 rounded-lg bg-sky-400 my-4 cursor-pointer ">
                Fund
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Link href="/projects" passHref={true}>
          <button className="w-32 h-12 box-border border-2 rounded-lg border-sky-400 my-4 cursor-pointer ">
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PropertyDetails;
