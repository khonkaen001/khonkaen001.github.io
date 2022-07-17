import React, { useEffect, useState } from "react";

export default function Moddata() {
  const [data, setData] = useState([]);
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let result = [];
  let dataObj = [];
  const [obj, setObj] = useState([
    {
      id: 1,
      name: "kong",
    },
    { id: 2, name: "rang" },
  ]);
  for (let i = 0; i < number.length; i++) {
    result.push(number[i] * 2);
  }

  const pushNumber = () => {
    let result = [];
    let total = number.map((item, index) => {
      result.push(item);
    });
  };

  useEffect(() => {
    pushNumber();
  }, []);

  useEffect(() => {
    let mod = number.map((item) => {
      return { item };
    });
    setData(mod);
  }, []);

  const CheckData = () => {
    return number.map((item, index) => {
      return (
        <>
          {
            <p key={index}>
              {item} {item % 2 !== 0 ? "false" : "true"}
            </p>
          }
        </>
      );
    });
  };
  async function main() {
    await taskOne();
    await taskTwo();
    await taskThree();
  };

 
  function  taskOne () {
   setTimeout(function () {
      console.log("this is task 1");
    }, 500);
  };
  function taskTwo () {
    console.log("this is task 2");
  };
  function taskThree () {
    setTimeout(function () {
      console.log("this is task 3");
    }, 1000);
  };

  main()


  return (
    <div>
      {/* {data.map((item) => {
        console.log(item)
        return (
          <p>
            {item.props.children}{" "}
            {item.props.children % 2 !== 0 ? "false" : "true"}
          </p>
        );
      })} */}
      <CheckData />
      {/* {data.map((item) => {
        return <p>{item}</p>;
      })} */}
    </div>
  );
}
