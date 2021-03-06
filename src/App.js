import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import WeatherInput from './Components/WeatherInput';
import Copyright from './Components/Copyright';
import Forecast from './Components/Forecast';
import ProTip from './Components/ProTip';
import Daily from './Components/Daily';

//TODO  Hook enter button

class App extends React.Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      "city": "",
      "data": {},
      'forecast': []
    }

    // Binds
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    fetch("http://goweather.herokuapp.com/weather/"+this.state.city)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            "data": result,
            'forecast': result.forecast,
          });

          console.log(this.state.data);
        },
        (error) => {
          alert("Error fetching data from the API");
        }
      )
  }


  handleChange(city) {
    this.setState({
      "city": city,
      "data": {}
    })
  }

  renderDaily = () => {
    console.log('forecast', this.state.forecast);
    if(this.state.forecast.length > 0) {
      return this.state.forecast.map((day) => {
        return <Daily data={day} />
      })
    }
  }

  render() {
    const data = this.state.data

    return(
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Get the weather
          </Typography>
          <WeatherInput
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
          />
          <Forecast
            city = {this.state.city}
            data={this.state.data}
          />
          <ProTip />
          <Copyright />

          {this.renderDaily()}
        </Box>
      </Container>
    );
  }
}

export default App;