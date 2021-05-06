import React, { Component } from 'react';

import styles from './styles';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

// components
import TaskItem from '../TaskItem';

class TaskList extends Component {
    render() {
        const { tasks, status, index } = this.props;
        return (
            <Grid item xs={12} md={4} key={index}>
                <div className="listTask">
                    {tasks.map((task) => {
                        return <TaskItem task={task} status={status} key={task.id} />
                    })}
                </div>
            </Grid>
        );
    }
}

export default withStyles(styles)(TaskList);