import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { deleteToDo, editTodo } from "../app/api/todoSlider";
const ListTodo = () => {
  const { todoList } = useSelector((state) => state.toDo);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [state, setState] = useState({
    id: "",
    content: "",
    contentError: null,
  });
  const onEditToggle = (id, content) => {
    setIsEditing(true);
    setState({ ...state, id, content });
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  };
  const { content, contentError, id } = state;
  const edit = () => {
    if (content === "") {
      setState({ ...state, contentError: "You must write something!" });
      return;
    }
    dispatch(editTodo({ content, id }));
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div className="form">
          <h2>Update your plan for today</h2>
          <input
            type="text"
            value={content}
            name="content"
            onChange={handleChange}
          ></input>
          <button type="button" className="button" onClick={edit}>
            Edit
          </button>
          {contentError ? <div className="error">{contentError}</div> : null}
        </div>
      ) : (
        <div>
          <ul className="todos">
            {todoList.map(({ id, content }) => {
              return (
                <li className="grid" key={id}>
                  <span className="content">{content}</span>
                  <span className="edit">
                    <AiFillEdit onClick={() => onEditToggle(id, content)} />
                  </span>
                  <span className="close">
                    <AiFillDelete
                      onClick={() => dispatch(deleteToDo({ id }))}
                    />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ListTodo;
