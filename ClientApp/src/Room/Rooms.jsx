import React, { Component } from 'react';
import axios from 'axios';

export class Rooms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rooms: [],
            loading: true
        }
    }

    componentDidMount() {
        this.populateRoomsData();
    }

    populateRoomsData() {
        axios.get("api/Rooms/").then(result => {
            const response = result.data;
            this.setState({rooms: response, loading: false});
        })
    }

    renderAllRoomsTable(rooms) {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Head</th>
                        <th>Width</th>
                        <th>Length</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rooms.map(room => {
                        <tr key={room.id}>
                            <td>{room.name}</td>
                            <td>{room.width}</td>
                            <td>{room.length}</td>
                            <td>-</td>
                        </tr>
                        })
                    }
                </tbody>
            </table>
        );
    }

    render() {

        let content = this.state.loading ? (
            <p>
                <em>Loading ...</em>
            </p>
        ) : (
                this.renderAllRoomsTable(this.state.trips)
            )
        return (
            <div>
                <h1>All Room</h1>
                {content}
            </div>
            );
    }
}