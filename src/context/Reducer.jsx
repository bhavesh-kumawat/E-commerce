export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD__TO__CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE__FROM__CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE__QTY__PRODUCTS":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};

export const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SORT__BY__PRICE":
      return {
        ...state,
        sort: action.payload,
      };
    case "FILTER__BY__STOCK":
      return { ...state, byStock: !state.byStock };
    case "FILTER__BY__DELIVERY":
      return {
        ...state,
        byFastDelivery: !state.byFastDelivery,
      };
    case "FILTER__BY__RATING":
      return { ...state, byRating: action.payload };
    case "FILTER__BY__SEARCH":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "CLEAR__FILTERS":
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      };
    default:
      return state;
  }
};
