import React from "react";
import List from "./List";

interface TitledListProps {
  title: string;
  points: string[];
}

const TitledList = (props: TitledListProps) => {
  return (
    <>
      <p>{props.title}</p>
      <List points={props.points} />
    </>
  );
};

export default TitledList;
