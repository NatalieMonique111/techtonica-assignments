import React, { useEffect } from 'react';
import DeleteUser from './DeleteUser'

//a component has props and state, using this hook useState, it's a way
//of setting state in the component. Because it's a list we Initialize the state
//with the object of the users.  

const Users = () => {

  const getUsers = () => {
    fetch("/users")
      //turn response into JSON
      .then(res => res.json())
      .then(res => setUsers(res))
  };

  const addUser = (newUser) => {
    fetch('/users', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => console.log('Creating user succeeded', res))
      .then((user) => setUsers([...users, user]))
  }
  //.then(getUsers)


  const deleteUserFetch = (userId) => {
    fetch(`http://localhost:3000/users/users/id/${userId}`, {
      method: 'DELETE'
    })
      .then((res) => console.log('Delete user succeeded', res))
    // .then(() => setUsers([...users, userId]))
  }





  useEffect(() => {
    getUsers(); // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
  }, []);


  const [name, setName] = React.useState('');
  const [id, setId] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [users, setUsers] = React.useState([]);

  const deleteUser = (deleteId) => {
    const newUsers = users.filter(i => i.id !== deleteId)
    deleteUserFetch(deleteId);
    setUsers(newUsers);
    console.log(newUsers);
  };

  // id, name, and email are states that store what values the user types in those fields
  // users is an array of user objects
  // All of these states can be defined in the component

  const onSubmit = e => {
    e.preventDefault();
    const newUser = { id: id, name: name, email: email };
    setUsers([...users, newUser]);
    addUser(newUser);


    //BONUS
    // reset();  // Reset all form data
    // return false; // Prevent page refresh
  };

  //call getUsers after the onSubmit
  return (
    <section className="user-management">
      <h2>User Management</h2>

      <ul id="users-list">
        {users.map((user) =>
          <li key={user.id}>{user.name} {user.email}</li>
        )}
      </ul>
      <div>
        <h3>Add User</h3>
        <form id="add-user" action="#" onSubmit={onSubmit}>
          <fieldset>
            <label>Name</label>
            <input type="text" id="add-user-name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                console.log("onChange name", { name });
              }} />
          </fieldset>
          <fieldset>
            <label>ID</label>
            <input type="text" id="add-user-id"
              value={id}
              onChange={(e) => {
                setId(e.target.value)
                console.log("onChange id", { id });
              }} />
          </fieldset>
          <fieldset>
            <label>Email</label>
            <input type="text" id="add-user-email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                console.log("onChange email", { email });
              }} />
          </fieldset>
          <input type="submit" value="Add" />
        </form>
      </div>
      <DeleteUser deleteUser={deleteUser} />
    </section>
  );
};

export default Users;