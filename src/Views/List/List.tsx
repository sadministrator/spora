import React from 'react';
import './List.css';

interface IProps {
    changeView: (view: string) => void;
}

interface IState {}

class List extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }
    render() {
        return (
            <div className="Startscreen">
                <p>Welcome to the List Screen, Baby</p>
            </div>
        )
    }
}

export default List;
