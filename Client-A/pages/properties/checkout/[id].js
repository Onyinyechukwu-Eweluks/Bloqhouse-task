import React from "react";
import PropertyDetails from "../../../src/components/ClientA/PropertyDetails";
const db = require("../../../backend/dbA.json");

export const getStaticPaths = async () => {
  const paths = db.properties.map((property) => ({
    params: { id: property.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const property = db.properties.find((pro) => pro.id.toString() === params.id);
  return {
    props: {
      property: property,
    },
  };
};

function PropDetails({ property }) {
  //console.log("propertyD: ", property);
  return (
    <div>
      <p className="text-2xl grid justify-center pt-5">Property Details</p>
      <PropertyDetails data={property} />
    </div>
  );
}

export default PropDetails;
