import React, { useEffect, useState } from "react";
import { fetchTodo } from "./api/todo.api";

export default function Todolistoption() {
  const [data_todo, setDataTodo] = useState([]);
  useEffect(() => {
    fectdata();
  }, []);

  const fectdata = async () => {
    let tmpData = await fetchTodo();
    setDataTodo(tmpData);
  };
  return (
    <>
      <select>
        {data_todo.map((item, index) => {
          return (
            <option key={index} class="card">
              <div class="container">
                <b>{index + 1 + "."}</b> <p>{item.title}</p>
              </div>
            </option>
          );
        })}
      </select>
    </>
  );
}
