import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faCircleUser, faChartBar, faNoteSticky,  } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faVideo, faUser, faUserXmark, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

import { logout } from '../../store/authSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { IHedeaderNav, IMenu } from './types'
import MessagesList from './MessagesList'

const Chat: React.FC = () => {
    const [navActive] = React.useState<number>(3)
    const [menuActive] = React.useState<number>(0)

    const dispatch = useAppDispatch()
    const { id, email } = useAppSelector(state => state.authentication) || JSON.parse(localStorage.getItem('auth') || '{}')
    const navigate = useNavigate()

    const nav: IHedeaderNav[] = [
        { svg: <FontAwesomeIcon icon={faNoteSticky} />, name: 'Resume' },
        { svg: <FontAwesomeIcon icon={faCircleUser} />, name: 'Contacts' },
        { svg: <FontAwesomeIcon icon={faChartBar} />, name: 'Statistic' },
        { svg: <FontAwesomeIcon icon={faMessage} />, name: 'Chats' }
    ] 
    const menu: IMenu[] = [
        {name: 'All', qty: 12},
        {name: 'Pinned', qty: 3},
        {name: 'Live chat', qty: 1},
        {name: 'Archived'},
        {name: 'Blocked'},
        {name: 'Trash'},
    ]

    return (
        <div className="chat-container">
            <header>
                <nav>
                    {nav.map((el, idx) => 
                        <p key={el.name} className={navActive === idx ? "--active" : ""}>{el.svg} {el.name}</p>    
                    )}
                </nav>
                <div className="header__right">
                    <div className="description header__description">
                        <div className="description__name">Maksym Fursa</div>
                        <div className="description__email">{email}</div>
                    </div>
                    <button onClick={() => {
                        dispatch(logout())
                        navigate('/login')
                    }}><FontAwesomeIcon icon={faArrowRightFromBracket}/></button>
                </div>
            </header>
            <div className="chat-container__content">
                <div className="chat-container__menu">
                    <ul>
                        {menu.map((el, idx) => 
                            <li key={el.name} className={idx === menuActive ? "--active" : ""}>
                                <p>{el.name}</p>
                                {el.qty && <span>{el.qty}</span> }
                            </li>
                        )}
                    </ul>
                </div>
                <div className="messages-container">
                    <MessagesList id={id} email={email} />
                    <div className="conversation-container">
                        <div className="conversation-container__top">
                            <p className="avatar conversation-container__avavar --no-img">MF</p>
                            <p className="conversation-container__name">
                                Conversation with <span>Maksym Fursa</span>
                            </p>
                        </div>
                        <div className="conversation-container__content">
                        </div>
                        <div className="conversation-container__keyboard">
                            <input type="text" placeholder="Write the message" />
                        </div>
                    </div>
                    <div className="messages-container__details">
                        <div className="info-container">
                            <div className="info-container__top">
                                <p className="avatar --no-img">MF</p>
                                <div className="description">
                                    <p className="description__name">Maksym Fursa</p>
                                    <p className="description__email">{email}</p>
                                </div>
                            </div>
                            <div className="info-container__actions">
                                <button><FontAwesomeIcon icon={faPhone}/></button>
                                <button><FontAwesomeIcon icon={faVideo}/></button>
                                <button><FontAwesomeIcon icon={faUser}/></button>
                                <button><FontAwesomeIcon icon={faUserXmark}/></button>
                            </div>
                            <div className="info-container__description">
                                <p>Hello Everybody!👋</p>
                                <p>Our complany looking for:</p>
                                <div className="info-container__tags">
                                    <p>UI/UX designer</p> <p>QA</p> <p>Fronend TypeScript developer</p> <p>SEO</p> <p>Project Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat