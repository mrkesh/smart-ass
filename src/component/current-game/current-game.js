import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { calculateScore } from '../../util/scorebuilder';
import Paper from '@material-ui/core/Paper';
import CurrentCard from '../current-card/current-card';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  paper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: theme.spacing.unit * 2,
    width: '800px'
  },
  score: {
    padding: theme.spacing.unit
  }
});

class CurrentGame extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      score: 0,
      streak: 0
    };
  }

  nextCard = () => {
    this.setState({index: this.state.index + 1})
  };
  
  handleAnswer = (answer, time) => {

    let { index, score, streak } = this.state;
    const card = this.props.game.cards[index];
    
    if (card.answer === answer) {
      streak++;
      score += calculateScore(time, streak);
    } else {
      streak = 0;
    }

    this.setState({
      index: index + 1,
      score,
      streak
    });
  };

  render() {

    const { classes, game } = this.props;
    const { index } = this.state;
    const card = game.cards[index];

    return (
      <div>
        <Typography 
          className={classes.score}
          component="h1" variant="h5"
        >
          Score: {this.state.score}
        </Typography>
        <Paper className={classes.paper}>
          <CurrentCard
            key={card.question}
            onDone={this.nextCard}
            onAnswer={this.handleAnswer}
            index={index}
            card={card}
          />
        </Paper>      
      </div>
    );

  }
}

export default withStyles(styles)(CurrentGame);