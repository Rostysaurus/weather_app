const SearchReducer = (state, action) => {
  switch (action.type) {
    case "FETCHING_START":
      return {
        ...state,
        isFetching: true,
        error: ""
      };
      case "FETCHING_SUCCESS":
      return {
        ...state,
        weatherData: action.payload,
        isFetching: false,
        selectedCity: state.selectedCity,
        error: ""
      };
      case "FETCHING_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        weatherData: null,
        selectedCity: "",

      };
      case "SELECT_CITY":
      return {
        ...state,
        selectedCity: action.payload
      };
      case "SELECT_LANGUAGE":
      return {
        ...state,
        selectedLanguage: action.payload
      };
      default:
        return state
  }
}

export default SearchReducer
