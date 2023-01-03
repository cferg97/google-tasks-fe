import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataAction } from "./components/redux/actions";
import { Container, Row, Col, Button } from "react-bootstrap";
import MyNav from "./components/nav";
import Tasklists from "./components/tasklists";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { deletePlannerAction } from "./components/redux/actions";
import { changePlannerAction } from "./components/redux/actions";
function App() {
  const dispatch = useDispatch();
  const planners = useSelector((state) => state.planners);
  useEffect(() => {
    dispatch(getDataAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [showDelete, setShowDelete] = useState(false);
  const [plannerName, setPlannerName] = useState("");

  const plannerToSend = {
    name: plannerName,
  };

  const onChangeHandler = (value, fieldToSet) => {
    fieldToSet(value);
  };

  const onClickHandler = () => setShowDelete(!showDelete);
  return (
    <>
      <Button variant="info" className="mx-2 my-2" onClick={onClickHandler}>
        {showDelete ? "Done" : "Edit Planners"} <EditIcon />
      </Button>
      <Container fluid className="mt-4">
        <Row
          className="mx-auto main-planners"
          style={{ width: "90%", minHeight: "20rem" }}
        >
          {planners &&
            planners.map((planner) => (
              <Col md={4} className="text-center">
                <h2>{planner.Planner.name}</h2>
                <input
                  className={showDelete ? "mb-2" : "hidden"}
                  type="text"
                  defaultValue={planner.Planner.name}
                  onChange={(e) =>
                    onChangeHandler(e.target.value, setPlannerName)
                  }
                />
                <Row className="justify-content-center">
                  <Button
                    onClick={() =>
                      dispatch(
                        changePlannerAction(planner.Planner.id, plannerToSend)
                      )
                    }
                    className={showDelete ? "mr-2" : "hidden"}
                  >
                    Change name
                  </Button>
                  <span className={showDelete ? "" : "hidden"}>
                    <Button
                      variant="danger"
                      onClick={() =>
                        dispatch(deletePlannerAction(planner.Planner.id))
                      }
                    >
                      <DeleteIcon />
                    </Button>
                  </span>
                </Row>

                <Tasklists tasks={planner.tasks} />
              </Col>
            ))}
        </Row>
      </Container>
      <MyNav />
    </>
  );
}

export default App;
