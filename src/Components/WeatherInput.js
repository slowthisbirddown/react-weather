import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

// TODO Enter key submits find forecast button
class WeatherInput extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Box>
                <TextField
                    id="filled-basic"
                    label="Enter your city"
                    variant="filled"
                    fullWidth={true}
                    autoFocus={true}
                    placeholder="Boulder"
                    onChange={(event) => {this.props.handleChange(event.target.value)}}
                />
                <Button
                    fullWidth={true}
                    variant="contained"
                    onClick={() => {this.props.handleSubmit()}}>
                        Find Forecast
                </Button>
            </Box>
        );
    }
}

export default WeatherInput;