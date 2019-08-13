// import { delay } from 'redux-saga';
import { takeLatest, put, delay } from 'redux-saga/effects';

function* ageUpAsync() {
    yield delay(4000);
    yield put({ type: 'AGE_UP_ASYNC', value: 1 });
}

export function* watchAgeUp(){
    yield takeLatest('AGE_UP', ageUpAsync);
};
