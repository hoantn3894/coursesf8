import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Redux
import { compose } from 'redux';
import LoadingIcon from '../../assets/images/loading.gif';
import styles from './styles';


class Loading extends Component {
    render() {
        const { classes, showLoading } = this.props;
        return (
            <>
                {
                    showLoading ? <div className={classes.loadData}>
                        <img src={LoadingIcon} alt="loading" className={classes.loadingIcon} width="20%" />
                    </div> : ''
                }
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        showLoading: state.ui.showLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withStyles(styles),
    withConnect
)(Loading)