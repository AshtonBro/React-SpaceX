import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Calendar, Details, Features, Footer, Header, Main, Home } from './components';
import FetchData from './service/FetchData';
import './style.css';

//? npm i react-router-dom -D
//? mpm i react-rellax-wrapper --save

class App extends React.Component {

  fetchData = new FetchData();

  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [],
    company: null,
  }

  componentDidMount() {
    this.updateRocket();
    this.updateCompany();
  }

  updateRocket() {
    this.fetchData.getRocket()
    .then((data) => {
      this.setState({ rockets: data.map(item => item.name) });
      return data;
    })
    .then((data) => data.find((item) => item.name === this.state.rocket))
    .then((rocketFeatures) => {
      this.setState({ rocketFeatures }, () => this.state.rocket);
    });
  }

  changeRocket = (rocket) => {
    this.setState({
      rocket
    }, this.updateRocket)
  }

  updateCompany = () => {
    this.fetchData.getCompany()
    .then((company) => this.setState({ company }))
    //{company: data}), () => console.log(this.state)
  }

  render() {
    return(
      <BrowserRouter>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>

        <Route exact path='/'>
          {this.state.company && <Home company={this.state.company}/>}
        </Route>

        <Route path='/rocket'>
          <Main rocket={this.state.rocket}/>
          {this.state.rocketFeatures && <Features {...this.state.rocketFeatures}/>}
        </Route>

        <Route path='/calendar'>
          <Calendar />
        </Route>

        <Route path='/details'>
          <Details />
        </Route>

        {this.state.company && <Footer {...this.state.company}/>}
      </BrowserRouter>
    )
  }
}

export default App;
