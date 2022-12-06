import React from 'react'
import axios from 'axios'

interface IMessageList {
    id: number | undefined,
    email: string | undefined
}

const MessagesList: React.FC<IMessageList> = ({ id, email }) => {

    return (
        <div className="messages-container__list">
            <input type="text" placeholder="Search" />
            <ul>
                <li>
                    <p className="avatar --no-img">MF</p>
                    <div className="description">
                        <p className="description__name">Maksym Fursa</p>
                        <p className="description__email">{email}</p>
                        <p className="description__msg">Maybe on Friday?</p>
                    </div>
                    <p className="item-time">12:30</p>
                </li>
            </ul>
        </div>
    )
}

export default MessagesList