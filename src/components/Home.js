import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUsers } from "../actions";
import Box from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

export default function Home() {
  const history = useHistory();
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handlerUser = id => {
    history.push(`user/${id}/albums`);
  };

  const renderUsers = users.map(user => {
    return (
      <Card
        key={user.id}
        style={{
          minWidth: 275,
          maxWidth: 350
        }}
        className="mtb-3"
      >
        <CardContent>
          <TableContainer className="table-stats">
            <Table aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell>
                    <strong>Name</strong>
                  </TableCell>
                  <TableCell align="right">{user.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>E-mail</strong>
                  </TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Website</strong>
                  </TableCell>
                  <TableCell align="right">{user.website}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" colSpan={2}>
                    <ListItem
                      button
                      style={{ textAlign: "center" }}
                      onClick={handlerUser.bind(null, user.id)}
                    >
                      <ListItemText primary="Albums" />
                    </ListItem>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    );
  });

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h3"
        gutterBottom
        style={{ textAlign: "center", marginTop: 15 }}
      >
        Users
      </Typography>
      <Box component="div" className="mtb-3">
        {renderUsers}
      </Box>
    </Container>
  );
}
