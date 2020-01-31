import { PUT_USERS, PUT_ALBUMS } from "./actions";

export const initialState = {
  users: [],
  albums: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PUT_USERS:
      return { ...state, users: action.payload, preloader: false };
    case PUT_ALBUMS:
      return { ...state, albums: action.payload, preloader: false };
    default:
      return state;
  }
}
