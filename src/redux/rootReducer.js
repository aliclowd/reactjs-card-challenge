import { combineReducers } from 'redux';
import cardReducer from './reducers/card.reducer';

const rootReducer = combineReducers({
    card: cardReducer
});


export default rootReducer;