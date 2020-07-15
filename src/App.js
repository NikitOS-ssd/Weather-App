import React, {Component, Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './hoc/HeaderContainer/HeaderContainer'
import MainContainer from './hoc/MainContainer/MainContainer'
import WeatherContainer from './containers/Weather-Containers'
import AuthorizationContainer from './containers/Authorization-Container'
import DragnDrop from './containers/DragnDrop/DragnDrop.js'



class App extends Component {
  state = {
    visible: true,
    authorisation: undefined
  }

  visibleFunc(e) {
    e.preventDefault();

    this.setState({
      visible: !this.state.visible
    });

    console.log(this.state.visible);
  }

  componentDidMount() {
    if(localStorage.getItem('email')) {
      console.log('LocalStorage right now: ', localStorage);
      if(!this.state.authorisation) {
        this.setState({authorisation: true});
      }
    } else {
      // console.log('Error');
      if(this.state.authorisation) {
        this.setState({authorisation: false});
      }
    }
  }

  render() {
    // Вариант создание логики и шаблона до самого рендеринга
    // var mainBlock;
    // if(this.state.authorisation) {
    //   mainBlock = (
    //     <Switch>
    //       <Route exact path="/" component={WeatherContainer} />
    //       <Route path="/authorization" component={AuthorizationContainer}/>
    //       <Route path="/dragdrop" component={DragnDrop} />
    
    //       <Route render={ () => <h1>404 Error</h1> }/>
    //     </Switch>
    //   );
    // } else {
    //   mainBlock = (
    //     <AuthorizationContainer />
    //   );
    // }
    // console.log(mainBlock);
    return (
      <Fragment>
        <Header visibleFunc={this.visibleFunc.bind(this)} />
        <MainContainer visible={this.state.visible}>
          {
            this.state.authorisation
            ? <Switch>
              <Route exact path="/" component={WeatherContainer} />
              <Route path="/authorization" component={AuthorizationContainer}/>
              <Route path="/dragdrop" component={DragnDrop} />

              <Route render={ () => <h1>404 Error</h1> }/>
            </Switch>
            : <AuthorizationContainer />
          }
        </MainContainer>
      </Fragment>

    )
  }
}

export default App
