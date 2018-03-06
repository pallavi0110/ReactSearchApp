import React, { Component } from "react";

class InputBox extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "", results: [] };
    this.handleChange = this.handleChange.bind(this);
    this.generateResults = this.generateResults.bind(this);
  }

  handleChange(event) {
    const possibleResults = this.props.possibleResults;
    const searchTerm = event.target.value;
    const results = possibleResults.filter(result =>
      result.includes(searchTerm)
    );
    this.setState({ value: searchTerm, results: results });
  }

  generateResults() {
    return this.state.results.map((result, index) => (
      <li key={index}>{result}</li>
    ));
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <div className="results">{this.generateResults()}</div>
      </div>
    );
  }
}

export default InputBox;
