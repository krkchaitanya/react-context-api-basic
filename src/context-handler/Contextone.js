import React, { Component } from 'react';

// first we make new context
const MyContext = React.createContext();

// create a provider component where our data exists.
class MyProvider extends React.Component {
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
                    })
                }
            }}>
                {this.props.children}
            </MyContext.Provider>    
        )
    }
}

const Family = (props) => (
    <div className="family">
        <Person />
    </div>
)

class Person extends Component {
    render() {
      return (
        <div className="person">
          <MyContext.Consumer>
            {(context) => (
              <React.Fragment>
                <p>Address: {context.state.address}</p>
                <p>Name: {context.state.name}</p>
                <p>Age -- > {context.state.age}</p>
                <button onClick={context.growAYearOlder}>🍰🍥🎂+birthday</button>
              </React.Fragment>
            )}
          </MyContext.Consumer>
        </div>
      )
    }
  }
  

class Contextone extends React.Component {

    render() {
        return (
            <MyProvider>
            <div>
                <p>I'm the application</p>
                <Family />
            </div>
            </MyProvider>
        );
    }
};

export default Contextone;
 