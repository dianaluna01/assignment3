import { Component } from 'react';
import axios from 'axios';


class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            apiData: {
                id: -1,
                description: "",
                amount: -1,
                date: "",
            },
            searchText: "",
            found: false
        }
    }

    handleInputChange = (event) => {
        this.setState({searchText: event.target.value});
    }

    handleSearchClick = async () => {
        let choice = this.state.searchText;//ditto
        let linkToAPI = 'https://moj-api.herokuapp.com/' + choice;

        try {
            let response = await axios.get(linkToAPI);
            //below will only execute if API response is sucessful
            //to get actual object from response you need to do
            //response.data
            this.setState({apiData: response.data, found: true});
        } catch (error) {
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                console.log(error.response.data); //Not Found
                console.log(error.response.status); //404
                this.setState({found: false});
            }
       
        }
    }
    
    makeList = () => {
        let element = this.state.apiData;
        let list = element.map( (element) => {
            return (
                <li><b>{element.description}</b>, {element.amount}, {element.date.substr(0,10)}</li>
            );
        });
        return list;
    }

    render() {
        return (
          <div className="container">
            <div className="search">
              <h3>REACT BANK</h3>
              <input type="text" value={this.state.searchText} onChange={this.handleInputChange} placeholder="Enter credits or debits:"/>
              <button onClick={this.handleSearchClick}>Search</button>
            </div>
            { this.state.found 
            ? <div>
                <h1>{this.state.apiData.name}</h1>
                <p>Transactions:</p>
                <ul>{this.makeList()}</ul>
                </div> 
            : <h4>Type in "credits" or "debits" to view transactions!</h4>
            }
          </div>
        );
    }
}

export default List;