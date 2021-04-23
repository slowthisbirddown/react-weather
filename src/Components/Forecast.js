import * as React from 'react';
import Link from '@material-ui/core/Link';
import CopyrightIcon from '@material-ui/icons/Copyright';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class Forecast extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Box>
                {/* Show Current Wind / Temp */}
                <Typography variant="h1" align="center">{this.props.city}</Typography>
                <Typography variant="h2" align="center">{this.props.data.description}</Typography>
                <Typography variant="h2" align="center">Wind: {this.props.data.wind}</Typography>
                <Typography variant="h4" gutterBottom align="center">Temperature: {this.props.data.temperature}</Typography>


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
}


export default Forecast