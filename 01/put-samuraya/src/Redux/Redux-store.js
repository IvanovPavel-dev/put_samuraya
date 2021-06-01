import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfilePage-Reducer";
import dialogsReducer from "./DialogsPage-Reducer";
import sideBarReducer from "./SideBar-Reducer";
import usersReducer from "./Users-Reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage : usersReducer
})

let store = createStore(reducers);

export default store;