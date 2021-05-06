import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import taskReducer from './taskReducer';
import uiReducer from './uiReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    task: taskReducer,
    ui: uiReducer,
    modal: modalReducer,
    form: formReducer
});

export default rootReducer;