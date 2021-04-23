import * as React from 'react';
import Link from '@material-ui/core/Link';
import CopyrightIcon from '@material-ui/icons/Copyright';
import Typography from '@material-ui/core/Typography';


class Copyright extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Typography variant="body2" color="text.secondary" align="center">
              <CopyrightIcon fontSize="small" />
              <Link color="inherit" href="https://slowbird.me/">
                My website/portfolio
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          );
    }
}


export default Copyright