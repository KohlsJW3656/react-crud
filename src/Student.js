import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {startDeletingStudent} from './actions';

export function Student(props) {
  const dispatch = useDispatch();
  const student = props.student;
  
  const onDelete = () => {
    let answer = window.confirm("Would you like to delete this student?");
    if (answer) {
      dispatch(startDeletingStudent(student));
    }
  }

  return (
    <tr className="student">
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>{student.major}</td>
      <td><Link className="tableLink" to={`/edit/${student.id}/${student.name}/${student.email}/${student.major}`}>Edit</Link><Link className="tableLink" onClick={onDelete} to="/">Delete</Link></td>
    </tr>
  );
}