import React from 'react';
import './Register.css';
import addProfilePic from './addProfilePic.png';
import * as validator from '../../Helpers/validator'
import * as storage from '../../Helpers/storage';

interface IProps {
    changeView: (view: string) => void;
}

interface IState {
    picture: File,
    name: string,
    email: string,
    phone: string,
    address: string,
    birthdate: string,
    imagePreviewUrl: any;
}

class RegisterScreen extends React.Component<IProps, IState> {
    state: IState = {
        picture: new File([], 'filename'),
        name: '',
        email: '',
        phone: '',
        address: '',
        birthdate: '',
        imagePreviewUrl: ''
    };

    constructor(props: IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        let reader = new FileReader();

        if(event.target.files && event.target.files[0]) {
            let file = event.target.files[0];

            reader.onloadend = () => {
                this.setState({
                    ...this.state,
                    picture: file,
                    imagePreviewUrl: reader.result
                })
            }
            reader.readAsDataURL(file)
        } else {
            alert('File is not valid. Please try again.');
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (validator.hasEmptyAttribute(this.state)) {
            alert('Please fill in each field.')
        } else {
            storage.pushUser(this.state)
            this.props.changeView('List')
        }
    }
    render() {
        let imagePreview;
        if(this.state.imagePreviewUrl) {
            imagePreview = (<img src={this.state.imagePreviewUrl} alt="uploaded" height="50%" width="50%" />);
        } else {
            imagePreview = (<img src={addProfilePic} alt="logo" height="50%" width="50%" />)
        }
        return (
            <div className="RegisterScreen">
                <header className="RegisterHeader">
                    {imagePreview}
                    <form className="Form" onSubmit={this.handleSubmit}>
                        <input type='file' onChange={this.handleImageChange} />
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                        <input type="text" name="email" placeholder="Email Address" value={this.state.email} onChange={this.handleChange} />
                        <input type="text" pattern='\d*' name="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.handleChange} />
                        <input type="text" name="address" placeholder="Address" value={this.state.address} onChange={this.handleChange} />
                        <input type="text" name="birthdate" placeholder="Date of Birth" value={this.state.birthdate} onChange={this.handleChange} />
                        <input type="submit" value="Submit" />
                    </form>
                </header>
            </div>
        )
    }
}

export default RegisterScreen;
