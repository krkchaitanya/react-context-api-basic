import React from 'react';

// first we make new context
export const MyContext = React.createContext();
// create a provider component where our data exists.
export class MyProvider extends React.Component {
    state={
        name:"Context API",
        address:"slc utah",
        age:100,
        retirementAge: 0,
    }
retirementAgeCalFun = (dob) => {
    this.setState({
        retirementAge: this.state.retirementAge+25,
    });
    return dob;
}
    render() {
        console.log('retirement age calculator..', this.state.reti);
        return (
            <MyContext.Provider value={{
                state: this.state,
                growAYearOlder: () => {
                    this.setState({
                        age:this.state.age+1,
                        name:"humanbeing"
                    })
                },
                retirementAgeHandler: this.retirementAgeCalFun,
            }}>
                {this.props.children}
            </MyContext.Provider>    
        )
    }
}
