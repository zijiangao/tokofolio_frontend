import React, {Component} from 'react';
import Marquee from 'marquee-react-dwyer';
import axios from 'axios';
import './style.css';

const baseURL = "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest";

const apiInstance =axios.create({
	baseURL: baseURL,
	timeout: 5000, // 5000ms = 5s
	headers: {'X-CMC_PRO_API_KEY': 'process.env.API_KEY'}
})

class ticker extends Component {

	state = {
		bitcoin: []
	}

	componentDidMount () {
		
		axios.get(apiInstance)

			.then(response => {
				console.log(response);
				this.setState({bitcoin: response.data});
				
			});

	}

  render() {
    return (
      <div className='Ticker'>
        <Marquee
		  Size={'h1'}
		  NumberOfOptions={'2'}
		  Index0={this.state.bitcoin.map(bitcoin => <span>{bitcoin.name}</span>)}
		  Index1={'I was ...'}
		  TimeToCross={'10000'}
		  TimeToChange={'2000'}
		  IsRandom={'true'}
		  Color={'white'}
		/>
      </div>
    );
  }
}

export default ticker;