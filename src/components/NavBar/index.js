import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import DeleteIcon from "@material-ui/icons/Delete";

import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {
  toggleModal,
  toggleTodo,
  clearCompleted,
  deleteOne
} from "../../store/actions";
const styles = theme => ({
  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  paper: {
    width: "50%",
    paddingBottom: 50,
    margin: "0 auto",
    marginTop: 50,
    borderRadius: 5
  },
  list: {
    marginBottom: theme.spacing.unit * 2
  },
  subHeader: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    top: "auto",
    bottom: 0
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  }
});

function BottomAppBar(props) {
  const { classes, toggleModal, todos } = props;

  const handleCompleted = id => {
    props.toggleTodo(id);
  };

  const clearCompleted = () => {
    props.clearCompleted();
  };

  const deleteOne = id => {
    props.deleteOne(id);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          Todos
        </Typography>
        <List className={classes.list}>
          {todos.map(todo => {
            const date = Date(todo.id);
            return (
              <Fragment key={todo.id}>
                <ListItem button onClick={() => handleCompleted(todo.id)}>
                  <ListItemText
                    style={
                      todo.completed ? { textDecoration: "line-through" } : null
                    }
                    primary={todo.task}
                    secondary={date}
                  />
                  <IconButton color="inherit" aria-label="Open drawer">
                    <DeleteIcon onClick={() => deleteOne(todo.id)} />
                  </IconButton>
                </ListItem>
              </Fragment>
            );
          })}
        </List>
      </Paper>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton color="inherit" aria-label="Open drawer">
            <ClearIcon onClick={clearCompleted} />
          </IconButton>
          <Fab color="secondary" aria-label="Add" className={classes.fabButton}>
            <AddIcon onClick={toggleModal} />
          </Fab>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { toggleModal, toggleTodo, clearCompleted, deleteOne }
)(withStyles(styles)(BottomAppBar));
