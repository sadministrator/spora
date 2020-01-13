import React from 'react';
import './Login.css';
import questionMark from './questionMark.jpg';

interface IProps {
    changeView: (view: string) => void
}

interface IState {
    email: string;
}

class Startscreen extends React.Component<IProps, IState> {
    state: IState = {email: ''};
    users: string[] = ['marcoTheWebDev@gmail.com', 'jr@gmail.com'];
    lastUser: string = '';

    constructor(props: IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({email: event.target.value});
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.users.forEach(element => {
            if(element === this.state.email) {
                this.props.changeView('List');
            }
        });
        this.props.changeView('Register')
    };

    render() {
        return (
            <div className="Startscreen">
                <header className="Startscreen-header">
                    <img src={questionMark} alt="logo" height="50%" width="50%" />
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
