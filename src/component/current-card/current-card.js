import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Countdown from '../countdown/countdown';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  btn: {
    display: 'block',
    marginTop: theme.spacing.unit
  },
  root: {
    marginTop: theme.spacing.unit * 3
  }
});

class CurrentCard extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.index + 1,
      value: null
    }
  }

  static getDerivedStateFromProps(props, state) {
    return { number: props.index + 1 };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  
  render() {

    const { classes, card } = this.props;

    return (
      <div>
        <Typography component="h1" variant="h5">Question #{this.state.number}</Typography>
        <form className={classes.form}>
          <FormControl>
            <FormLabel component="legend">{card.question}</FormLabel>
            <RadioGroup
              aria-label="Choices"
              name="choices"
              value={this.state.value}
              onChange={this.handleChange}
            >
              {card.choices.map((choice, index) => {
                return <FormControlLabel key={index} value={index.toString()} control={<Radio />} label={choice} />
              })}
            </RadioGroup>
          </FormControl>
          <Button
            className={classes.btn}
            color="primary"
            variant="contained"
            disabled={!this.state.value}
            type="submit"
          >
              Lock Answer
          </Button>
          <Countdown
            classes={classes}
            key={this.state.number}
            duration={10000}
            onCompletion={this.props.onDone}
          />
        </form>
      </div>
    );

  }
}

export default withStyles(styles)(CurrentCard);