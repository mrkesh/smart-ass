import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
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
  form: {
    margin: theme.spacing.unit * 3,
  }
});

class GameSetup extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: 'medium'
    }
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  
  render() {

    const { classes, onCreation } = this.props;

    return (
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">New Game</Typography>
        <form onSubmit={onCreation.bind(this, this.state.value)} className={classes.form}>
          <FormControl required>
            <FormLabel component="legend">Difficulty</FormLabel>
            <RadioGroup
              aria-label="Difficulty"
              name="difficulty"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <FormControlLabel value="easy" control={<Radio />} label="Easy" />
              <FormControlLabel value="medium" control={<Radio />} label="Medium" />
              <FormControlLabel value="hard" control={<Radio />} label="Hard" />
            </RadioGroup>
          </FormControl>
          <Button
            className={classes.btn}
            color="primary"
            variant="contained"
            type="submit"
          >
              Start
          </Button>
        </form>
      </Paper>      
    );

  }
}

export default withStyles(styles)(GameSetup);