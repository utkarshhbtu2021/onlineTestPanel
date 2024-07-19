import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Switch,
  TablePagination,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./studentList.css";
import AddStudent from "./addStudent";
import Alert from "../../components/Alert";
const StudentList = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      fullName: "John Doe",
      course: "Computer Science",
      address: "123 Main St",
      mobileNumber: "123-456-7890",
      isActive: true,
    },
    {
      id: 2,
      fullName: "Jane Smith",
      course: "Mathematics",
      address: "456 Elm St",
      mobileNumber: "987-654-3210",
      isActive: false,
    },
    {
      id: 3,
      fullName: "Jane Smith",
      course: "Mathematics",
      address: "456 Elm St",
      mobileNumber: "987-654-3210",
      isActive: false,
    },
    {
      id: 4,
      fullName: "Jane Smith",
      course: "Mathematics",
      address: "456 Elm St",
      mobileNumber: "987-654-3210",
      isActive: false,
    },
    {
      id: 5,
      fullName: "Jane Smith",
      course: "Mathematics",
      address: "456 Elm St",
      mobileNumber: "987-654-3210",
      isActive: false,
    },
    {
      id: 6,
      fullName: "Jane Smith",
      course: "Mathematics",
      address: "456 Elm St",
      mobileNumber: "987-654-3210",
      isActive: false,
    },
    {
      id: 7,
      fullName: "Jane Smith",
      course: "Mathematics",
      address: "456 Elm St",
      mobileNumber: "987-654-3210",
      isActive: false,
    },
    {
      id: 8,
      fullName: "Jane Smith",
      course: "Mathematics",
      address: "456 Elm St",
      mobileNumber: "987-654-3210",
      isActive: false,
    },
    {
      id: 9,
      fullName: "Jane Smith",
      course: "Mathematics",
      address: "456 Elm St",
      mobileNumber: "987-654-3210",
      isActive: false,
    },
    {
      id: 10,
      fullName: "Jane Smith",
      course: "Mathematics",
      address: "456 Elm St",
      mobileNumber: "987-654-3210",
      isActive: false,
    },
    {
      id: 11,
      fullName: "Jane Smith",
      course: "Mathematics",
      address: "456 Elm St",
      mobileNumber: "987-654-3210",
      isActive: false,
    },
    {
      id: 12,
      fullName: "Jane Smith",
      course: "Mathematics",
      address: "456 Elm St",
      mobileNumber: "987-654-3210",
      isActive: false,
    },
    {
      id: 13,
      fullName: "Jane Smith",
      course: "Mathematics",
      address: "456 Elm St",
      mobileNumber: "987-654-3210",
      isActive: false,
    },
  ]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [addStudent, setAddStudent] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    msg: "Are You sure to delete ?",
    img: "",
  });
  const handleEdit = (id) => {
    console.log(`Edit student with id: ${id}`);
  };

  const handleDelete = (id) => {
    let alrtLoc = alert;
    alrtLoc.open = true;
    setAlert(alrtLoc);
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleToggleActive = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, isActive: !student.isActive }
          : student
      )
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      {<Alert alert={alert} />}
      {addStudent && <AddStudent setAddStudent={setAddStudent} />}
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <button
          onClick={() => {
            setAddStudent(true);
          }}
        >
          Add Student
        </button>
      </div>
      <Paper>
        <TableContainer className="table-container">
          <Table stickyHeader>
            <TableHead>
              <TableRow className="sticky-header">
                <TableCell>Full Name</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Mobile Number</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.fullName}</TableCell>
                    <TableCell>{student.course}</TableCell>
                    <TableCell>{student.address}</TableCell>
                    <TableCell>{student.mobileNumber}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEdit(student.id)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(student.id)}>
                        <DeleteIcon />
                      </IconButton>
                      <Switch
                        checked={student.isActive}
                        onChange={() => handleToggleActive(student.id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="sticky-footer">
          <TablePagination
            component="div"
            count={students.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </div>
      </Paper>
    </>
  );
};

export default StudentList;
