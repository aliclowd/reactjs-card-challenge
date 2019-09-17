import { takeLatest, call, put } from 'redux-saga/effects';
import { cardActionType } from '../actions/card.actionType';
import { fetchDataSuccess, fetchDataFailure } from '../actions/card.action';
import axios from 'axios';


export const getJObject = () => {
    return axios.get(`http://static.pushe.co/challenge/json`)
}

export function* fetchDataAsync() {
    try {
        const data = yield call(getJObject);
        yield put(fetchDataSuccess(data));
    }
    catch (error) {
        yield put(fetchDataFailure(error));
    }
}

export function* fetchDataStart() {
    yield takeLatest(
        cardActionType.FETCH_DATA,
        fetchDataAsync
    );
}
