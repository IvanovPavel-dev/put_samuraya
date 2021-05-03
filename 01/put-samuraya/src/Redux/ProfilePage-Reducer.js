const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'wazzup! Bro!', likeCounter: 12},
        {id: 2, message: 'today is my birthday!', likeCounter: 32},
        {id: 3, message: 'pupa i lupa poluchali zarplatu))', likeCounter: 2},
        {id: 4, message: 'nomaste', likeCounter: 74}
    ],
    newPostText: 'apostol rulezzz'
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {

                id: 5,
                message: state.newPostText,
                likeCounter: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case  UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;