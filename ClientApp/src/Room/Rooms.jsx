import React, { Component } from 'react';

export class Rooms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rooms: [],
            loading: true
        }
    }

    renderAllRoomsTable(rooms) {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Head</th>
                        <th>Width</th>
                        <th>Length</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>E</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
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