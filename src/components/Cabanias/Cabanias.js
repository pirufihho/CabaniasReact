import React from "react";
import CabaniasClient from './../../services/CabaniaService'
import {
    Link
  } from "react-router-dom";
 
 class Cabanias extends React.Component {
    constructor() {
        super();
        this.state = {
            cabanias: []
        };
      }
      componentDidMount() {
        CabaniasClient.getCabanias().then(response => {
          if(response){
            this.setState({cabanias: response})
          }
          
        }, (error)=> {
          //this.setState({isLogedIn: false})
          //alert(error)
        })
      }

    render() {      
      const cabaniasList = this.state.cabanias.map((cabania) => 
       <ul>
         <div>
         <Link to={ "cabania/" + cabania.id }>{cabania.caption}</Link>
         </div>
         <div>
         <img src={cabania.image} alt={cabania.caption} width="300" height="400" />
         </div>
       </ul>  );

      return <div>
                <h2>{this.state.homeText}</h2>
                {cabaniasList}
            </div>;
    }
  }

  export default Cabanias