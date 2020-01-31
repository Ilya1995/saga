import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAlbums } from "../actions";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export default function LoginPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const albums = useSelector(state => state.albums);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getAlbums(id));
  }, [dispatch, id]);

  const renderAlbums = albums.map(album => {
    return (
      <ListItem button key={album.id} divider>
        <ListItemText primary={album.title} />
      </ListItem>
    );
  });

  return (
    <Container maxWidth="xl">
      <Typography
        variant="h3"
        gutterBottom
        style={{ textAlign: "center", marginTop: 15 }}
      >
        Albums
      </Typography>
      <Box component="div" className="mtb-3">
        <List component="nav" aria-label="mailbox folders">
          {renderAlbums}
        </List>
      </Box>

      <Button variant="contained" color="primary" onClick={history.goBack}>
        Назад
      </Button>
    </Container>
  );
}
