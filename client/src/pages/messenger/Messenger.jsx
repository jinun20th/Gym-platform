import "./messenger.css";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { io } from "socket.io-client";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ChatHeader from "../../components/chat/ChatHeader";
import useFetch from "../../hooks/useFetch";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Messenger() {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const socket = useRef();
    const { user } = useContext(AuthContext);
    const scrollRef = useRef();
    const { data } = useFetch(`/classes/user/${user._id}`);
    console.log(data);
    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                content: data.content,
                createdAt: Date.now(),
            });
        });
    }, []);

    useEffect(() => {
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
        socket.current.emit("addUser", user._id);
    }, [user])

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get("/conversation/" + user._id);
                setConversations(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getConversations();
    }, [user._id]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get("/message/" + currentChat?._id);
                console.log("res: ", res);
                setMessages(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMessages();
    }, [currentChat]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: user._id,
            content: newMessage,
            conversationId: currentChat._id,
        };

        const receiverId = currentChat.members.find(
            (member) => member !== user._id
        );
        console.log(receiverId);
        socket.current.emit("sendMessage", {
            senderId: user._id,
            receiverId: receiverId,
            content: newMessage,
        });

        try {
            const res = await axios.post("/message", message);
            setMessages([...messages, res.data]);
            setNewMessage("");
        } catch (err) {
            console.log(err);
        }
    };

    const createConversation = async (receiverId) => {
        try {
            const obj = {
                senderId: user._id,
                receiverId: receiverId,
            }
            const res = await axios.post(`/conversation/`, obj);
            console.log(res.data);
            toast.success("Tạo hội thoại thành công");
            window.location.reload();
        } catch (err) {
            toast.error("Tạo hội thoại không thành công thử lại sau");
        }
    }

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <>
            <Navbar />
            <div className="messenger">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 chatMenu">
                            <div className="chatMenuWrapper">
                                <div className="title">Chat</div>
                                <input placeholder="Tìm kiếm" className="chatMenuInput" />
                                {conversations.map((c) => (
                                    <div onClick={() => setCurrentChat(c)}>
                                        <Conversation conversation={c} currentUser={user} />
                                    </div>
                                ))}
                                <div className="yourTrainer">
                                    HLV của bạn ấn để tạo hội thoại:
                                    {data.map((c) => (
                                        <div className="conversation" onClick={() => createConversation(c.trainerInfo._id)}>
                                            <img
                                                className="conversationImg"
                                                src={c.trainerInfo.img}
                                                alt="avatar"
                                            />
                                            <span className="conversationName">{c.trainerInfo.name}</span>
                                            <span className="conversationName"><i className="fa-solid fa-plus"></i></span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 chatBox">
                            <div className="chatBoxWrapper">
                                {currentChat ? (
                                    <>
                                        <ChatHeader cc={currentChat} cu={user} />
                                        <div className="chatBoxTop">
                                            {messages.map((m) => (
                                                <div ref={scrollRef}>
                                                    <Message message={m} own={m.sender === user._id} />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="chatBoxBottom">
                                            <textarea
                                                className="chatMessageInput"
                                                placeholder="Aa..."
                                                onChange={(e) => setNewMessage(e.target.value)}
                                                value={newMessage}
                                            ></textarea>
                                            <button className="chatSubmitButton" onClick={handleSubmit}>
                                                Gửi
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <span className="noConversationText">
                                        Mở hộp hội thoại để bắt đầu nhắn tin
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </>
    );
}
