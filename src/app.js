import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CurrentGame from './component/current-game/current-game';
import GameSetup from './component/game-setup/game-setup';
import StartScreen from './view/start-screen/start-screen';
import { createGame } from './controller/game-controller';

const styles = theme => ({

});

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentGame: null,
      setup: false
    }
    this.onCreation = this.onCreation.bind(this);
  }

  async onCreation(difficulty, event) {
    event.preventDefault();
    const currentGame = await createGame(difficulty);
    this.setState({currentGame});
  }

  handleNewGame = () => {
    this.setState({ setup: true });
  };
  
  render() {

    const { currentGame, setup } = this.state;
    let component;

    if (currentGame) {
      component = <CurrentGame game={currentGame} />
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

export default withStyles(styles)(App);