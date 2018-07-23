import React, { createContext } from 'react';

// first we make new context
export const MyContext = createContext();
export const { Provider , Consumer } = createContext('light');
// create a provider component where our data exists.
export class MyProvider extends React.Component {
    state={
        name:"Context API",
        address:"slc utah",
        age:100,
        numberHandler: 0,
    }
numberHandlerFunc = () => {
    this.setState({
        numberHandler: this.state.numberHandler+2,
    });
}
    render() {
        console.log('numberHandler calculator..', this.state.numberHandler);
        return (
            <Provider value={{
                state: this.state,
                growAYearOlder: () => {
                    this.setState({
                        age:this.state.age+1,
                        name:"humanbeing"
                    })
                },
                numberHandlerFunc: this.numberHandlerFunc,
            }}>
                {this.props.children}
            </Provider>    
        )
    }
}
