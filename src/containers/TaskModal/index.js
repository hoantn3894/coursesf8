import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import styles from './styles';

// Connect Store
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from '../../actions/modal';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';


class TaskModal extends Component {
    render() {
        const { classes, open, component, modalActionsCreator } = this.props;
        const { hideModal } = modalActionsCreator;
        return (
            <div className={classes.taskModal}>
                <Modal
                    open={open}
                    onClose={hideModal}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <Grid container>

                        <Grid item md={12} className={classes.content}>
                            {component}
                        </Grid>
                    </Grid>

                </Modal>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        title: state.modal.title,
        open: state.modal.showModal,
        component: state.modal.component
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        modalActionsCreator: bindActionCreators(modalActions, dispatch)
    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withStyles(styles),
    withConnect
)(TaskModal);