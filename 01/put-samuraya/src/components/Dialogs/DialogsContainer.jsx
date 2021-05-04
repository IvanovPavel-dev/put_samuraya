import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {sandMessageCreator, updateNewMessageBodyCreator} from "../../Redux/DialogsPage-Reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sandMessageCreator())
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (<Dialogs updateNewMessageBody={onNewMessageChange}
                     sandMessage={onSendMessageClick} dialogsPage={state}/>
    )
}

export default DialogsContainer;