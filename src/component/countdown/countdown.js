import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    flexGrow: 1
  },
});

class Countdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      completed: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { completed: (props.elapsed / props.duration) * 100 };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography component="h1" variant="h5">{((this.props.duration - this.props.elapsed) / 1000).toFixed(2)}</Typography>
        <LinearProgress color="secondary" variant="determinate" value={this.state.completed} />
      </div>
    );
  }
}

export default withStyles(styles)(Countdown);
