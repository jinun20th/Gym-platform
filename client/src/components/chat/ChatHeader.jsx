import axios from "axios";
import { useEffect, useState } from "react";
import "./chatHeader.css";

export default function ChatHeader({ cc, cu }) {

  const friendId = cc.members.find((m) => m !== cu._id);
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios(`/user/${friendId}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  });

  return (
    <div className="chatHeader">
      <img
        className="chatImg"
        src={user?.img}
        alt="avatar"
      />
      <span className="chatName">{user?.name}</span>
    </div>
  );
}