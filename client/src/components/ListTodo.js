import React from "react";

const ListTodo = ({ listItem, deleteListItem }) => {
  return (
    <ul>
      {listItem && listItem.length > 0 ? (
        listItem.map((listItem) => {
          return (
            <li key={listItem._id} onClick={() => deleteListItem(listItem._id)}>
              {listItem.action}
            </li>
          );
        })
      ) : (
        <li>NO todo(s) left</li>
      )}
    </ul>
  );
};
export default ListTodo;
