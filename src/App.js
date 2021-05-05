import './App.css';
import {Component} from 'react';
import {connect} from 'react-redux';
import {mostrarNaves} from './actions/index';
import { AppContent } from './appStyles';
import ContentDetails from './content/contentDetails';
import { Content } from './content/contentStyles'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show:false,
      name: "",
      details:{
        name:'',
        fabricante:'',
        cost_in_credits:0,
        lenght:0,
        passengers:0,
        model:"",
        manufacturer:"",
        pilots:[]
      }
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.setDetails=this.setDetails.bind(this);
  }


  handleNameChange() {
    this.setState({
      show:true
    });
  }

  setDetails(e){
    console.log("====== Details select ======");
    console.log(e.target.value);
    this.props.naves.results.map((value,key)=>{
      if(value.name===e.target.value){
        this.setState(()=>({
          details: { 
            name:value.name,
            lenght:value.length,
            cost_in_credits:value.cost_in_credits,
            passengers:value.passengers,
            model:value.model,
            manufacturer:value.manufacturer,
            pilots:value.pilots
          }
        }))
      }
    })
    this.handleNameChange()
  }
  
  componentWillMount() {
    this.props.mostrarNaves()
  }

  render(){
    return (
      <AppContent>
        <Content>
          <select className="boxSelect" type="number" onChange={this.setDetails}>
            <option>Seleccione una nave...</option>      
            {(this.props.naves.results)?(
              this.props.naves.results.map((item,key)=>{
                return <option key={key}>{item.name}</option>;
              })):(<></>)
            }
          </select>
          {this.state.show
            ?(<ContentDetails details={this.state.details}/>)
            :(<></>)
          }
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
