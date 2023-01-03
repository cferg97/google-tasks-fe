import { Modal, Button, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTaskAction } from "./redux/actions";
import { deleteTaskAction } from "./redux/actions";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const EditTaskModal = (props) => {
  const dispatch = useDispatch();
  const [taskContent, setTaskContent] = useState("");
  const [taskDone, setTaskDone] = useState(false);

  const taskToSend = {
    content: taskContent,
    done: taskDone,
  };

  const onChangeHandler = (value, fieldToSet) => {
    fieldToSet(value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(editTaskAction(props.task.id, taskToSend));
  };

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.close}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Task Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                defaultValue={props.task.content}
                onChange={(e) =>
                  onChangeHandler(e.target.value, setTaskContent)
                }
              />
            </Form.Group>
            <Form.Control
              as="select"
              onChange={(e) => onChangeHandler(e.target.value, setTaskDone)}
              defaultValue={props.task.done}
            >
              <option value="true">Done</option>
              <option value="false">Not Done</option>
            </Form.Control>
            <Row className="mt-2">
              <Button
                className="mr-2 mx-2"
                variant="secondary"
                onClick={props.close}
              >
                Close
              </Button>
              <Button
                type="submit"
                variant="primary"
                onClick={(e) => {
                  onSubmitHandler(e);
                  props.close();
                }}
              >
                Submit
              </Button>
              <Button
                className="ml-auto mx-2"
                variant="danger"
                onClick={() => {
                  dispatch(deleteTaskAction(props.task.id));
                  props.close();
                }}
              >
                <DeleteForeverIcon />
              </Button>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditTaskModal;
