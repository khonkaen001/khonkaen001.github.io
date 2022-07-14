import axios from "axios";
//สร้าง โฟเดอร์ Api เพื่อเก็บตัวข้อมูลที่ได้จาก API
//export ให้ fc ใช้ได้ทุกที่

const fetchTodo = async () => {
  let data = await axios
    .get("https://jsonplaceholder.typicode.com/todos?_limit=4")
    .then((res) => {
      console.log(res.data)
      return res.data
    });
    return data
};

export { fetchTodo };
