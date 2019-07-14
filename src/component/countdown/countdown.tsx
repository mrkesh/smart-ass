import React from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) => ({
  root: {
    marginTop: theme.spacing(3),
    flexGrow: 1
  },
});

interface CountdownProps {
  classes: any,
  duration: number,
  elapsed: number,
}

interface CountdownState {
  completed: number
}

class Countdown extends React.Component<CountdownProps, CountdownState> {

  constructor(props: CountdownProps) {
    super(props);
    this.state = {
      completed: 0
    };
  }

  static getDerivedStateFromProps(props: CountdownProps, state: CountdownState) {
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
