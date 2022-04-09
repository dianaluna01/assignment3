import { Component } from 'react'
import React from "react";

class List extends Component {
	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			apiData: {
                id: -1,
                description: "",
                amount: -1,
                date: "",
            },
            buttonChoice: "",
            found: false
		}
	}

    render(){
        return(
            <div>
            <button
            //onClick={() => this.debitButton}
            > DEBIT
            </button>

            
            <button
                //onClick={() => this.creditButton}
            >CREDIT
            </button>
            </div>
        );
    }
}


export default List

