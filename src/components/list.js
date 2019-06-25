import React from "react";

class List extends React.Component {
    render() {
    return (
        <React.Fragment>
            <div className="boaster">
               <p>Boast: {this.props.boasts}</p> 
               <p>Roast: {this.props.roasts}</p>
               <button value={this.props.vote}>Upvote</button>
            </div>
        </React.Fragment>
    )
    }
}

export default List;