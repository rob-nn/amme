import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Button from '@material-ui/core/Button';
 
const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  closeButton: {
      width:100,
  }
};

class MainMenuDrawer extends React.Component {
  render() {
    const { classes } = this.props;

    const menuItens = (
        <List>
          <ListItem button onClick={this.props.openForm('TRIAGEM_PRE_OPERATORIA')}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Triagem Pré-Operatória" />
          </ListItem>
          <ListItem button onClick={this.props.openForm('QUESTIONARIO_PRE_ANESTESICO')}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Questionário Pré-Anestésico" />
          </ListItem>
          <ListItem button onClick={this.props.openForm('INVALIDO')}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inválido" />
          </ListItem>
        </List>
      );

    const sideList = (
      <div className={classes.list}>
        <List>{menuItens}</List>
      </div>
    );

    return (
    <SwipeableDrawer
        open={this.props.opened}
        onClose={this.props.toggleDrawer()}
        onOpen={this.props.toggleDrawer()}
    >
        <Button className={classes.closeButton}
          onClick={this.props.toggleDrawer()}>Close</Button>
        <div
            tabIndex={0}
            role="button"
            onClick={this.props.toggleDrawer()}
            onKeyDown={this.props.toggleDrawer()}
            >
            {sideList}
        </div>
    </SwipeableDrawer>
    );
  }
}

MainMenuDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainMenuDrawer);