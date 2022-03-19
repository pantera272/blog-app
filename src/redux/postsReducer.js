import shortid from "shortid";
//selectors
export const getAllPost = (state) => state.posts;
export const getPostById = ({posts}, id) => posts.find(post => post.id === id); 
// actions
const createActionName = actionName => `app/posts/${actionName}`;

const DELETE_POST = createActionName('DELETE_POST');
export const deletePost = payload => ({type: DELETE_POST, payload});

const ADD_POST = createActionName('ADD_POST');
export const addPost = payload => ({type: ADD_POST, payload})

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case DELETE_POST:
      const newState = statePart.filter(statePart => statePart.id !== action.payload);
      return newState;
    case ADD_POST:
      return [...statePart, {...action.payload, id: shortid() }]
    default:
      return statePart;
  };
};

export default postsReducer;