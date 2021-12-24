import React from "react";
import { AffairType } from "./HW2";

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType;
  deleteAffairCallback: any; // need to fix any
};

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <span>{props.affair._id}</span>&nbsp;
        <span>{props.affair.name}</span>&nbsp;
        <span>{props.affair.priority}</span>&nbsp;
        <button onClick={deleteCallback}>X</button>
      </div>
    </div>
  );
}

export default Affair;
