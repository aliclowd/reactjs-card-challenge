import { cardActionType } from './card.actionType';


export const fetchData = () => ({
    type: cardActionType.FETCH_DATA
});

export const fetchDataSuccess = (data) => ({
    type: cardActionType.FETCH_DATA_SUCCESS,
    payload: data 
});

export const fetchDataFailure = (error) => ({
    type: cardActionType.FETCH_DATA_FAILURE,
    payload: { error }
});

export const editData = (data) => ({
    type: cardActionType.EDIT_DATA,
    payload: { data }
});