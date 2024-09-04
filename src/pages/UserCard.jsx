import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const UserCard = ({ userInfo, index }) => {
  const {setAnotherUserId}=useContext(UserContext);
  const navigate = useNavigate();
  const handleChat = (userId) => {
    setAnotherUserId(userId);
    navigate("/room/${userId}");
  };
 
  return (
    <div key={index}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col justify-center items-center ">
        <div className="pt-4">
          <img
            className="w-20 h-20 rounded-full"
            src={userInfo.imageUrl}
            alt={`'s avatar`}
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-gray-700 text-2xl mb-2 text-center ">
            {userInfo.name}
          </div>
          <p className="font-semibold text-gray-700 text-base text-center">
            @{userInfo.username}
          </p>
         
        </div>
        <button
          onClick={()=>handleChat(userInfo.$id)}
          className="text-white border-2 rounded-md p-2 bg-green-600 hover:bg-green-800 ml-6 px-5 mt-2 text-center mb-4 mr-6"
        >
          Message
        </button>
      </div>
    </div>
  );
};

export default UserCard;
