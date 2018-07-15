import React from 'react';

// first we make new context
export const MyContext = React.createContext();
// create a provider component where our data exists.
export class MyProvider extends React.Component {
    state={
        name:"chaitanya",
        address:"slc utah",
        age:100,
    }
    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                growAYearOlder: () => {
                    this.setState({
                        age:this.state.age+1,
                        name:"humanbeing"
                    })
                }
            }}>
                {this.props.children}
            </MyContext.Provider>    
        )
    }
}
