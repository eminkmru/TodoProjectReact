import React, { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState({
    title: "",
    content: "",
  });
  function detectChange(event) {
    const { name, value } = event.target;

    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  }

  function submitTask(event) {
    props.onAdd(task);
    setTask({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <div className="todoDivArea">
      <form className="todoDiv">
        <input
          type="text"
          className="form-control todoText"
          name="title"
          value={task.title}
          onChange={detectChange}
          placeholder="Başlık"
        />
        <textarea
          name="content"
          value={task.content}
          onChange={detectChange}
          rows={3}
          placeholder="Lütfen işinizi yazınız."
          className="form-control todoText"
        ></textarea>
        <button className="btn btn-primary todoBtn" onClick={submitTask}>
          Ekle
        </button>
      </form>
    </div>
  );
}
