 import React from "react";
 import CabaniasClient from './../../services/CabaniaService'
 import { Carousel } from 'react-carousel-minimal';
 
 class Home extends React.Component {
    constructor() {
        super();
        this.state = {
          homeText: "Bienvenidos a cabanias valle, un lugar perfecto para alquilar tu cabania en las sierras, a continuacion veras toda la info correspondiente",
          cabanias: [],
          captionStyle : {
            fontSize: '2em',
            fontWeight: 'bold',
          },
          slideNumberStyle : {
            fontSize: '20px',
            fontWeight: 'bold',
          }
        };
          
      }
      componentDidMount() {
        CabaniasClient.getCabanias().then(response => {
          if(response){
            this.setState({cabanias: response})
            console.log(response)   
          }
          
        }, (error)=> {
          //this.setState({isLogedIn: false})
          //alert(error)
        })
      }

    render() {

      return this.state.cabanias && this.state.cabanias.length > 0 && <div className="App">
      <div style={{ textAlign: "center" }}>
        <h4>{this.state.homeText}</h4>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={this.state.cabanias}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={this.state.captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={this.state.slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "650px",
              maxHeight: "300px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
    }
  }

  export default Home