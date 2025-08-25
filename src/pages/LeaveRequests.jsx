import React, { useState } from "react";

const LeaveRequests = () => {
  const [leaveForm, setLeaveForm] = useState({
    from: "",
    to: "",
    reason: "",
  });

  const handleChange = (e) => {
    setLeaveForm({ ...leaveForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Leave request submitted!");
    setLeaveForm({ from: "", to: "", reason: "" });
  };

  return (
    <div className="leave-requests">
      <h2>Apply for Leave</h2>
      <form onSubmit={handleSubmit}>
        <label>From:</label>
        <input type="date" name="from" value={leaveForm.from} onChange={handleChange} required />
        
        <label>To:</label>
        <input type="date" name="to" value={leaveForm.to} onChange={handleChange} required />
        
        <label>Reason:</label>
        <textarea name="reason" value={leaveForm.reason} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LeaveRequests;
