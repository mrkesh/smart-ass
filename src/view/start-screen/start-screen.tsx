import React from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HighScoresDialog from '../../component/high-scores-dialog/high-scores-dialog';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) => ({
  btn: {
    display: 'block',
    marginTop: theme.spacing(1)
  },
  paper: {
    marginTop: theme.spacing(3),
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: theme.spacing(2),
    width: '400px'
  },
  typography: {
    paddingBottom: theme.spacing(4)
  }
});

interface StartScreenProps {
  classes: any,
  onNewGame: () => void
}

interface StartScreenState {
  open: boolean
}

class StartScreen extends React.Component<StartScreenProps, StartScreenState> {
  
  constructor(props: StartScreenProps) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleClick = (event: Event) => {
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleHighScores = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState({ open: true });
  };
  
  render() {

    const { classes, onNewGame } = this.props;

    return (
      <Paper className={classes.paper}>
        <Typography
          className={classes.typography}
          component="h1" 
          variant="h5"
        >
          Main Menu
        </Typography>
        <Button
          fullWidth
          className={classes.btn}
          color="primary"
          onClick={onNewGame}
          variant="contained"
        >
          New Game
        </Button>
        <Button
          fullWidth
          className={classes.btn}
          color="secondary"
          onClick={this.handleHighScores}
          variant="outlined"
        >
          High Scores
        </Button>
        <HighScoresDialog
          open={this.state.open}
          onClose={this.handleClose}
        />
      </Paper>      
    );

  }
}

export default withStyles(styles)(StartScreen);