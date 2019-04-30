import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import CurrentGameScreen from './view/current-game-screen/current-game-screen';
import GameSetup from './component/game-setup/game-setup';
import StartScreen from './view/start-screen/start-screen';
import { createGame } from './controller/game-controller';
import { setHighScore } from './util/scoreutil';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentGame: null,
      setup: false
    }
    this.onCreation = this.onCreation.bind(this);
    this.onCompletion = this.onCompletion.bind(this);
  }

  async onCreation(difficulty, event) {
    event.preventDefault();
    const currentGame = await createGame(difficulty);
    this.setState({currentGame});
  }

  onCompletion(score) {
    setHighScore(this.state.currentGame.difficulty, score);
    this.setState({
      currentGame: null,
      setup: false
    })
  }

  handleNewGame = () => {
    this.setState({ setup: true });
  };
  
  render() {

    const { currentGame, setup } = this.state;
    let component;

    if (currentGame) {
      component = <CurrentGameScreen
        game={currentGame}
        onCompletion={this.onCompletion} />
    } else if (setup) {
      component = <GameSetup onCreation={this.onCreation} />
    } else {
      component = <StartScreen
        onNewGame={this.handleNewGame}
      />
    }

    return (
      <main>
        <CssBaseline />
        {component}
      </main>
      
    );

  }
}