import React, { Component } from 'react';

import styles from './styles';
import { withStyles } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';

class TaskSearch extends Component {
    render() {
        const { classes, onChangeInput } = this.props;
        return (
            <div className={classes.taskSearch}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        id="keyword"
                        placeholder="Enter your keyword"
                        onChange={onChangeInput}
                        className={classes.searchInput}
                    />
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(TaskSearch);