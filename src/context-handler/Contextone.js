import React, { Component } from 'react';

import {MyProvider, Consumer} from './ContextHandler';
const Family = (props) => (
    <div className="family">
        <Person />
    </div>
)

class Person extends Component {
    state = {
        numInfo:0,
    }
    onTodoChange = (numVal) => {
    this.setState({
        numInfo:numVal,
    });
    return numVal
    }
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
                  <br />
                <p>Address: {context.state.address}</p>
                <p>Name: {context.state.name}</p>
                <hr />
                <p>Age ------>> {context.state.age}</p>
                <button
                 onClick={context.growAYearOlder}
                 style={{
                     backgroundColor:'lightGrey',
                     border: '1px solid green',
                 }}
                 >🍰🍥🎂+birthday
                 </button>
                <br />
                <h2>...Number FUNC--inc num by 2--->>{context.state.numberHandler}....</h2>
                <br />
                <button 
                onClick={context.numberHandlerFunc}
                style= {{
                    padding: '4px',
                    backgroundColor: 'lightBlue',
                }}>
                IncreaseNum
                </button>
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
 