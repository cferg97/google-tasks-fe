import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import EditTaskModal from "./edittaskmodal";

const Tasklists = (props) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  return (
    <>
      {props.tasks && (
        <div className="text-center mb-2 mt-2">
          <Card>
            <ListGroup variant="flush" className="text-center">
              {props.tasks.map((task) => (
                <ListGroup.Item>
                  {task.content}{" "}
                  <span
                    className="text-muted edit-icon"
                    onClick={handleShowEdit}
                  >
                    <EditIcon />
                  </span>
                  <EditTaskModal
                    show={showEdit}
                    open={handleShowEdit}
                    close={handleCloseEdit}
                    task={task}
                  />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </div>
      )}
    </>
  );
};

export default Tasklists;
