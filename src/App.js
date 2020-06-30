import React, {Component, Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './hoc/HeaderContainer/HeaderContainer'
import MainContainer from './hoc/MainContainer/MainContainer'
import WeatherContainer from './containers/Weather-Containers'
import AuthorizationContainer from './containers/Authorization-Container'



class App extends Component {
  state = {
    visible: true,
    authorisation: false
  }

  visibleFunc(e) {
    e.preventDefault();

    this.setState({
      visible: !this.state.visible
    });

    console.log(this.state.visible);
  }

  componentDidMount() {
    console.log('LocalStorage right now: ', localStorage);
  }

  render() {
    var mainBlock;
    if(this.state.authorisation) {
      mainBlock = (
        <Switch>
          <Route exact path="/" component={WeatherContainer} />
          <Route path="/authorization" component={AuthorizationContainer}/>

          <Route render={ () => <h1>404 Error</h1> }/>
        </Switch>
      );
    } else {
      mainBlock = (
        <AuthorizationContainer />
      );
    }

    return (
      <Fragment>
        <Header visibleFunc={this.visibleFunc.bind(this)} />
        <MainContainer visible={this.state.visible}>
          {mainBlock}
        </MainContainer>
      </Fragment>

    )
  }
}

export default App
