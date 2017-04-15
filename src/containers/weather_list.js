import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';


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
          <Sparklines height={85} width={180} data={temps}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </th>
        <th>
          <Sparklines height={120} width={180} data={pressures}>
            <SparklinesLine color="red" />
          </Sparklines>
        </th>
        <th>
          <Sparklines height={120} width={180} data={humidities}>
            <SparklinesLine color="orange" />
          </Sparklines>
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
