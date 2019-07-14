import React from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DifficultyEnum from '../../model/difficultyenum';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup, { RadioGroupProps } from '@material-ui/core/RadioGroup';
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
  form: {
    margin: theme.spacing(3)
  }
});

interface GameSetupState {
  value: DifficultyEnum
}

class GameSetup extends React.Component<any, GameSetupState> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      value: DifficultyEnum.MEDIUM
    }
  }

  handleChange = (event: React.ChangeEvent<RadioGroupProps>) => {
    this.setState({ value: (event.target.value as DifficultyEnum) });
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
              <FormControlLabel value={DifficultyEnum.EASY} control={<Radio />} label="Easy" />
              <FormControlLabel value={DifficultyEnum.MEDIUM} control={<Radio />} label="Medium" />
              <FormControlLabel value={DifficultyEnum.HARD} control={<Radio />} label="Hard" />
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