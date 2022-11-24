import React, { Component } from "react";

export default class Consultants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        };
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Consultants</h1>
                    <div class = "students">
                    </div>
                </header>
            </div>
        )
    }
}
