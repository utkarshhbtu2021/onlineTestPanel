import React, { useState } from "react";
import { Switch, Button, Box, TextField } from "@mui/material";
import "./studentList.css";

const AddStudent = ({ setAddStudent }) => {
  const [newStudent, setNewStudent] = useState({
    fullName: "",
    course: "",
    address: "",
    mobileNumber: "",
    isActive: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewStudent((prevStudent) => ({
      ...prevStudent,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="popBackground">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2>Add New Student</h2>
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="fullName"
          value={newStudent.fullName}
          onChange={handleChange}
        />
        <TextField
          label="Course"
          variant="outlined"
          fullWidth
          margin="normal"
          name="course"
          value={newStudent.course}
          onChange={handleChange}
        />
        <TextField
          label="Address"
          variant="outlined"
          fullWidth
          margin="normal"
          name="address"
          value={newStudent.address}
          onChange={handleChange}
        />
        <TextField
          label="Mobile Number"
          variant="outlined"
          fullWidth
          margin="normal"
          name="mobileNumber"
          value={newStudent.mobileNumber}
          onChange={handleChange}
        />
        <Switch
          checked={newStudent.isActive}
          onChange={handleChange}
          name="isActive"
          inputProps={{ "aria-label": "Active" }}
        />
        Active
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setAddStudent(false);
            }}
          >
            Add Student
          </Button>
        </Box>
      </Box>
    </div>
  );
};
export default AddStudent;
