import React, { useEffect, useState } from "react";

export default function Moddata() {
  const [data, setData] = useState([]);
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


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
