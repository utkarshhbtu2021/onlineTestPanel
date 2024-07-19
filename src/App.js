import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import StudentList from "./modules/students/studentList";
import AddStudent from "./modules/students/addStudent";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="main">
        <StudentList />
        {/* <AddStudent /> */}
      </div>
    </div>
  );
}

export default App;
