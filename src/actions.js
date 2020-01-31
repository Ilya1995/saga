export const GET_USERS = "GET_USERS";
export const PUT_USERS = "PUT_USERS";
export const GET_ALBUMS = "GET_ALBUMS";
export const PUT_ALBUMS = "PUT_ALBUMS";

export const getUsers = () => {
  return { type: GET_USERS };
};

export const getAlbums = id => {
  return { type: GET_ALBUMS, payload: id };
};
