import * as typeActions from '../constants/task';

import { fork, take, call, put, delay, takeLatest, select } from 'redux-saga/effects';
import { getList } from '../apis/task';
import { STATUS_CODE } from '../constants'
import { fetchListTaskSuccess, fetchListTaskFailed, filterTaskTaskSuccess } from '../actions/task';
import { showLoading, hideLoading } from '../actions/ui';

function* fetchListTaskAction() {
    while (true) {
        yield take(typeActions.FETCH_TASK);
        yield put(showLoading());
        const response = yield call(getList);

        const { status, data } = response;
        if (status === STATUS_CODE.SUCCESS) {
            // dispatch action fetchListTaskSuccess
            yield delay(1000);
            yield put(fetchListTaskSuccess(data));
        } else {
            // dispatch action fetchListTaskFailed
            yield put(fetchListTaskFailed(data))
        }

        yield put(hideLoading());
    }
}

function* filterTaskSaga({ payload }) {
    yield delay(500);
    const { keyword } = payload;

    const list = yield select(state => state.task.listTask);
    const filterTask = list.filter(task => task.title.toLowerCase().includes(keyword.toLowerCase()));
    yield put(filterTaskTaskSuccess(filterTask));
}

function* rootSaga() {
    yield fork(fetchListTaskAction);
    yield takeLatest(typeActions.FILTER_TASK, filterTaskSaga)
}

export default rootSaga;