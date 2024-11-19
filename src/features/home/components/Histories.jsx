import React from "react";
import '../style/history.css'
const data = [
  {
    title: "Posts",
    count: "13 762",
    increase: "+668 since last week",
  },
  {
    title: "Users",
    count: "3 929",
    increase: "+187 since last week",
  },
  { title: "Compagnies", count: "1 223", increase: "+111 since last week" },
];

const Histories = () => {
  return (
    <div className="history-container grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 mt-20 place-items-center w-full">
      {data.map((item, index) => (
        <div
          key={index}
          className="history-item border border-gray-200 rounded-lg p-4 pr-4 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="text-3xl font-semibold text-gray-800">
            {item.count}{" "}
            {item.increase && (
              <span className="text-[15px] text-blue-500 font-medium">
                {item.increase}
              </span>
            )}
          </div>

          <div className="text-gray-500 mt-1">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Histories;
