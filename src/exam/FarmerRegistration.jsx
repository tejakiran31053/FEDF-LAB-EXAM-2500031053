import React, { useState } from "react";

const Register = () => {

  const [farmer, setFarmer] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    password: "",
    acres: ""
  });

  const handleChange = (e) => {
    setFarmer({ ...farmer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const farmers = JSON.parse(localStorage.getItem("farmers")) || [];

    farmers.push(farmer);

    localStorage.setItem("farmers", JSON.stringify(farmers));

    alert("Farmer Registered Successfully");

    setFarmer({
      name: "",
      age: "",
      gender: "",
      email: "",
      password: "",
      acres: ""
    });
  };

  return (
    <div>
      <h2>Farmer Registration</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Farmer Name"
          value={farmer.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={farmer.age}
          onChange={handleChange}
          required
        />

        <br /><br />

        <select
          name="gender"
          value={farmer.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={farmer.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={farmer.password}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="number"
          name="acres"
          placeholder="Acres of Land"
          value={farmer.acres}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">Register Farmer</button>

      </form>
    </div>
  );
};

export default Register;