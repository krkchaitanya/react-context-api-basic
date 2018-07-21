import React, { Component } from 'react';

import {MyProvider, Consumer} from './ContextHandler';
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
          <Consumer>
            {(context) => (
              <React.Fragment>
                <p>Address: {context.state.address}</p>
                <p>Name: {context.state.name}</p>
                <p>Age -- > {context.state.age}.....Number FUNC--{context.state.numberHandler}</p>
                <button onClick={context.growAYearOlder}>🍰🍥🎂+birthday</button>
                <br />
                <h2>Calculate retirement age of a person....</h2>
                <br />
                <button onClick={context.numberHandlerFunc}>numberHandlerFunc</button>
              </React.Fragment>
            )}
          </Consumer>
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
 