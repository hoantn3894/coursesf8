import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import { STATUSES } from '../../constants';

// Components
import TaskList from '../TaskList';
import TaskForm from '../TaskForm';
import TaskSearch from '../TaskSearch';

// Material UI  
import Grid from '@material-ui/core/Grid';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { BiLoader } from 'react-icons/bi';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import * as taskActions from '../../actions/task';
import * as modalActions from '../../actions/modal';

class TaskBoard extends Component {
    openForm = () => {
        const { modalActionsCreators } = this.props;
        const { showModal, changeModalTitle, changeModalContent } = modalActionsCreators;
        showModal();
        changeModalTitle('Thêm mới công việc');
        changeModalContent(<TaskForm />)
    }

    componentDidMount() {
        const { taskActionsCreators } = this.props;
        const { fetchListTask } = taskActionsCreators;
        fetchListTask();
    }

    loadingData = () => {
        const { taskActionsCreators } = this.props;
        const { fetchListTask } = taskActionsCreators;
        fetchListTask();
    }

    handleSearchInput = (event) => {
        const { value } = event.target;
        const { taskActionsCreators } = this.props;
        const { filterTask } = taskActionsCreators;
        filterTask(value);
    }

    render() {
        const { classes, listTask } = this.props;

        return (
            <div className={classes.taskBoard}>
                <button className="btn btn-primary btn-sm mr-2" onClick={this.openForm}>
                    <IoMdAddCircleOutline />
                    Thêm mới
                </button>

                <button className="btn btn-primary btn-sm mr-2" onClick={this.loadingData}>
                    <BiLoader />
                    Tải thêm dữ liệu
                </button>

                <TaskSearch onChangeInput={this.handleSearchInput} />

                <Grid container spacing={2}>
                    {
                        STATUSES.map((status, index) => {
                            const listTaskFilter = listTask.filter((task) => task.status === status.value);
                            return <TaskList key={index} tasks={listTaskFilter} status={status} />
                        })
                    }
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listTask: state.task.listTask
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        taskActionsCreators: bindActionCreators(taskActions, dispatch),
        modalActionsCreators: bindActionCreators(modalActions, dispatch)
    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withStyles(styles),
    withConnect
)(TaskBoard)