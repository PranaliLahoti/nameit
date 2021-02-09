import React from 'react';
import Header from '../Header/Header';
import ResultContainer from '../ResultContainer/ResultContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css'

const name = require('@rstacruz/startup-name-generator')

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            appName: "Name It",
            headerExpanded: true,
            suggestedNames: []
        }
    }

    onInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });
    }

    render() {
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} appTitle={this.state.appName} />
                <SearchBox onInputChangefun={this.onInputChange} />
                <ResultContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}


export default App
