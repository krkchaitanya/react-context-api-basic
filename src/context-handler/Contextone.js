import React, { Component } from 'react';
import {MyContext, MyProvider} from './ContextHandler';

const Family = (props) => (
    <div className="family">
        <Person />
    </div>
)

class Person extends Component {
    render() {
      return (
        <div
         className="person"
         style={{
             backgroundColor:"lightGrey"
         }}
         >
          <MyContext.Consumer>
            {(context) => (
              <React.Fragment>
                <p>Address: {context.state.address}</p>
                <p>Name: {context.state.name}</p>
                <p>Age -- > {context.state.age}.....{context.state.retirementAge}</p>
                <button onClick={context.growAYearOlder}>🍰🍥🎂+birthday</button>
                <br />
                <h2>Calculate retirement age of a person....</h2>
                <br />
                <button onClick={context.retirementAgeHandler(5)}>RetirementAGEfun</button>
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
 