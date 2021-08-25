/* eslint-disable import/no-anonymous-default-export */
import * as actions from './actionTypes';

const initialState = {
	loading: false,
	history:[],
	favs:[],
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case actions.TOGGLE_LOADING:
			const { loading } = payload;
			return {
				...state,
			loading,
			};
		default:
			return state;
	}
};
