import { get } from 'lodash';
import React from 'react';
import store from 'store';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class HighScoresDialog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      levels: {
        'easy': 'Easy',
        'medium': 'Medium',
        'hard': 'Hard'
      }
    }
  }

  handleClose = () => {
    this.props.onClose();
  };

  render() {
    const { open } = this.props;
    const { levels } = this.state;
    const keys = Object.keys(levels);

    debugger;
    return (
      <Dialog onClose={this.handleClose} aria-labelledby="high-scores-dialog-title" open={open}>
        <DialogTitle id="high-scores-dialog-title">High scores</DialogTitle>
        <div>
          <List>
            {keys.map(key => (
              <ListItem key={key}>
                <ListItemText primary={levels[key]} secondary={get(store.get('scores'), key, 0)}/>
              </ListItem>
            ))}
          </List>
        </div>
      </Dialog>
    );
  }
}

export default HighScoresDialog;