import React from "react";
import { Link } from "react-router-dom";

const Manu = () => {
  const manuButton = [
    {
      name: "หน้าหลัก",
      path: "/",
    },
    {
      name: "เกมส์",
      path: "/board",
    },
    {
      name: "แบบทดสอบ",
      path: "/dashboardbank",
    },
  ];

  return (
    <>
      {manuButton.map((item, index) => {
        return (
          <>
            <div key={index}>
              <a href={item.path}>{item.name}</a>
            </div>
          </>
        );
      })}
    </>
  );
};

export { Manu };
