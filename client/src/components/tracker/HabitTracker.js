import React from "react";
import SelectMonth from "./SelectMonth";
import HabitForm from "./HabitForm";
import MainTable from "./MainTable";

const HabitTracker = () => {
  return (
    <>
      <SelectMonth />
      <HabitForm />
      <div className="table-center">
        <MainTable />
      </div>
    </>
  );
};

export default HabitTracker;
