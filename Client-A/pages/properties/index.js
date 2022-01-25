import React from "react";
import Properties from "../../src/components/ClientA/Properties";
const db = require("../../backend/dbA.json");

export const getStaticProps = async () => {
  return {
    props: {
      db,
    },
  };
};
const Index = ({ db }) => {
  //console.log("db: ", db);
  return (
    <div>
      <h1 className="text-2xl grid justify-center pt-5">
        Select A Location to View Properties
      </h1>
      <Properties data={db.properties} />
    </div>
  );
};

export default Index;
