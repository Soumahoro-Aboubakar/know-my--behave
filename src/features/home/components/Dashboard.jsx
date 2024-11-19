import React, { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import "../style/dashbord.css"
import SocialMediaIcon from "./SocialMediaIcon";
const users = [
  {
    id: 1,
    name: "John Doe",
    avatar: `https://i.pravatar.cc/40?img=1`,
    posts: 120,
    appreciation: "positive",
    rating: 18,
    company: "Company A",
    type : "facebook"
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: `https://i.pravatar.cc/40?img=2`,
    posts: 80,
    appreciation: "neutral",
    rating: 15,
    company: "Company B",
    type : "instagram"
  },
  {
    id: 3,
    name: "Alice Johnson",
    avatar: `https://i.pravatar.cc/40?img=3`,
    posts: 50,
    appreciation: "negative",
    rating: 10,
    company: "Company C",
    type : "twitter"
  },
  {
    id: 4,
    name: "Bob Brown",
    avatar: `https://i.pravatar.cc/40?img=4`,
    posts: 200,
    appreciation: "positive",
    rating: 20,
    company: "Company D",
    type : "twitter"

  },
  {
    id: 5,
    name: "Charlie Lee",
    avatar: `https://i.pravatar.cc/40?img=5`,
    posts: 150,
    appreciation: "neutral",
    rating: 16,
    company: "Company E",
    type : "facebook"

  },
  {
    id: 6,
    name: "David White",
    avatar: `https://i.pravatar.cc/40?img=6`,
    posts: 300,
    appreciation: "positive",
    rating: 17,
    company: "Company F",    type : "instagram"

  },
  {
    id: 7,
    name: "Eve Black",
    avatar: `https://i.pravatar.cc/40?img=7`,
    posts: 90,
    appreciation: "negative",
    rating: 12,
    company: "Company G",    type : "twitter"

  },
  {
    id: 8,
    name: "Frank Green",
    avatar: `https://i.pravatar.cc/40?img=8`,
    posts: 130,
    appreciation: "neutral",
    rating: 14,
    company: "Company H",     type : "twitter"

  },
  {
    id: 9,
    name: "Grace Blue",
    avatar: `https://i.pravatar.cc/40?img=9`,
    posts: 170,
    appreciation: "positive",
    rating: 19,
    company: "Company I",     type : "instagram"

  },
  {
    id: 10,
    name: "Hank Yellow",
    avatar: `https://i.pravatar.cc/40?img=10`,
    posts: 220,
    appreciation: "negative",
    rating: 13,
    company: "Company J", type : "instagram"
  },
];

const companies = [
  { name: "Company A", avatar: `https://i.pravatar.cc/40?img=1` },
  { name: "Company B", avatar: `https://i.pravatar.cc/40?img=2` },
  { name: "Company C", avatar: `https://i.pravatar.cc/40?img=3` },
  { name: "Company D", avatar: `https://i.pravatar.cc/40?img=4` },
  /*  { name: "Company E", avatar: `https://i.pravatar.cc/40?img=5` },
  { name: "Company F", avatar: `https://i.pravatar.cc/40?img=6` },
  { name: "Company G", avatar: `https://i.pravatar.cc/40?img=7` },
  { name: "Company H", avatar: `https://i.pravatar.cc/40?img=8` },
  { name: "Company I", avatar: `https://i.pravatar.cc/40?img=9` },
  { name: "Company J", avatar: `https://i.pravatar.cc/40?img=10` }, */
];

const App = () => {
  const [filteredAppreciation, setFilteredAppreciation] = useState("");
  const [showOptions, setShowOptions] = useState(null);

  const handleIconClick = (userId) => {
    setShowOptions((prev) => (prev === userId ? null : userId));
  };

  const handleAppreciationChange = (e) => {
    setFilteredAppreciation(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    filteredAppreciation ? user.appreciation === filteredAppreciation : true
  );
  const UserData = () => {
    return (
      <div className="user-data flex-2 max-h-[60vh] overflow-y-auto w-2/3  border  p-4 rounded-md">
        <h2 className="text-blue-600 mb-4 font-mono text-2xl">
          Our Active Users
        </h2>
        <div className="mb-4">
          <select
            value={filteredAppreciation}
            onChange={handleAppreciationChange}
            className="p-2 border rounded"
          >
            <option value="">Filter by Appreciation</option>
            <option value="positive">Positive</option>
            <option value="neutral">Neutral</option>
            <option value="negative">Negative</option>
          </select>
        </div>
        <table className="table-auto w-full  font-mono">
          <thead>
            <tr>
              <th className="border-b text-blue-600  p-2 text-left">Name</th>
              <th className="border-b  text-blue-600 p-2 text-left">Posts</th>
              <th className="border-b  text-blue-600 p-2 text-left">Social Medial</th>
              <th className="border-b text-blue-600 p-2 text-left">
                Appreciation
              </th>
              <th className="border-b text-blue-600 p-2 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-b h-[60px]">
                <td className="text-black flex items-center h-[60px] ">
                  {" "}
                  <div>
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full"
                    />
                  </div>{" "}
                  <span className="m-3">{user.name}</span>
                </td>
                <td className="text-black ">{user.posts}</td>
                <td className="px-6">
                  <SocialMediaIcon type={user.type} />
                </td>
                <td
                  className={`text-black ${
                    user.appreciation === "positive"
                      ? "text-green-500"
                      : user.appreciation === "neutral"
                      ? "text-gray-500"
                      : "text-red-500"
                  }`}
                >
                  {user.appreciation}
                </td>
                <td className="relative text-black ">
                  <FaEllipsisH
                    onClick={() => handleIconClick(user.id)}
                    className="cursor-pointer"
                  />
                  {showOptions === user.id && (
                    <div className="absolute top-0 right-0 bg-white shadow-xl p-2 rounded-lg w-[280px] z-20 border border-gray-200">
                      <button className="block w-full text-black py-2 text-start hover:bg-blue-500 hover:text-white transition-colors duration-200 rounded-md mb-1 pl-4">
                        View Posts
                      </button>
                      <button className="block w-full text-black py-2 text-start hover:bg-blue-500 hover:text-white transition-colors duration-200 rounded-md mb-1  pl-4">
                        Send to Recruiter
                      </button>
                      <button className="block w-full text-black py-2 text-start hover:bg-blue-500 hover:text-white transition-colors duration-200 rounded-md mb-1  pl-4">
                        Download
                      </button>
                      <button className="block w-full text-black py-2 text-start hover:bg-blue-500 hover:text-white transition-colors duration-200 rounded-md mb-1  pl-4">
                        Contact User
                      </button>
                      <button
                        className="block w-full text-red-600 py-2 text-start hover:bg-red-100 hover:text-red-800 transition-colors duration-200 rounded-md pl-4"
                        onClick={() => setShowOptions(false)}
                      >
                        Close
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  return (
    <div className="bg-white p-4 max-h-screen overflow-y-auto w-full">
      <div className="dashbord-container flex gap-6">
        {/* First Column is about User Info */}
        <UserData />

        {/* Second Column is about Recent Companies which used my project */}
        <div className="recent-compagies flex-1 max-h-[50vh] overflow-y-auto w-1/3 border rounded-md p-4">
          <h2 className="text-blue-600 mb-4 font-mono text-2xl">
            Recent Companies
          </h2>
          <ul>
            {companies.map((company, index) => (
              <li
                key={index}
                className="flex items-center gap-3 mb-3 border-b h-[60px]"
              >
                <img
                  src={company.avatar}
                  alt={company.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-black">{company.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
