import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CurrentCard from '../current-card/current-card';


const styles = theme => ({

});

class CurrentGame extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      card: props.game.cards[0]
    };
  }
  
  render() {

    const { classes, } = this.props;

    return (
      <Paper className={classes.paper}>
        <CurrentCard
          card={this.state.card}
        />
      </Paper>      
    );

  }
}

export default withStyles(styles)(CurrentGame);