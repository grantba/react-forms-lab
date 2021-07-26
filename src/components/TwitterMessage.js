import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      maxChars: 0,
      numLeft: 0
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value,
      numLeft: event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"               
          onChange={event => this.handleChange(event)}
          value={this.state.message}
        />
        <h4>Number of Characters Remaining: {this.props.maxChars - this.state.numLeft}</h4>
      </div>
    );
  }
}

export default TwitterMessage;

// import React from "react";

// class TwitterMessage extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       message: ''
//     };
//   }

//   handleChange = event => {
//     this.setState({
//       message: event.target.value
//     })
//   }

//   render() {
//     let charNumber = this.props.maxChars - this.state.message.length;
//     return (
//       <div>
//         <strong>Your message:</strong>
//         <input type="text" onChange={this.handleChange} value={this.state.message}/>
//         {charNumber}
//       </div>
//     );
//   }
// }

// export default TwitterMessage;