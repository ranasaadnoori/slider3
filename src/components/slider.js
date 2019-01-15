import React,{Component} from 'react'
import mount1 from '../images/fuji1.jpg'
import paris1 from '../images/paris1.jpg'
import istanbul from '../images/Istanbul1.jpg'
import dubai from '../images/dubai1.jpg'
import '../components/card.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default class Slider extends Component{
    constructor(props) {
        super(props)  
        this.onChangeFname = this.onChangeFname.bind(this);
        this.onChangeMname = this.onChangeMname.bind(this);
        this.onChangeSname = this.onChangeSname.bind(this);
        this.onChangeMail = this.onChangeMail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={ trips :[] } 
        
       };
 
       componentWillMount(){
        this.setState({
          trips : require('../components/sample-trips')
        });
        } 

onChangeFname(e){
    this.setState({
        user_fname: e.target.value
    })
}
onChangeMname(e){
    this.setState({
        user_mname: e.target.value
    })
}
onChangeSname(e){
    this.setState({
        user_sname: e.target.value
    })
}
onChangeMail(e){
    this.setState({
        user_mail: e.target.value
    })
}


onSubmit(e) {
    e.preventDefault();
    console.log(`The values are ${this.state.trip_discription}, ${this.state.trip_paragraph},${this.state.trip_sdate}
    ${this.state.trip_edate}`)
    this.setState({
        trip_discription:'',
        trip_paragraph:'',
        trip_sdate:'',
        trip_edate:''
    })
  }
render(){
    return(
        <div>
                <Carousel className="caro" onClickItem={this.onSubmit} dynamicHeight={false} showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img className="caro1" src={paris1} alt="Paris"/>
                    <div className="card-img-overlay">
                <h2 class="text-left font-weight-bold font-italic">Description</h2><br/>
                <p class="text-left font-weight-bold font-italic">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer, This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer  /this.state.trip_paragraph/.</p><br/>
                <p class="text-left font-weight-bold font-italic">Start At : /this.state.trip_sdate/ 15/12/2018</p><br/>
                <p class="text-left font-weight-bold font-italic">Expired : /this.state.trip_sdate/ 1/1/2019</p><br/>
                    <div align='left'>
                        <input type="submit" value="Book This Trip?" onSubmit={this.onSubmit} className="text-left font-weight-bolder font-italic btn btn-secondary btn-lg"/>
                    </div>
                    </div>
                    <p className="legend">Paris</p>
                </div>
                <div>
                    <img className="caro1" src={istanbul} alt="Istanbul"/>
                    <div className="card-img-overlay">
                <h2 class="text-left font-weight-bold font-italic">Description</h2><br/>
                <p class="text-left font-weight-bold font-italic">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer, This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer  /this.state.trip_paragraph/.</p><br/>
                <p class="text-left font-weight-bold font-italic">Start At : /this.state.trip_sdate/ 15/12/2018</p><br/>
                <p class="text-left font-weight-bold font-italic">Expired : /this.state.trip_sdate/ 1/1/2019</p><br/>
                    <div align='left'>
                        <input type="submit" value="Book This Trip?" onSubmit={this.onSubmit} className="text-left font-weight-bolder font-italic btn btn-secondary btn-lg"/>
                    </div>
                    </div>
                    <p className="legend">Istanbul</p>
                </div>
                <div>
                    <img className="caro1" src={mount1} alt="Mount Fuiji"/>
                    <div className="card-img-overlay">
                <h2 class="text-left font-weight-bold font-italic">Description</h2><br/>
                <p class="text-left font-weight-bold font-italic">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer, This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer  /this.state.trip_paragraph/.</p><br/>
                <p class="text-left font-weight-bold font-italic">Start At : /this.state.trip_sdate/ 15/12/2018</p><br/>
                <p class="text-left font-weight-bold font-italic">Expired : /this.state.trip_sdate/ 1/1/2019</p><br/>
                    <div align='left'>
                        <input type="submit" value="Book This Trip?" onSubmit={this.onSubmit} className="text-left font-weight-bolder font-italic btn btn-secondary btn-lg"/>
                    </div>
                    </div>
                    <p className="legend">Tokyo</p>
                </div>
                <div>
                    <img className="caro1" src={dubai} alt="Dubai"/>
                    <div className="card-img-overlay">
                <h2 class=" font-weight-bold text-left font-italic">Description</h2><br/>
                <p class="text-left font-weight-bold font-italic">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer, This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer  /this.state.trip_paragraph/.</p><br/>
                <p class="text-left font-weight-bold font-italic">Start At : /this.state.trip_sdate/ 15/12/2018</p><br/>
                <p class="text-left font-weight-bold font-italic">Expired : /this.state.trip_sdate/ 1/1/2019</p><br/>
                    <div align='left'>
                        <input type="submit" value="Book This Trip?" onSubmit={this.onSubmit} className="text-left font-weight-bolder font-italic btn btn-secondary btn-lg"/>
                    </div>
                    </div>
                    <p className="legend">Dubai</p>
                </div>
            </Carousel>
            
            </div>
    )
}
}