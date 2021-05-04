import React from 'react';
import {sandMessageCreator, updateNewMessageBodyCreator} from "../../Redux/DialogsPage-Reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(updateNewMessageBodyCreator())
        },
        sandMessage: (body) => {
            dispatch(sandMessageCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;