import React,{Component} from 'react'
import mount from '../images/mount.jpeg'



export default class card extends Component{
    constructor(props) {
        super(props)  
        this.onChangeFname = this.onChangeFname.bind(this);
        this.onChangeMname = this.onChangeMname.bind(this);
        this.onChangeSname = this.onChangeSname.bind(this);
        this.onChangeMail = this.onChangeMail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            trip_discription:'',
            trip_paragraph:'',
            trip_sdate:'',
            trip_edate:''
        }
       };

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
onChangePassword(e){
    this.setState({
        user_password: e.target.value
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
        <div className="card bg-dark text-white card border-light mb-3" style={{maxWidth: '180rem' ,marginTop: 10}}>
                <img src={mount} className="card-img" alt="Responsive"/>
                <div className="card-img-overlay">
                <h2 class="card-title font-weight-bold font-italic">Description</h2><br/>
                <p class="card-text font-weight-bolder">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer, This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer  /this.state.trip_paragraph/.</p><br/>
                <p class="card-text">Start At : /this.state.trip_sdate/ 15/12/2018</p><br/>
                <p class="card-text">Expired : /this.state.trip_sdate/ 1/1/2019</p><br/>
                    <div className="form-group">
                        <input type="submit" value="Book This Trip?" onSubmit={this.onSubmit} className="btn btn-secondary btn-lg"/>
                    </div>
                    </div>
                    </div>
            
            </div>
    )
}
}