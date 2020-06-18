import React from 'react'

const buttonStyle = {
    margin: "10px 10px 10px 10px"
  };

const UserView = props => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Country</th>
        <th>Hobbies</th>
        <th>Address</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      { props.users!== undefined ? (
          <tr>
            <td>{props.users.name}</td>
            <td>{props.users.age}</td>
            <td>{props.users.gender}</td>
            <td>{props.users.country}</td>
            <td>{props.users.hobbies}</td>
            <td>{props.users.address}</td>
            <td>
              <span onClick={props.onHandleEdit} className="btn btn-info" 
                style={buttonStyle}>EDIT</span>
              <span onClick={props.onHandleDelete} className="btn btn-danger"
                style={buttonStyle}>REMOVE</span>
            </td>
          </tr>
      ) : (
        <tr>
          <td colSpan={5}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserView