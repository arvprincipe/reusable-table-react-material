import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Demo from './demo';

const LoginForm = () => <></>;
const SearchComponent = () => <></>;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Route path="/search" component={SearchComponent} />
            <Route path="/loginform" component={LoginForm} />
            <Route path="/user/:id" component={LoginForm} />
            <Route path="/" component={Demo}/>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;