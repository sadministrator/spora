import React from 'react';
import Startscreen from './Views/Login/Login';
import RegisterScreen from './Views/Register/Register';
import ListScreen from './Views/List/List';

interface IProps { }

interface IState {
    view: string;
}

class Navigator extends React.Component<IProps, IState> {
    state: IState = { view: 'Start' };

    changeView = (view: string) => {
        this.setState({
            view: view
        });
    }

    render() {
        switch (this.state.view) {
            case 'Start':
                return (
                    <Startscreen changeView={this.changeView.bind(this)} />
                );
            case 'Register':
                return (
                    <RegisterScreen changeView={this.changeView.bind(this)} />
                );
            case 'List':
                return (
                    <ListScreen changeView={this.changeView.bind(this)} />
                );
        }
    }
}

export default Navigator;
