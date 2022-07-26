const FETCH = {
	REQUEST: "FETCH_REQUEST",
	SUCCESS: "FETCH_SUCCESS",
	FAIL: "FETCH_FAIL",
};

const reducer = (state, action) => {
	switch (action.type) {
		case FETCH.REQUEST:
			return { ...state, loading: true };
		case FETCH.SUCCESS:
			return { ...state, data: action.payload, loading: false };
		case FETCH.FAIL:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export { reducer };
