import React, { useState } from "react";
import { FaEnvelope, FaUserShield } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { Switch } from "@headlessui/react";
import "../style/setting.css"
const Settings = () => {
  const [allowFollow, setAllowFollow] = useState(false);
  const [shareResults, setShareResults] = useState(true);
  const [notifyResults, setNotifyResults] = useState(false);

  return (
    <div className="settings h-full w-full max-w-full border bg-white p-6 shadow-md">
      <div className="block md:flex justify-between">
        <h2 className="text-blue-500 text-xl font-semibold mb-4">
          User Settings
        </h2>
        <div className="flex">
          <button className="bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800 flex items-center space-x-2">
            <FaUserShield />
            <span>Get Recruiter Code</span>
          </button>
        </div>
      </div>
      <div className="setting-options grid grid-cols-2 gap-4">
        <div className="option- flex items-center space-x-2">
          <FaUserShield className="text-black" size={20} />
          <label className="text-black font-medium">Allow Follow</label>
          <Switch
            checked={allowFollow}
            onChange={setAllowFollow}
            className={`${
              allowFollow ? "bg-blue-500" : "bg-gray-300"
            } relative inline-flex h-5 w-10 items-center rounded-full`}
          >
            <span
              className={`${
                allowFollow ? "translate-x-5" : "translate-x-1"
              } inline-block h-3 w-3 transform bg-white rounded-full transition`}
            />
          </Switch>
        </div>
        <div className="option- flex items-center space-x-2">
          <FaEnvelope className="text-black" size={20} />
          <label className="text-black font-medium">Share Results</label>
          <Switch
            checked={shareResults}
            onChange={setShareResults}
            className={`${
              shareResults ? "bg-blue-500" : "bg-gray-300"
            } relative inline-flex h-5 w-10 items-center rounded-full`}
          >
            <span
              className={`${
                shareResults ? "translate-x-5" : "translate-x-1"
              } inline-block h-3 w-3 transform bg-white rounded-full transition`}
            />
          </Switch>
        </div>
       <div className="option- flex items-center space-x-2">
          <MdNotificationsActive className="text-black" size={20} />
          <label className="text-black font-medium">Notify Me</label>
          <Switch
            checked={notifyResults}
            onChange={setNotifyResults}
            className={`${
              notifyResults ? "bg-blue-500" : "bg-gray-300"
            } relative inline-flex h-5 w-10 items-center rounded-full`}
          >
            <span
              className={`${
                notifyResults ? "translate-x-5" : "translate-x-1"
              } inline-block h-3 w-3 transform bg-white rounded-full transition`}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Settings;
