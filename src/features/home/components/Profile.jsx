import "../style/profile.css";
import React, { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import SocialMediaIcon from "./SocialMediaIcon";
import Settings from "./Settings";

const users = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: `https://i.pravatar.cc/40?img=1`,
    posts: 120,
    appreciation: "positive",
    rating: 18,
    company: "Company A",
    type: "facebook",
  },
  {
    id: 2,
    name: "Alice Johnson",
    avatar: `https://i.pravatar.cc/40?img=1`,
    posts: 80,
    appreciation: "neutral",
    rating: 15,
    company: "Company B",
    type: "instagram",
  },
  {
    id: 3,
    name: "Alice Johnson",
    avatar: `https://i.pravatar.cc/40?img=1`,
    posts: 50,
    appreciation: "negative",
    rating: 10,
    company: "Company C",
    type: "twitter",
  }
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

const Profile = () => {
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
      <div className="flex-2 max-h-[50.52vh] overflow-y-auto   border  p-4 rounded-md">
        <h2 className="text-blue-600 mb-4 font-mono text-2xl">
          Our Active Users
        </h2>
        <div className="mb-4">
          <button
            value={filteredAppreciation}
            onChange={handleAppreciationChange}
            className="p-2 border rounded bg-black"
          >
            <div>Download my Results</div>
          </button>
        </div>

        <table className="table-auto w-full  font-mono">
          <thead>
            <tr>
              <th className="border-b text-blue-600  p-2 text-left">Name</th>
              <th className="border-b  text-blue-600 p-2 text-left">Posts</th>
              <th className="border-b  text-blue-600 p-2 text-left">
                Social Medial
              </th>
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
                <td className="text-black px-4 ">{user.posts}</td>
                <td className="px-6">
                  <SocialMediaIcon type={user.type} />
                </td>
                <td
                  className={`text-black px-6 ${
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
                        Download
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
    <div className="profile-container grid grid-cols-12 gap-4 p-2 w-full border rounded-md ">
      <div className="user-infos h-full p-4 border rounded-md  col-span-3">
        <div className="image-container h-[40%] border grid place-items-center text-red  w-full  bg-gray-100">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s"
            alt="user-name"
            className="image- w-24 h-24 rounded-md mt-4"
          />
          <div className="user-name text-gray-800 mb-4 font-extrabold">
          Alice Johnson
          </div>
          <div>
            <button className="upload-btn text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-md font-bold mb-4">
              New Image
            </button>
          </div>
        </div>
        <div className="h-[55%] border mt-[10%]">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-extrabold mb-4 text-blue-500">
              Informations:
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <strong>Gender:</strong> Male
              </li>
              <li>
                <strong>Like:</strong> 300k
              </li>
              <li>
                <strong>Comments:</strong> 40k
              </li>
              <li>
                <strong>Posts:</strong> 10k, posts
              </li>
            
              <li>
                <strong>Last Visit:</strong> 25th October 2019
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="user-settings-posts h-full p-4 border col-span-9  rounded-md">
        <div className="settings h-[30%] border bg-gray-100">
          <Settings />
        </div>
        <div className="user h-[65%] border mt-[3%] bg-gray-100">
          <UserData />
        </div>
      </div>
    </div>
  );
};

export default Profile;
