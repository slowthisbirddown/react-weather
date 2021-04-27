import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
//   }

  function toMph(kph) {
    var wind = parseInt(kph)
    // console.log(parseInt(kph))
    return Math.round(wind * 5 / 8);
  }

  function toFahrenheit(celsius) {
    var temp = parseInt(celsius)
    // console.log(parseInt(celsius))
    return (temp * 9 / 5) + 32;
  }


class Forecast extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        if (Object.keys(this.props.data).length > 0) {
          return (
              <Box>
                  {/* Show Current Wind / Temp */}
                  <Typography variant="h1" align="center">{this.props.city}</Typography>
                  <Typography variant="h2" align="center">{this.props.data.description}</Typography>
                  <Typography variant="h2" align="center">Wind: {toMph(this.props.data.wind)} Mph</Typography>
                  <Typography variant="h4" gutterBottom align="center">Temperature: {toFahrenheit(this.props.data.temperature)} F</Typography>


                  {/* Debug */}

                  <Accordion>
                      <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      >
                          <Typography>Data Debug</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                      <Typography component={'span'}>
                          <pre>{JSON.stringify(this.props.data, null, 2) }</pre>
                      </Typography>
                      </AccordionDetails>
                  </Accordion>
              </Box>
            // Show Description with Icon
            // Show 3 day forecast
            // Option to convert to F*
          );
        }
        else {
          return ("")
        }
    }
}


export default Forecast