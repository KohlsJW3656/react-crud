import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {startAddingStudent} from './actions';

export function Add() {
  const dispatch = useDispatch();

  const onAdd = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let major = document.getElementById("major").value;

    if (name === "" && email === "" && major === "") {
      alert("No data given, student not added.");
    }
    else {
      if (name === "") {
        name = "null";
      }
      if (email === "") {
        email = "null";
      }
      if (major === "") {
        major = "null";
      }
      dispatch(startAddingStudent(name, email, major));
    }
  }

  return (
    <div>
      <h1 className="pageTitle">Add Student</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td><input id="name" type="text" /></td>
          </tr>
          <tr>
            <td>Email</td>
            <td><input id="email" type="text" /></td>
          </tr>
          <tr>
            <td>Major</td>
            <td><input id="major" type="text" /></td>
          </tr>
        </tbody>
      </table>
      <Link className="button" onClick={onAdd} to="/">Done</Link>
    </div>
  );
}