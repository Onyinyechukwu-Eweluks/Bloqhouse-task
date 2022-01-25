import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function PropertyDetails({ data }) {
  const router = useRouter();
  const [buyShares, setBuyShares] = useState(0);
  const [sharesAvailable, setSharesAvailable] = useState(data.availableShares);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountDiff = Number(sharesAvailable) - buyShares;
    setSharesAvailable(amountDiff);
    router.push("/properties");
  };

  return (
    <div className="container my-6 ">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="md:basis-1/2  h-70 w-fit">
          <Image src={data?.img} alt={data?.name} width={700} height={500} />
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
            <p className="text-xl py-3">Available Shares: {sharesAvailable}</p>
            <p className="text-xl py-3">
              Price per Shares: {data?.availableShares} <i>e</i>
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
                defaultValue={buyShares}
                onChange={(e) => setBuyShares(e.target.value)}
              />
              <p className="basis-1/3 text-xl grid justify-center">=</p>
              <p className="basis-1/3 text-xl">
                <i>x e</i>
              </p>
            </div>

            <div>
              <button className="w-32 h-12 box-border border-2 rounded-lg bg-sky-400 my-4 cursor-pointer ">
                Invest
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Link href="/properties" passHref={true}>
          <button className="w-32 h-12 box-border border-2 rounded-lg border-sky-400 my-4 cursor-pointer ">
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PropertyDetails;
