import React from "react";
import FormContainer from "../Form/Form";
import TableComponent from "../Table/Table";

function Herosection() {
  return (
    <div className="d-flex p-5 bg-secondary h-100 gap-3">
      <div className="col-4">
        <FormContainer />
      </div>
      <div className="col-8">
        <TableComponent />
      </div>
    </div>
  );
}

export default Herosection;
