import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { calculateScore } from '../../util/scoreutil';
import Paper from '@material-ui/core/Paper';
import CurrentCard from '../../component/current-card/current-card';
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

class CurrentGameScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      score: 0,
      streak: 0
    };
  }

  componentWillUnmount() {
    this.setState({
      index: 0,
      score: 0,
      streak: 0
    });
  }

  nextCard = () => {

    let length = this.props.game.cards.length;
    if (this.state.index === length-1 ) {
      this.props.onCompletion(this.state.score);
    } else {
      this.setState({
        index: this.state.index + 1,
        streak: 0
      });
    }
  };
  
  handleAnswer = (answer, time) => {

    let { index, score, streak } = this.state;
    const card = this.props.game.cards[index];
    const numCards = this.props.game.cards.length;
    
    if (card.answer === answer) {
      streak++;
      score += calculateScore(time, streak);
    } else {
      streak = 0;
    }

    if (this.state.index === numCards-1 ) {
      this.props.onCompletion(this.state.score);
    } else {
      this.setState({
        index: index + 1,
        score,
        streak
      });
    }
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

export default withStyles(styles)(CurrentGameScreen);