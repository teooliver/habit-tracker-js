import React from "react";
import SelectMonth from "./SelectMonth";
import HabitForm from "./HabitForm";
import MainTable from "./MainTable";

const HabitTracker = () => {
  return (
    <div>
      <h1>Habit Tracker</h1>
      <SelectMonth />
      <HabitForm />
      <MainTable />
    </div>
  );
};

export default HabitTracker;
