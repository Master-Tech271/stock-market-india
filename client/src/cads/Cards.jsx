import React, {Component} from 'react';
import Card from './CardUI';
import img1 from '../assets/burger.png';

class Cards extends Component{
    constructor(props){
        super(props);
        this.state = {
          items: {},
          isLoaded: false,
        }
      }
      async componentDidMount(){
        const url = "http://localhost:3000/nse/get_quote_info?companyName=burgerking"
        const response = fetch(url)
        .then(res => res.json())
        .then((res) =>{
          this.setState({
            items: res,
            isLoaded: true,
          })
          
        });
      }

    render(){
        var {isLoaded, items} = this.state;
        if (!isLoaded){
          return <div>Loading...</div>;
        }
        else{
          return( 
          <div className="Cards">
            <div className="container-fluid d-flex justify-content-center">
            <div className="row">
            <div className="col-md-4">
            <Card imgsrc={img1} title="Console"/>
            <p>{items.data.map((user, index) =>{
                <div key={index}>
                  <p>{user['pricebandupper']}</p>
                </div>
              })}</p>
              <p>{items.optLink}</p>
              <p>{items.otherSeries}</p>
              <p>{items.futLink}</p>
              <p>{items.lastUpdateTime}</p>
            </div>
            </div>
            </div>

            <div>
              <p>{Cards.tradedDate}</p>
              <p>{items.data.map((user, index) =>{
                <div key={index}>
                  <p>{user['pricebandupper']}</p>
                </div>
              })}
              </p>
              <p>{items.optLink}</p>
              <p>{items.otherSeries}</p>
              <p>{items.futLink}</p>
              <p>{items.lastUpdateTime}</p>  
            </div>
          </div>);
        }
      }
}
export default Cards;