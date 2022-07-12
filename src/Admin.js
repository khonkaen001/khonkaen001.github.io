import React, { useEffect, useState } from "react";
import { finalFetchTodo } from "./logic/admin.logic";

export default function Admin() {
  const [data_todo, setDataTodo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let tmpData = await finalFetchTodo();
    setDataTodo(tmpData);
  };

  return (
    <>
      <div>admin</div>
      <div>
        {data_todo.map((item, index) => {
          return (
            <div key={index} className="card">
              <div className="container">
                <b>{index + 1 + "."}</b> <p>{item}</p>
              </div>
              <div>
                <button>แก้ไข</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
