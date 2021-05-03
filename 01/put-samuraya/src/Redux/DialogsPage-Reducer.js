const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Apostol'},
        {id: 2, name: 'Dabu'},
        {id: 3, name: 'Zakzak'},
        {id: 4, name: 'Dasha'},
        {id: 5, name: 'Babushka1'},
        {id: 6, name: 'Babushka2'}
    ],
    messages: [
        {id: 1, message: 'perdeyozh'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'sektor gaza'},
        {id: 4, message: 'hi'},
        {id: 5, message: 'yo'},
        {id: 6, message: 'wtf'}
    ],
    newMessageBody: 'pusto'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 7, message: body});
            return state;
        default:
            return state
    }
}
export const sandMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer;