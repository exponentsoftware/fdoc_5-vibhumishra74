import React, { Component } from 'react'
import axios from 'axios'
import '../App.css';
class DataList extends Component {
	constructor(props) {
		super(props)

		this.state = {
      children: [],
      errorMsg: ''
		}
	}

	componentDidMount() {
		axios
			.get('https://restcountries.eu/rest/v2/all')
			.then(response => {
                console.log(response)
				console.log(response.data)
				this.setState({ children: response.data})
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})
	}

	render() {
		const { children, errorMsg } = this.state;
        console.log(children.length)
		return (
			<div >
                <div className = "heading">
				<h1 >Data List</h1>
				
                </div>
				<h6 style={{padding:"6px"}}>languages are there in the countries API:{children.length} <hr></hr></h6>
            <table>
               <tbody>
                   <div className = "data">
                  {
					//   to show the data
					//   .sort((a,b) => a.language.countries && b.language.countries >= 3)
					children.sort((a,b) => a.area - b.area).reverse().slice(0, 10).map(res =>
                        <tr>
                            <td style={{paddingTop:"6px"}}> <div>country : "{res.name}" area : {res.area}</div></td>
						
                        </tr> 
                       )
				  }
			  </div>
               </tbody>
            </table>
			</div>
		)
	}
}

export default DataList