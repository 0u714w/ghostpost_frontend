import React, { Component } from "react";
import { Input, Button, Form, TextArea } from "semantic-ui-react";
import List from "./list.js"
import axios from "axios";




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

  handleSubmitBoast = event => {
      console.log(this.state)
    fetch('http://localhost:8000/apiBaRs/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ boasts: this.state.boast,
                roasts: "no roast"})
    })
    ;
  window.location.reload()};

  handleSubmitRoast = event => {
    console.log(this.state)
  fetch('http://localhost:8000/apiBaRs/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ boasts: "no boast",
              roasts: this.state.roast})
  })
  ;
  window.location.reload()};


  handleOnChangeBoast = event => {
    this.setState({
      boast: event.target.value
    });
  };

  handleOnChangeRoast = event => {
    this.setState({
      roast: event.target.value
    });
  };

  messagesSortedByDate = (messages) => {
    return messages.sort((a, b) => b.dateCreated - a.dateCreated).reverse()
  }

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
        <div className="boastform">
            <Form>
                <TextArea
                placeholder="Insert a Boast"
                onChange={this.handleOnChangeBoast}
                />
            </Form>
        
        <Button className="submit-button" onClick={this.handleSubmitBoast} type="submit">
            Submit
          </Button>
          </div>
          <div className="roastform">
          <Form>
                <TextArea
                placeholder="Insert a Roast"
                onChange={this.handleOnChangeRoast}
                />
            </Form>
        
        <Button className="submit-button" onClick={this.handleSubmitRoast} type="submit">
            Submit
          </Button>
          </div>
    {this.messagesSortedByDate(this.state.boasts.map((message)=>{return <List boasts={message.boasts} roasts={message.roasts}/>}))}
      </div>
      </React.Fragment>
    )
  }
}