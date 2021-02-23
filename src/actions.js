export const Action = Object.freeze({
  LoadStudents: 'LoadStudents',
  FinishAddingStudent: 'FinishAddingStudent',
  FinishDeletingStudent: 'FinishDeletingStudent',
  FinishEditingStudent: 'FinishEditingStudent',
});

const host = 'https://axisandallies-server.duckdns.org:8442'; 

function checkForErrors(response) {
  if (!response.ok) {
    alert("Failed to add/edit student!");
    throw Error(`${response.status}: ${response.statusText}`);
  }
  return response;
}

/*********************************************/

export function loadStudents(students) {
  return {
    type: Action.LoadStudents,
    payload: students,
  };
}

export function getStudents() {
  return dispatch => {
    fetch(`${host}/students`)
      .then(checkForErrors)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          dispatch(loadStudents(data.students));
        }
      })
      .catch(e => console.error(e));
  };
}

/*********************************************/

export function finishAddingStudent(student) {
  return {
    type: Action.FinishAddingStudent,
    payload: student,
  };
}

export function startAddingStudent(name, email, major) {
  const student = {name, email, major};
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  }

  return dispatch => {
    fetch(`${host}/students`, options)
      .then(checkForErrors)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          student.id = data.id;
          alert("Student added successfully! New student id: " + student.id);
          dispatch(finishAddingStudent(student));
        }
      })
      .catch(e => console.error(e));
  };
}

/*********************************************/

export function finishEditingStudent(student) {
  return {
    type: Action.FinishEditingStudent,
    payload: student,
  };
}

export function startEditingStudent(student) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  }

  return dispatch => {
    fetch(`${host}/students/${student.id}`, options)
      .then(checkForErrors)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          alert("Student updated successfully!");
          dispatch(finishEditingStudent(student));
        }
      })
      .catch(e => console.error(e));
  };
}

/*********************************************/

export function finishDeletingStudent(student) {
  return {
    type: Action.FinishDeletingStudent,
    payload: student,
  };
}

export function startDeletingStudent(student) {
  const requestDelete = {
    method: 'DELETE'
  };

  return dispatch => {
    //dispatch(startWaiting());
    fetch(`${host}/students/${student.id}`, requestDelete)
      .then(checkForErrors)
      .then(response => response.json())
      .then(data => {
      if (data.ok){
        dispatch(finishDeletingStudent(student));
      }
    })
    .catch(e => console.error(e));
  };
}