import { get } from 'lodash';
import React from 'react';
import store from 'store';
import DialogTitle from '@material-ui/core/DialogTitle';
import DifficultyEnum from '../../model/difficultyenum';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

interface HighScoresDialogProps {
  onClose: () => void,
  open: boolean
}

interface HighScoresDialogState {
  levels: { [key: string]: string }
}

class HighScoresDialog extends React.Component<HighScoresDialogProps, HighScoresDialogState> {

  constructor(props: HighScoresDialogProps) {
    super(props);
    this.state = {
      levels: {
        [DifficultyEnum.EASY] : 'Easy',
        [DifficultyEnum.MEDIUM]: 'Medium',
        [DifficultyEnum.HARD]: 'Medium'
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