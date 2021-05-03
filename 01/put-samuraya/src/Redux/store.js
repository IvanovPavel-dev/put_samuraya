import dialogsReducer from "./DialogsPage-Reducer";
import profileReducer from "./ProfilePage-Reducer";
import sideBarReducer from "./SideBar-Reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'wazzup! Bro!', likeCounter: 12},
                {id: 2, message: 'today is my birthday!', likeCounter: 32},
                {id: 3, message: 'pupa i lupa', likeCounter: 2},
                {id: 4, message: 'ZALUPA', likeCounter: 74}
            ],
            newPostText: 'apostol rulezzz'
        },
        dialogsPage: {
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
        },
        sideBar: {}
    },
    _callSubscriber() {
        console.log('aaa')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.sideBar = sideBarReducer(this._state.sideBar,action)
        this._callSubscriber(this._state)
    }
}
export default store;
window.store = store;