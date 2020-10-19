import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Calendar, Details, Features, Footer, Header, Home } from './components';
import FetchData from './service/FetchData';
import './style.css';

//? npm i react-router-dom -D
//? npm i react-rellax-wrapper --save
//? npm i react-youtube -D

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

        <Route exact 
        path='/' 
        render={() => this.state.company && 
        <Home company={this.state.company} />} />

        <Route 
        path='/rocket/:rocket'
        render={({match}) => this.state.rocketFeatures &&
         <Features {...this.state.rocketFeatures} match={match} />} />
   
        <Route path='/calendar' component={Calendar} />

        <Route path='/details/:id'  component={Details} />

        {this.state.company && <Footer {...this.state.company}/>}
      </BrowserRouter>
    )
  }
}

export default App;
