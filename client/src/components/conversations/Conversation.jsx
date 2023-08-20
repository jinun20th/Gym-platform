import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const friendId = conversation.members.find((m) => m !== currentUser._id);

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
  }, [currentUser, conversation, friendId]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={user?.img}
        alt="avatar"
      />
      <span className="conversationName">{user?.name}</span>
    </div>
  );
}
