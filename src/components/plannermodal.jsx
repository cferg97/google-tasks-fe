import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { newPlannerAction } from "./redux/actions";

const PlannerModal = (props) => {
  const dispatch = useDispatch();
  const [plannerName, setPlannerName] = useState("");

  const plannerToSend = {
    name: plannerName,
  };

  const onChangeHandler = (value, fieldToSet) => {
    fieldToSet(value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(newPlannerAction(plannerToSend));
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
          <Modal.Title>Add a new Planner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Planner Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="To-Do"
                onChange={(e) =>
                  onChangeHandler(e.target.value, setPlannerName)
                }
              />
            </Form.Group>
            <Button className="mr-2" variant="secondary" onClick={props.close}>
              Close
            </Button>
            <Button
              type="submit"
              onClick={(e) => {
                onSubmitHandler(e);
                props.close();
              }}
              variant="primary"
            >
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PlannerModal;
