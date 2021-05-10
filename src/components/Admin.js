import React, {Component} from "react";


class Admin extends Component {
    render() {
        return (
            <footer>
                <button
                    onClick={this.props.loadExample}
                >
                    Fill raw data
                </button>
            </footer>
        );
    }
}

export default Admin