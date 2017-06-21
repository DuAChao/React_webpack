
/**
 * Created by Administrator on 2017-05-09.
 */

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';

const styles = {
    medium: {
        width: '100%',
        height: '100%',
        padding: 0,
        display: 'block',
    }
};

class Toback extends React.Component {
    constructor() {
        super();
    }
    componentWillMount() {

    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <IconButton iconClassName="anticon anticon-arrow-left" style={styles.medium} />
            </MuiThemeProvider>
        );
    }
}
export default Toback;