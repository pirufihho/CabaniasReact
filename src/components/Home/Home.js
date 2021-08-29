 import React from "react";
 
 class Home extends React.Component {
    constructor() {
        super();
        this.state = {
          homeText: "Bienvenidos a cabanias valle, un lugar perfecto para alquilar tu cabania en las sierras, a continuacion veras toda la info correspondiente",
          cabanias: [{
            id:1,
            text:"Cabania1"
          },
          {
            id:2,
            text:"Cabania2"
          },
          {
            id:3,
            text:"Cabania3"
          }]};
          
      }
    render() {

      const cabaniasList = this.state.cabanias.map((cabania) => 
       <ul>
         <li>Id: {cabania.id}</li>
         <div>
           Descripcion: {cabania.text}
         </div>
       </ul>  );

      return <div>
                <h2>{this.state.homeText}</h2>
                {cabaniasList}
            </div>;
    }
  }

  export default Home