import React from 'react';
import './Registerscreen.css';
import addProfilePic from './addProfilePic.png'

interface IProps {}

interface IState {
    name: string,
    email: string,
    phone: string,
    address: string,
    birthdate: string
}

class Registerscreen extends React.Component<IProps, IState> {
    state: IState = {
        name: '',
        email: '',
        phone: '',
        address: '',
        birthdate: ''
    };

    constructor(props: IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let user: IState = this.state;
        let userStackRaw = localStorage.getItem('userStack');
        let userStack: IState[] = [];
        if(userStackRaw) {
            userStack.push(JSON.parse(userStackRaw));
            localStorage.setItem('userStack', JSON.stringify(userStack));
        } else {
            localStorage.setItem('userStack', JSON.stringify(user));
        }
        
    }
    render() {
        return (
            <div className="Registerscreen">
                <header className="Registerscreen-header">
                    <img src={addProfilePic} className="App-logo" alt="logo" height="400" width="400" />
                    <p>
                        Nombre Apellido
                    </p>
                    <form className="Form" onSubmit={this.handleSubmit}>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                        <input type="text" name="email" placeholder="Email Address" value={this.state.email} onChange={this.handleChange} />
                        <input type="text" name="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.handleChange} />
                        <input type="text" name="address" placeholder="Address" value={this.state.address} onChange={this.handleChange} />
                        <input type="text" name="birthdate" placeholder="Date of Birth" value={this.state.birthdate} onChange={this.handleChange} />
                        <input type="submit" value="Submit" />
                    </form>
                </header>
            </div>
        )
    }
}

export default Registerscreen;
