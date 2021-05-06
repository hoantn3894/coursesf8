import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import styles from './styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete'

class TaskItem extends Component {
    render() {
        const { classes, task, status } = this.props;
        console.log('task', task)
        return (

            <Card key={task.id} className={classes.card}>
                <CardActionArea>
                    <CardContent>
                        <Grid>
                            <img src={task.image} width="100%" className={classes.cardImage} alt="cardImage" />
                        </Grid>
                        <Typography variant="body2" color="textSecondary" className={classes.cardText} component="p">
                            <b>Tên khoá học: </b> {task.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className={classes.cardText} component="p">
                            <b>Mô tả: </b> {task.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className={classes.cardText} component="p">
                            <b>Trạng thái: </b> {status.label}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions className={classes.cardActions}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <img src={task.icon} className={classes.cardIcon} alt="card-icon" />
                        {task.author}
                    </Typography>

                    <Grid>
                        <Fab color="primary" aria-label="add" size="small" className={classes.editIcon}>
                            <EditIcon />
                        </Fab>
                        <Fab color="secondary" aria-label="delete" size="small" className={classes.deleteIcon}>
                            <DeleteIcon />
                        </Fab>
                    </Grid>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(TaskItem);