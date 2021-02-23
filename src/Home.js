import React, {useEffect} from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Student} from './Student';
import {useSelector, useDispatch} from 'react-redux';
import {getStudents} from './actions';

export function Home() {
  const students = useSelector(state => state.students);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch, students]);

  return (
    <div>
      <h1 className="pageTitle">Home Page</h1>
      <Link className="button" to="/add">Add Student</Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Major</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => <Student key={student.id} student={student} />)}
        </tbody>
      </table>
    </div>
  );

}