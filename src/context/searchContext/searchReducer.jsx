const SearchReducer = (state, action) => {
  switch (action.type) {
    case "FETCHING_START":
      return {
        ...state,
        isFetching: true,
        error: false
      };
      case "FETCHING_SUCCESS":
      return {
        ...state,
        weatherData: action.payload,
        isFetching: false,
        selectedCity: state.selectedCity,
        error: false,
        errorMessage: "",
      };
      case "FETCHING_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage: action.payload,
        // weatherData: null,
        // // selectedCity: "",

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
