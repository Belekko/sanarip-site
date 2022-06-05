const initialState = {
  expense: [],
};

export const reducerFunc = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        expense: [
          ...state.expense,
          {
            title: action.title,
            price: action.price,
            date: action.date,
            id: Math.random().toString(),
          },
        ],
      };
    case "DELETE":
      return {
        ...state,
        expense: state.expense.filter((el) => el.id !== action.id),
      };

    default:
      return state;
  }
};
