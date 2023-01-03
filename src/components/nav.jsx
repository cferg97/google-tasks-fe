import { Navbar, Nav, Button } from "react-bootstrap";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import TaskModal from "./taskmodal";
import PlannerModal from "./plannermodal";

const MyNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showAddPlan, setShowAddPlan] = useState(false);
  const handlePlanClose = () => setShowAddPlan(false);
  const handlePlanShow = () => setShowAddPlan(true);

  return (
    <>
      <Navbar className="custom-nav" variant="dark" expand="lg">
        <Navbar.Brand href="#home" className="p-0">
          <div className="flex flex-col text-center fit-content p-0 m-0">
            <span className="">
              <CalendarTodayIcon />
            </span>
            <br />
            <span>Tasks</span>
          </div>
        </Navbar.Brand>
        <Navbar.Text className="ml-5">
          <Button className="mr-4" variant="success" onClick={handleShow}>
            Add New Task <AddIcon />
          </Button>
          <Button className="mr-4" variant="info" onClick={handlePlanShow}>
            Add Planner <AddIcon />
          </Button>

        </Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
        </Navbar.Collapse>
      </Navbar>

      <TaskModal open={show} show={handleShow} close={handleClose} />
      <PlannerModal
        open={showAddPlan}
        show={handlePlanShow}
        close={handlePlanClose}
      />
    </>
  );
};

export default MyNav;
