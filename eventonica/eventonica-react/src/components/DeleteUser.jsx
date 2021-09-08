import React from 'react';

const DeleteUser = ({ deleteUser }) => {
  // Declare a new state variable
  const [deleteId, setDeleteId] = React.useState(0);

  const onSubmit = e => {
    e.preventDefault();
    console.log('DELETE');
    deleteUser(deleteId);
  };

  return (
    <div>
      <h3>Delete User</h3>
      <form id="delete-user" action="#" onSubmit={onSubmit}>
        <fieldset>
          <label>User ID</label>
          <input type="text" id="delete-user-id"
            value={deleteId}
            onChange={(e) => {
              setDeleteId(e.target.value)
              console.log("onChange id", { deleteId });
            }} />
        </fieldset>
        <input type="submit" />
      </form>
    </div>
  );
};

export default DeleteUser;