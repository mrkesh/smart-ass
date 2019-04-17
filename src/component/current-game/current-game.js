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
      index: 0
    };
  }

  nextCard = () => {
    this.setState({index: this.state.index + 1})
  };
  
  render() {

    const { classes, game } = this.props;
    const { index } = this.state;
    const card = game.cards[index];

    return (
      <Paper className={classes.paper}>
        <CurrentCard
          onDone={this.nextCard}
          index={index}
          card={card}
        />
      </Paper>      
    );

  }
}

export default withStyles(styles)(CurrentGame);