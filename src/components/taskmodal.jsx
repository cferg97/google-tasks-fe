import { Modal, Button, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { newTaskAction } from "./redux/actions";

const TaskModal = (props) => {
  const dispatch = useDispatch();
  const planners = useSelector((state) => state.planners);
  const [postContent, setPostContent] = useState("");
  const [plannerID, setPlannerID] = useState("");

  const taskToSend = {
    content: postContent,
    done: false,
    plannerID: plannerID,
  };

  console.log(taskToSend);

  const onChangeHandler = (value, fieldToSet) => {
    fieldToSet(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newTaskAction(taskToSend));
  };

  return (
    <>
      <Modal
        show={props.open}
        onHide={props.close}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a new task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form>
              <Form.Group>
                <Form.Label>Planner:</Form.Label>
                <br />
                <select
                  onChange={(e) =>
                    onChangeHandler(e.target.value, setPlannerID)
                  }
                >
                  <option value="" selected disabled hidden>
                    Choose a planner
                  </option>
                  {planners.map((planner) => (
                    <option value={planner.Planner.name}>
                      {planner.Planner.name}
                    </option>
                  ))}
                </select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Task:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) =>
                    onChangeHandler(e.target.value, setPostContent)
                  }
                />
              </Form.Group>
              <Button
                className="mr-2"
                variant="secondary"
                onClick={props.close}
              >
                Close
              </Button>
              <Button
                type="submit"
                variant="primary"
                onClick={(e) => {
                  handleSubmit(e);
                  props.close();
                }}
              >
                Submit
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TaskModal;
