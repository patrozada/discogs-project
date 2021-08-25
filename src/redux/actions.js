import * as actions from './actionTypes';

export const toggleLoading = (bool) => {
	return {
		type: actions.TOGGLE_LOADING,
		payload: {
			loading: bool,
		},
	}
}
