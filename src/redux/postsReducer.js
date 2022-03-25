import shortid from "shortid";
//selectors
export const getAllPost = (state) => state.posts;
export const getPostById = ({posts}, id) => posts.find(post => post.id === id); 
export const getPostByCategory = ({posts}, category) => posts.filter(post => post.category === category);
// actions
const createActionName = actionName => `app/posts/${actionName}`;

const DELETE_POST = createActionName('DELETE_POST');
export const deletePost = payload => ({type: DELETE_POST, payload});

const ADD_POST = createActionName('ADD_POST');
export const addPost = payload => ({type: ADD_POST, payload})

const EDIT_POST = createActionName('EDIT_POST');
export const editPost = payload => ({type: EDIT_POST, payload})

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case DELETE_POST:
      const newState = statePart.filter(statePart => statePart.id !== action.payload);
      return newState;
    case ADD_POST:
      return [...statePart, {...action.payload, id: shortid() }];
    case EDIT_POST:
      return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
    default:
      return statePart;
  };
};

export default postsReducer;