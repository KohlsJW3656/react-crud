import React, {useState} from 'react';
import {BrowserRouter as Router, Link, useParams} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {startEditingStudent} from './actions';

export function Edit() {
  const dispatch = useDispatch();
  const studentId = useParams().id;
  const studentName = useParams().name;
  const studentEmail = useParams().email;
  const studentMajor = useParams().major;
  const [name, setName] = useState(useParams().name);
  const [email, setEmail] = useState(useParams().email);
  const [major, setMajor] = useState(useParams().major);

  const onEdit = () => {
    if (name === studentName && email === studentEmail && major === studentMajor) {
      alert("Data not updated, returning to homepage.");
    }
    else {
      dispatch(startEditingStudent({
        id: studentId,
        name,
        email,
        major,
      }));
    }
  }

  return (
    <div>
      <h1 className="pageTitle">Edit Student Info</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>{studentId}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td><input id="name" type="text" value={name} onChange={e => setName(e.target.value)} /></td>
          </tr>
          <tr>
            <td>Email</td>
            <td><input id="email" type="text" value={email} onChange={e => setEmail(e.target.value)} /></td>
          </tr>
          <tr>
            <td>Major</td>
            <td><input id="major" type="text" value={major} onChange={e => setMajor(e.target.value)}/></td>
          </tr>
        </tbody>
      </table>
      <Link className="button" onClick={onEdit} to="/">Done</Link>
    </div>
  );
}