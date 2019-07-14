import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import CurrentGameScreen from './view/current-game-screen/current-game-screen';
import DifficultyEnum from './model/difficultyenum';
import Game from './model/game';
import GameSetup from './component/game-setup/game-setup';
import StartScreen from './view/start-screen/start-screen';
import { createGame } from './service/game-service';
import { setHighScore } from './util/scoreutil';

interface AppState {
  currentGame: Game | null,
  setup: boolean
}

export default class App extends React.Component<any, AppState> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      currentGame: null,
      setup: false
    }
    
  }

  onCreation = async (difficulty: DifficultyEnum, event: Event) => {
    event.preventDefault();
    const currentGame = await createGame(difficulty);
    this.setState({currentGame});
  };

  onCompletion = (score: number) => {
    setHighScore(this.state.currentGame!.difficulty, score);
    this.setState({
      currentGame: null,
      setup: false
    })
  };

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