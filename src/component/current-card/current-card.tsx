import React from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Countdown from '../countdown/countdown';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import GameCard from '../../model/gamecard';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) => ({
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    backgroundColor: deepPurple[500],
    fontSize: theme.spacing(2),
    '&.selected': {
      backgroundColor: deepOrange[500]
    }
  },
  btn: {
    display: 'block',
    marginTop: theme.spacing(1)
  }
});

const QuestionMap: { [key: number]: string } = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D'
};

interface CurrentCardProps {
  classes: any,
  card: GameCard,
  onAnswer: (answer: string, time: number) => void,
  onDone: () => void,
  index: number,
}

interface CurrentCardState {
  number: number,
  selectedIndex: number | null,
  elapsedTime: number,
  timeToAnswer: number,
  value: any
}

class CurrentCard extends React.Component<CurrentCardProps, CurrentCardState> {

  timer: NodeJS.Timeout;
  
  constructor(props: CurrentCardProps) {
    super(props);
    this.state = {
      number: this.props.index + 1,
      selectedIndex: null,
      elapsedTime: 0,
      timeToAnswer: 10000,
      value: null
    }
  }

  static getDerivedStateFromProps(props: CurrentCardProps, state: CurrentCardState) {
    return { number: props.index + 1 };
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 50);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { elapsedTime, timeToAnswer } = this.state;

    if (elapsedTime === timeToAnswer) {
      this.setState({ elapsedTime: 0 });
      this.props.onDone();
    } else {
      this.setState({ elapsedTime: Math.min(elapsedTime + 50, timeToAnswer) });
    }
  };

  handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number, choice: any) => {
    this.setState({ 
      selectedIndex: index,
      value: choice
    });
  };
  
  render() {

    const { classes, card, onAnswer } = this.props;
    const { selectedIndex } = this.state;

    return (
      <div>
        <Typography component="h1" variant="h5">Question #{this.state.number}</Typography>
        <form className={classes.form} onSubmit={onAnswer.bind(this, this.state.value, this.state.timeToAnswer - this.state.elapsedTime)}>
          <FormControl fullWidth>
            <FormLabel component="p">{card.question}</FormLabel>
            <List component="nav">
            {card.choices.map((choice, index) => {
                return (
                  <ListItem 
                    button
                    key={choice}
                    selected={selectedIndex === index}
                    onClick={event => this.handleListItemClick(event, index, choice)}>
                    <ListItemAvatar>
                      <Avatar className={`${classes.avatar} ${selectedIndex === index ? 'selected' : ''}`}>{QuestionMap[index]}</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={choice} />
                  </ListItem>
                )
              })}
              </List>
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
            key={this.state.number}
            duration={this.state.timeToAnswer}
            elapsed={this.state.elapsedTime}
          />
        </form>
      </div>
    );

  }
}

export default withStyles(styles)(CurrentCard);