import React from 'react';
import './Startscreen.css';
import questionMark from './questionMark.jpg'

interface IProps {}

interface IState {
    email: string
}

class Startscreen extends React.Component<IProps, IState> {
    state: IState = {email: ''};
    users: string[] = ['marcoTheWebDev@gmail.com', 'jr@gmail.com'];

    constructor(props: IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({email: event.target.value})
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.users.forEach(element => {
            if(element === this.state.email) {
                console.log('go to userList screen')
            }
        });
        console.log('go to register screen')
    }
    render() {
        return (
            <div className="Startscreen">
                <header className="Startscreen-header">
                    <img src={questionMark} className="App-logo" alt="logo" height="400" width="400" />
                    <p>
                        Nombre Apellido
                    </p>
                    <form className="Form" onSubmit={this.handleSubmit}>
                        <input type="text" name="email" placeholder="Email Address" value={this.state.email} onChange={this.handleChange} />
                        <input type="submit" value="Submit" />
                    </form>
                </header>
            </div>
        )
    }
}

export default Startscreen;
