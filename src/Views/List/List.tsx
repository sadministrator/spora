import React from 'react';
import './List.css';
import * as storage from '../../Helpers/storage';
import User from '../../Types/User';

interface IProps {
    changeView: (view: string) => void;
}

interface IState {}

class List extends React.Component<IProps, IState> {
    userStack: User[] = storage.getUsers();

    constructor(props: IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    }

    handleDelete(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }
    render() {
        let topUser: User = this.userStack[0];
        let userList: any[] = [];
        this.userStack.map((user) => {
            userList.push(
                <div style={{border: "black solid 1px", width: "70%"}}>
                    <p>{user.name}</p>
                    <img src={user.imagePreviewUrl} alt="user icon" height="10%" width="10%" />
                </div>
            )
        })
        return (
            <div className="List">
                <img src={topUser.imagePreviewUrl} alt="top user" height="25%" width="25%" />
                <p>{topUser.email}</p>
                <p>{topUser.phone}</p>
                <p>{topUser.address}</p>
                <p>{topUser.birthdate}</p>

                <hr style={{color: "black", backgroundColor: "black", height: 1}}/>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    {userList}
                </div>
            </div>
        )
    }
}

export default List;
