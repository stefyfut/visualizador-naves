import './App.css';
import {Component,useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {mostrarNaves} from './actions/index';
import { AppContent } from './appStyles';
import ContentDetails from './content/contentDetails';

class App extends Component {

  state = {
    count: 0
  };

  add = () => {
    this.setState({ count: this.state.count + 1 });
  }
  
  componentWillMount() {
    this.props.mostrarNaves()
  }

  renderuserlist(){
    return this.props.naves.map((user)=>{
      return (
        <li key={user.name}>{user.name}</li>
      )
    })
  }

  render(){
    const test={'id':1,'name':'stefy'};
    console.log([this.props.naves.results]);
    /*console.log(this.props.naves.map(products=>{
      <p key={this.props.naves[products].name}>{this.props.naves[products].name}</p>
    }));*/
    /*const nombres=this.props.naves.results.map((item)=><option>{item.name}</option>)*/
    return (
      <AppContent>
        <ContentDetails details={test}/>
        <Content>
          <select className="boxSelect" type="number">
            <option>hola</option>      
            <option>hola</option>   
          </select>
          <ContentBox></ContentBox>
        </Content>
      </AppContent>
    );
  }
}

function mapNavesProp(state){
  return {
    naves:state.nave.list
  }
}

export default connect(mapNavesProp,{mostrarNaves})(App);
