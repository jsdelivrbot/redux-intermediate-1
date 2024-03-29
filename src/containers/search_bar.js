import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: "" }

    // console.log('In constructor', this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event) {
    // console.log(event.target.value)
    // console.log('In onInputChange', this)
    return (
      this.setState({ term: event.target.value})
    )
  }

  onFormSubmit(event) {
    event.preventDefault();

    console.log("form is submitted")
    this.props.getWeather(this.state.term)
    this.setState({ term: "" })
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.onFormSubmit}
          className="input-group" >
          <input
            placeholder="Get a five-day forecast in your favorite cities"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ getWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
