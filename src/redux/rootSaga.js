import { fetchDataStart } from './sagas/card.saga';
import { all, call } from 'redux-saga/effects';


export default function* rootSaga() {
    yield all([
        call(fetchDataStart),
    ]
    )
};