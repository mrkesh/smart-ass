import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({

});

class HighScoresDialog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      levels: ['easy', 'medium', 'hard']
    }
  }

  handleClose = () => {
    this.props.onClose();
  };

  render() {
    const { open } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="high-scores-dialog-title" open={open}>
        <DialogTitle id="high-scores-dialog-title">Set backup account</DialogTitle>
        <div>
          <List>
            {this.state.levels.map(level => (
              <ListItem button key={level}>
                <ListItemText primary={level} />
              </ListItem>
            ))}
          </List>
        </div>
      </Dialog>
    );
  }
}

export default withStyles(styles)(HighScoresDialog);