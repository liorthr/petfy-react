import React, { useState } from 'react';
import './userchat.css';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UserList from './UserList';

const UserChat = () => {
    const usersChat = [
        {
            id: 1,
            name: 'Omer Adam',
            user_dog_name: 'Pookie',
        },
        {
            id: 2,
            name: 'Tomer',
            user_dog_name: 'Max',
        },
        {
            id: 3,
            name: 'Or Cohen',
            user_dog_name: 'Flash',
        },
        {
            id: 4,
            name: 'Eyal Golan',
            user_dog_name: 'Toda',
        },
    ];

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessages([...messages, message]);
        setMessage(''); // Clear input after sending
    };

    return (
        <div className="chat_view">
            <div className="left_side_chat">
                <UserList />
            </div>
            <div className="right_side_chat">
                <div className="chat_name_user">
                    {usersChat[0] && <span className="left_user">{usersChat[0].name}</span>}
                    {usersChat[1] && <span className="right_user">{usersChat[1].name}</span>}
                </div>
                <div className="texto_area">
                    {messages.map((msg, index) => (
                        <div key={index} className="message">{msg}</div>
                    ))}
                </div>
                <div className="input_message">
                    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
                        <Input value={message} onChange={handleInputChange} type="text" placeholder="Type a message..." />
                        <Button type="submit">Send</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserChat;

