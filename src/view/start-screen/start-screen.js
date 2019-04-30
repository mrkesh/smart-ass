import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HighScoresDialog from '../../component/high-scores-dialog/high-scores-dialog';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  btn: {
    display: 'block',
    marginTop: theme.spacing.unit
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: theme.spacing.unit * 2,
    width: '400px'
  },
  typography: {
    paddingBottom: theme.spacing.unit * 4,
  }
});

class StartScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleClick = event => {
    this.props.setup = true;
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleHighScores = event => {
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