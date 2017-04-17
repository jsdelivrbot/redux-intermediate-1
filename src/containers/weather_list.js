import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const id = cityData.city.id;
    const name = cityData.city.name;
    const temps = cityData.list.map((weather) => weather.main.temp)
    const pressures = cityData.list.map((weather) => weather.main.pressure)
    const humidities = cityData.list.map((weather) => weather.main.humidity)
    console.log("temps", temps )
    console.log("pressures", pressures )
    console.log("humidities", humidities )

    return (
      <tr key={id}>
        <th>{name}</th>
        <th>
          <Chart data={temps} color="red" />
        </th>
        <th>
          <Chart data={pressures} color="blue" />
        </th>
        <th>
          <Chart data={humidities} color="orange" />
        </th>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);
