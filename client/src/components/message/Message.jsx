import "./message.css";

export default function Message({ message, own }) {

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg"
          alt=""
        />
        <p className="messageText">{message.content}</p>
      </div>
      <div className="messageBottom">{message.createdAt}</div>
    </div>
  );
}
