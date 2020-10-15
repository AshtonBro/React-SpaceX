import React from 'react';
import { Calendar, Details, Features, Footer, Header, Main, Home } from './components';
import FetchData from './service/FetchData';
import './style.css';

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
      <>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>
        {this.state.company && <Home company={this.state.company}/>}
        {/* <Main rocket={this.state.rocket}/>
        {this.state.rocketFeatures && <Features {...this.state.rocketFeatures}/>} */}
        {this.state.company && <Footer {...this.state.company.links}/>}
      </>
    )
  }
}

export default App;
