import React from 'react';
import './Login.css';
import questionMark from './questionMark.jpg';
import * as storage from '../../Helpers/storage';
import User from '../../Types/User';

interface IProps {
    changeView: (view: string) => void
}

interface IState {
    email: string;
}

class Startscreen extends React.Component<IProps, IState> {
    state: IState = { email: '' };
    users: User[] = storage.getUsers();
    lastUser: string = '';

    constructor(props: IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: event.target.value });
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let match = false;
        if (this.users) {
            this.users.forEach(element => {
                if (element.email === this.state.email) {
                    match = true
                }
            });
        }
        if (match) {
            this.props.changeView('List');
        } else {
            this.props.changeView('Register')
        }
    };

    render() {
        let lastUser = storage.popUser();
        let image;
        if (lastUser && lastUser.imagePreviewUrl) {
            image = (
                <div>
                    <img src={lastUser.imagePreviewUrl} alt="last user" height="30%" width="30%" />
                    <p>{lastUser.name}</p>
                </div>
            );
        } else {
            image = (<img src={questionMark} alt="logo" height="30%" width="30%" />)
        }
        return (
            <div className="Login">
                {image}
                <form className="Form" onSubmit={this.handleSubmit}>
                    <input type="text" name="email" placeholder="Email Address" value={this.state.email} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Startscreen;
