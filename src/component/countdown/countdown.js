import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class Countdown extends React.Component {
  state = {
    completed: 0,
    duration: this.props.duration || 5000,
    interval: 50,
    remaining: (this.props.duration || 5000) / 1000
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, this.state.interval);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed, duration, interval, remaining } = this.state;

    if (completed === 100) {
      this.setState({
        completed: 0,
        remaining: (this.props.duration || 5000) / 1000
      });
      this.props.onCompletion();
    } else {
      this.setState({ 
        completed: Math.min(completed + (100 * interval/duration), 100),
        remaining: Math.max(0, remaining - (interval / 1000))
      });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography component="h1" variant="h5">{this.state.remaining.toFixed(2)}</Typography>
        <LinearProgress color="secondary" variant="determinate" value={this.state.completed} />
      </div>
    );
  }
}

export default withStyles(styles)(Countdown);
