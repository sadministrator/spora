import React from 'react';
import Startscreen from '../Startscreen/Startscreen';
import RegisterScreen from '../RegisterScreen/RegisterScreen'
import List from '../List/List'

interface IProps {}

interface IState {
    view: string
}

class App extends React.Component<IProps, IState> {
    state: IState = {view: 'Start'};

    constructor(props: IProps) {
        super(props);
    }

    render() {
      switch(this.state.view) {
        case 'Start':
          return (
            <Startscreen />
          );
        case 'Register':
          return (
            <RegisterScreen />
          );
        case 'List':
          return (
            <List />
          );
      }
    }
}

export default App;
