import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import Counter from './Counter';


//TODO (FilteredList): create a produce list using the 'const' variable keyword

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* TODO (HelloWorld): create an instance of the HelloWorld Component */}
                <HelloWorld name={`Bang`}/>

                {/* TODO (Counter): create an instance of the Counter Component */}
                <Counter />

                {/* TODO (FilteredList): create an instance of the FilteredList Component with a variable named items that takes in your produce list */}
                {/* <FilteredList/> */}
            </div>
        );
    }
}

export default App;