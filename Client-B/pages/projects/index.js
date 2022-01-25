import React from "react";
import Projects from "../../src/components/ClientB/Projects";
const db = require("../../backend/dbB.json");

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
        Select A Category to View Projects
      </h1>
      <Projects data={db.properties} />
    </div>
  );
};

export default Index;
