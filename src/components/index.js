import React, { Component } from "react";
import { Input, Button } from "semantic-ui-react";
import List from "./list.js"
import axios from "axios";
import { addBoast } from "./action.js";


export default class Boast extends Component {
  constructor(props) {
    super(props);
    this.state = {
    boasts:[],
    };
    this.loadBoasts = this.loadBoasts.bind(this);
  }

  componentWillMount() {
    this.loadBoasts();
  }

  handleSubmit = event => {
    this.props.addBoast({ message: this.state.boasts });
    this.setState({
      message: ""
    });
  };

  

  async loadBoasts()
  {
    const promise = await axios.get("http://localhost:8000/apiBaRs/");
    const status = promise.status;
    if(status===200)
    {
      const data = promise.data;
      this.setState({boasts:data});
    }
  }

  render() {
    return(
        <React.Fragment>
      <div>
        <h1>Boasts and Roasts</h1>
        <h2>Submit a Boast (Or Roast)</h2>
        <div className="submitBox">
            <Input 
            className="newUserPost"
            placeholder="Insert a boast or a roast!"
            onChange={this.handleOnChange} />
        </div>
        <Button className="submit-button" onClick={this.handleSubmit} type="submit">
            Submit
          </Button>
    {this.state.boasts.map((message)=>{return <List boasts={message.boasts} roasts={message.roasts}/>})}
      </div>
      </React.Fragment>
    )
  }
}