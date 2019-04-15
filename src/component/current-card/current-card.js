import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({

});

class CurrentCard extends React.Component {
  
  constructor(props) {
    super(props);
  }

  handleChange() {

  }
  
  render() {

    const { classes, card } = this.props;
    debugger;

    return (
      <div>
        <Typography component="h1" variant="h5">Question #1</Typography>
        <form className={classes.form}>
          <FormControl>
            <FormLabel component="legend">{card.question}</FormLabel>
            <RadioGroup
              aria-label="Choices"
              name="choices"
              onChange={this.handleChange}
            >
              {card.choices.map((choice, index) => {
                return <FormControlLabel value={index} control={<Radio />} label={choice} />
              })}
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
      </div>
    );

  }
}

export default withStyles(styles)(CurrentCard);