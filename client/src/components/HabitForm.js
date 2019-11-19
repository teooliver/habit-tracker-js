import React, { useState } from "react";
import { connect } from "react-redux";
import { createHabit } from "../redux/actions";

const HabitForm = ({ createHabit }) => {
  const [formData, setFormData] = useState({
    name: ""
  });

  const onChange = e => {
    return setFormData({ name: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    createHabit(formData);
    setFormData({
      name: ""
    });
  };

  const { name } = formData;

  return (
    <div>
      <form action="" onSubmit={e => handleSubmit(e)}>
        <label htmlFor="name">Create New Habit</label>
        <input
          id="name"
          name="name"
          value={name}
          type="text"
          onChange={e => onChange(e)}
        />
      </form>
    </div>
  );
};

export default connect(null, { createHabit })(HabitForm);
