import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import theme from './common/theme';
import { ThemeProvider } from '@material-ui/styles';

// Import Components
import TaskBoard from './containers/TaskBoard';
import Loading from './containers/Loading';
import TaskModal from './containers/TaskModal';

// React Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Redux + DevTools
import { Provider } from 'react-redux';
import configureStore from './store/configStore';
const store = configureStore();

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <div className={classes.app}>
                        <div className={classes.main}>
                            <TaskBoard />
                            <ToastContainer />
                            <TaskModal />
                            <Loading />
                        </div>
                    </div>
                </ThemeProvider>
            </Provider>
        );
    }
}

export default withStyles(styles)(App);