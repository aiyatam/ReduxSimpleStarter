import React, { Component } from 'react';

class SearchBar extends Component {
    // render() {
    //     return <input onChange={this.onInputChange}/>;
    // }

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    // Called whenever a new instance of SearchBar is created
    constructor(props) {
        super(props);

        // We only use this.state syntax in the constructor
        this.state = { term: '' };
    }

    render() {
        return (
            <div>
                <input onChange={event => this.setState({term: event.target.value})} />
            </div>
        );
    }
}

export default SearchBar;
