import { cardActionType } from '../actions/card.actionType';
import update from 'immutability-helper';

const initialState = {
    data: [],
    loading: false,
    error: null
};

export default function cardReducer(state = initialState, action) {
    switch (action.type) {
        case cardActionType.FETCH_DATA:
            return {
                ...state,
                loading: true,
                error: null
            };
        case cardActionType.FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload.data.cards
            };
        case cardActionType.FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                data: []
            };
        case cardActionType.EDIT_DATA:
            return update(
                state, {
                data: {
                    [action.payload.data.index]: {
                        title: { $set: action.payload.data.title },
                        description: { $set: action.payload.data.description }
                    }
                }
            }
            );
        default:
            return state;
    }
};