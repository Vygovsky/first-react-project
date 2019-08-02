import React from 'react';
import dialogStyle from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return (
        <div className={dialogStyle.dialog + ' ' + dialogStyle.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (<div className={dialogStyle.dialog}>{props.message}</div>)
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: "Seregy"},
        {id: 2, name: "Roman"},
        {id: 3, name: "Fox"},
        {id: 4, name: "Mulder"},
        {id: 5, name: "Gumanoid"},
    ];
    let dialogElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Fucking shit!! I go from this Earth!!"},

    ];

    let messagesElements = messages.map(message => <MessageItem message={message.message}/>);

    return (
        <div className={dialogStyle.dialogs}>
            <div className={dialogStyle.dialogItem}>
                {dialogElements}
            </div>
            <div className={dialogStyle.messages}>
                {messagesElements}
            </div>
        </div>


    )
}
export default Dialogs;