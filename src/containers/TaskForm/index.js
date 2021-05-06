import React, { Component } from 'react';

import styles from './styles';
import { withStyles } from '@material-ui/core';

// material UI
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { AiOutlineClose } from "react-icons/ai";

// Connect Store
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from '../../actions/modal';

// Redux Form 
import { Field, reduxForm } from 'redux-form';

class TaskForm extends Component {
    handleSubmitForm = (data) => {
        console.log('data', data);
    }

    render() {
        const { classes, title, modalActionsCreator, handleSubmit } = this.props;
        const { hideModal } = modalActionsCreator;
        return (
            <div className={classes.taskForm}>
                <div className={classes.modal}>
                    <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                        <Grid item md={12} className={classes.heading}>
                            <Typography variant="h5" >
                                {title}
                            </Typography>
                            <AiOutlineClose onClick={hideModal} />
                        </Grid>

                        <Grid item md={12}>
                            <Field
                                name="title"
                                component="input"
                                type="text"
                                placeholder="Nhập tên khoá học"
                                width="100%"
                            />
                        </Grid>
                        <Grid item md={12}>
                            <TextField
                                id="title"
                                label="Title"
                                placeholder="Enter your title"
                                className={classes.textField}
                            />
                        </Grid>
                        <Grid item md={12}>
                            <TextField
                                id="description"
                                label="Description"
                                placeholder="Enter your description"
                                className={classes.textField}
                            />
                        </Grid>
                        <Grid item md={12}>
                            <Box display="flex" flexDirection="row-reverse" m={1}>
                                <button type="submit" className="btn btn-primary ml-2" onClick={hideModal}>
                                    Thêm mới
                                </button>
                                <button className="btn btn-danger ml-2" onClick={hideModal}>
                                    Huỷ bỏ
                                </button>
                            </Box>
                        </Grid>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        title: state.modal.title,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        modalActionsCreator: bindActionCreators(modalActions, dispatch)
    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReduxForm = reduxForm({
    form: "TASK_MANAGEMENT"
})

export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm
)(TaskForm);