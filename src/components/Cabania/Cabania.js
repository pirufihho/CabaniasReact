import React from "react";
import CabaniasClient from './../../services/CabaniaService'
import { withRouter } from "react-router";
import queryString from 'query-string';

 class Cabania extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cabania: {}
        };
      }
      componentDidMount() {
        //cortar string para obtener id
        var stringPath = '/cabania/'
        var id = this.props.location.pathname.slice(stringPath.length);

        CabaniasClient.getCabaniaById(id).then(response => {
          if(response){
              console.log(response)
            this.setState({cabania: response})
          }
          
        }, (error)=> {
          //this.setState({isLogedIn: false})
          //alert(error)
        })
      }

    render() {      
      return <ul>
      <div>
      Cabania: {this.state.cabania.caption}
      </div>
      <div>
      <img src={this.state.cabania.image} alt={this.state.cabania.caption} width="300" height="400" />
      </div>
    </ul>  
    }
  }

  export default  withRouter(Cabania)