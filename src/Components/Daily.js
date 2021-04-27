import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


// I copy pasted the component you already had into daily, made like two changes,
// then added a function to render in app that mapped through the forecast array field in the data object.

  function toMph(kph) {
    console.log('this ran');
    var wind = parseInt(kph)
    // console.log(parseInt(kph))
    return Math.round(wind * 5 / 8);
  }

  function toFahrenheit(celsius) {
    var temp = parseInt(celsius)
    // console.log(parseInt(celsius))
    return (temp * 9 / 5) + 32;
  }


class Daily extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        if (Object.keys(this.props.data).length > 0) {
          return (
              <Box>
                  {/* Show Current Wind / Temp */}
                  <Typography variant="h1" align="center">Day: {this.props.data.day}</Typography>
                  <Typography variant="h2" align="center">Wind: {toMph(this.props.data.wind)} Mph</Typography>
                  <Typography variant="h4" gutterBottom align="center">Temperature: {toFahrenheit(this.props.data.temperature)} F</Typography>


                  {/* Debug */}
              </Box>
          );
        }
        else {
          return ("")
        }
    }
}


export default Daily
