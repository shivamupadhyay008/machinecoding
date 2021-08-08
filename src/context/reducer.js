export function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      let newCart = [];
      if (state.cart.some((item) => item.id === action.payload.id)) {
        newCart = [...state.cart];
      } else {
        newCart = [...state.cart, action.payload];
      }
      return { ...state, cart: newCart };
    case "ADD_LATER":
      let newlater = [];
      if (state.later.some((item) => item.id === action.payload.id)) {
        newlater = [...state.later];
      } else {
        newlater = [...state.later, action.payload];
      }
      return {
        ...state,
        cart: state.cart.filter((item) => item.id != action.payload.id),
        later: newlater,
      };
    case "REMOVE_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id != action.payload.id),
      };
    case "REMOVE_LATER":
      return {
        ...state,
        later: state.later.filter((item) => item.id != action.payload.id),
      };
    case "DEC_CNT":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, qnt: item.qnt - 1 };
          } else return item;
        }),
      };
    case "INC_CNT":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, qnt: item.qnt + 1 };
          } else return item;
        }),
      };
    default:
      return state;
  }
}
