import React from "react";
import ProjectDetails from "../../../src/components/ClientB/ProjectDetails";
const db = require("../../../backend/dbB.json");

export const getStaticPaths = async () => {
  const paths = db.properties.map((Project) => ({
    params: { id: Project.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const Project = db.properties.find((pro) => pro.id.toString() === params.id);
  return {
    props: {
      Project: Project,
    },
  };
};

function PropDetails({ Project }) {
  //console.log("ProjectD: ", Project);
  return (
    <div>
      <p className="text-2xl grid justify-center pt-5">Project Details</p>
      <ProjectDetails data={Project} />
    </div>
  );
}

export default PropDetails;
