import { fetchTodo } from "../api/todo.api";

export async function finalFetchTodo() {
  let data = await fetchTodo();
  const final = data.map((item, index) => {
    if (item.title.indexOf("autem") > -1 || item.title.indexOf("minus") > -1) {
      return (
        <>
          <p key={index} style={{ color: "red" }}>
            {item.title}
          </p>
        </>
      );
    } else {
      return (
        <>
          <p key={index} style={{ color: "blue" }}>
            {item.title}
          </p>
        </>
      );
    }
  });
  return final;
}
