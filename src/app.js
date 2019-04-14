import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CurrentGame from './component/current-game/current-game';
import GameSetup from './component/game-setup/game-setup';
import { loadQuestions } from './controller/game-controller';

const styles = theme => ({

});

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      game: null
    }
    this.onCreation = this.onCreation.bind(this);
  }

  async onCreation(difficulty, event) {
    event.preventDefault();
    const questions = await loadQuestions(difficulty);
  }
  
  render() {

    const { game } = this.state;
    let component;

    if (game) {
      component = <CurrentGame />
    } else {
      component = <GameSetup onCreation={this.onCreation} />
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