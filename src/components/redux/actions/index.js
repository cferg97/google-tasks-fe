export const GET_PLANNER_DATA = "GET_PLANNER_DATA";
export const DELETE_PLANNER = "DELETE_PLANNER";

const URL = "https://google-task-clone-be-production.up.railway.app";
export const getDataAction = () => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(`${URL}/planners`);
      let fetchedData = await response.json();
      if (response.ok) {
        dispatch({
          type: GET_PLANNER_DATA,
          payload: fetchedData,
        });
      } else {
        console.log("Error fetching planner data");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const newTaskAction = (data) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return async (dispatch) => {
    try {
      let response = await fetch(`${URL}/tasks`, options);
      if (response.ok) {
        dispatch(getDataAction());
      } else {
        console.log("Couldn't post.");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const newPlannerAction = (data) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return async (dispatch) => {
    try {
      let response = await fetch(`${URL}/planners`, options);
      if (response.ok) {
        dispatch(getDataAction());
      } else {
        console.log("Couldn't create planner.");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const changePlannerAction = (id, data) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return async (dispatch) => {
    try {
      let response = await fetch(`${URL}/planners/${id}`, options);
      if (response.ok) {
        dispatch(getDataAction());
      } else {
        console.log("Couldn't edit planner");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const editTaskAction = (id, data) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return async (dispatch) => {
    try {
      let response = await fetch(`${URL}/tasks/${id}`, options);
      if (response.ok) {
        dispatch(getDataAction());
      } else {
        console.log("Couldn't edit planner");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const deletePlannerAction = (id) => {
  const options = {
    method: "DELETE",
  };
  return async (dispatch) => {
    try {
      let response = await fetch(`${URL}/planners/${id}`, options);
      if (response.ok) {
        dispatch(getDataAction());
      } else {
        console.log("Couldn't delete planner");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteTaskAction = (id) => {
  const options = {
    method: "DELETE",
  };
  return async (dispatch) => {
    try {
      let response = await fetch(`${URL}/tasks/${id}`, options);
      if (response.ok) {
        dispatch(getDataAction());
      } else {
        console.log("Couldn't delete task");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
