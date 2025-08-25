import React from "react";

const EmployeeDetails = () => {
  const employee = {
    name: "John Doe",
    designation: "Software Engineer",
    photo: "https://via.placeholder.com/150",
    workingHours: 160,
    overtime: 20,
  };

  return (
    <div className="employee-details">
      <img src={employee.photo} alt="Employee" className="employee-photo" />
      <h2>{employee.name}</h2>
      <p>{employee.designation}</p>
      <p>Working Hours: {employee.workingHours} hrs</p>
      <p>Overtime: {employee.overtime} hrs</p>
    </div>
  );
};

export default EmployeeDetails;
