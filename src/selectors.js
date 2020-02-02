import { createSelector } from "reselect";

export const selectIncludesStringOfTitle = createSelector(
  state => state.albums,
  albums => albums.filter(album => album.title.includes("est"))
);

export const selectLengthWebsiteUser = createSelector(
  state => state.users,
  users => users.filter(user => user.website.length > 10)
);
