import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({

});

class CurrentGame extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {

    const { classes, onCreation } = this.props;

    return (
      <Paper className={classes.paper}>
        <div>Hello</div>
      </Paper>      
    );

  }
}

export default withStyles(styles)(CurrentGame);