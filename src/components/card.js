/* eslint-disable no-undef */
import React,{Component} from 'react'
import '../components/card.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import mount1 from '../images/malaysia1.jpg'
import paris1 from '../images/paris1.jpg'
import london1 from '../images/london1.jpg'
import istanbul from '../images/Istanbul1.jpg'
import dubai from '../images/dubai1.jpg'


export default class Slider extends Component{
    constructor(props) {
        super(props)  
        
        this.onSubmit = this.onSubmit.bind(this);
        this.state={ trips :[{
            trip_discription: 'Enjoy Paris the City of Love',
            trip_paragraph:'An outstanding concentration of 180 museums and monuments await you … Make the most of our many guides and our online booking service.',
            trip_sdate:'25/06/2019',
            trip_edate:'30/06/2019',
            trip_image:paris1,
              },
              {
            trip_discription: 'Go to London',
            trip_paragraph:'Are you planning to visit London soon? Find free or cheap things to do on your London trip; fun and cool things to do; things to do this weekend; things to do with kids; unusual or romantic things to do in London.',
            trip_sdate:'01/07/2019',
            trip_edate:'15/07/2019',
            trip_image:london1,
              },
              {
                trip_discription: 'Visit Istanbul the Oriental Magic',
                trip_paragraph:'Welcome to Istanbul, the city of the past, the present and the future. Istanbul not only joins continents, it also joins cultures and people. ',
                trip_sdate:'15/08/2019',
                trip_edate:'31/08/2019',
                trip_image:istanbul,
                  },
                        {
                        trip_discription: 'Dubai worlds shopping Destination',
                        trip_paragraph:'Dubai is a must-see holiday destination, with something for everyone. From shopping enthusiasts and adventure-seekers to foodies and families, this bustling city has an eclectic mix of activities and places to suit all tastes.',
                        trip_sdate:'10/02/2019',
                        trip_edate:'15/02/2019',
                        trip_image:dubai,
                          },
                          {
                            trip_discription: 'Malaysia Truly Asia',
                            trip_paragraph:'A kaleidoscope of culture, tradition, heritage and history, Malaysia offers you a plethora of activities to do. From adventurous water sports to thrilling treks, nature trails to beautiful landscapes, age-old temples to contemporary theme parks and exotic culinary experiences, Malaysia has it all.',
                            trip_sdate:'15/03/2019',
                            trip_edate:'20/03/2019',
                            trip_image:mount1,
                              }] } 
        
       };
 
      



onSubmit(e) {
    console.log(`The values are ${this.state.trip_discription}, ${this.state.trip_sdate}
    ${this.state.trip_edate}`)
    this.setState({
        trip_discription:'',
        trip_paragraph:'',
        trip_sdate:'',
        trip_edate:''
    })
  }
render() {
    return(
        <div>    
        <Carousel  className="caro" onClickItem={this.onSubmit} infiniteLoop={true} autoPlay={true} showThumbs={false}>
        {this.state.trips.map((trip,i)=>{
            return(
            <div key={i} >
            <img className="caro1" src={trip.trip_image} alt="LocationPicture"/>
            <div className="card-img-overlay">
        <h2 class="text-left font-weight-bold font-italic">{trip.trip_discription}</h2><br/>
        <p class="text-left font-weight-bold font-italic">{trip.trip_paragraph}</p><br/>
        <p class="text-left font-weight-bold font-italic">Start At : {trip.trip_sdate}</p>
        <p class="text-left font-weight-bold font-italic">Expired : {trip.trip_edate}</p><br/>
            <div align='left'>
                <input type="submit" value="Book This Trip?" onSubmit={this.onSubmit} className="text-left font-weight-bolder font-italic btn btn-secondary btn-lg"/>
            </div>
            </div>
        </div>
        )}
        )}
            </Carousel>   
            </div>
    )
}
}