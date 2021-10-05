export const productReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return action.payload;
    case "ADDED_TO_CART":
      const newProd = state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            addedToCart: true,
          };
        }
        return item;
      });
      return newProd;

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECTED_PRODUCT":
      return action.payload;
    case "REMOVE_SELECTED_PRODUCT":
      return {};

    default:
      return state;
  }
};

export const addToCartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const found = state.find((item) => item.id === action.payload.selectedProduct.id);
      console.log("found",found);
      if (found) {
        // console.log("if",found);
        const quant = state.map((product) =>
          product.id === action.payload.selectedProduct.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return quant;
      } else {
        // console.log("else",found);
        const { selectedProduct, quantity } = action.payload;
        const newCartData = [...state, { ...selectedProduct, quantity }];
        return newCartData;
      }
    case "REMOVE_ITEM_FROM_CART":
      if(action.payload.quantity > 1){
        const updatedCart = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        return updatedCart; 
      } else{
        const newCart = state.filter((item) => item.id !== action.payload.id);
        return newCart;
      }
    case "REMOVE_ITEM":
      const nCart = state.filter((item) => item.id !== action.payload);
        return nCart;
    case "EMPTY_CART":
      return []
    default:
      return state;
  }
};

export const selectedCategoryReducer = (state = [], action) => {
  switch (action.type) {
    case "SELECTED_CATEGORY":
      return action.payload;
    case "ADDED_TO_CART":
      const newSelectedProd = state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            addedToCart: true,
          };
        }
        return item;
      });
      return newSelectedProd;
    case "REMOVE_CATEGORY":
      return [];

    default:
      return state;
  }
};


export const userDetailReducer = (state={}, action)=>{
  switch (action.type) {
    case "USER_DETAILS":
      return action.payload;
  
    default:
      return state;
  }
}

export const buyProductReducer = (state={},action)=>{
  switch (action.type) {
    case "BUY_THIS_PRODUCT":
      return action.payload;
  
    default:
      return state;
  }
}

export const myOrderReducer = (state=[],action)=>{
  switch (action.type) {
    case "MY_ORDER":
      return [...state,action.payload]
  
    default:
      return state;
  }
}

export const checkoutAllReducer = (state=[],action)=>{
  switch (action.type) {
    case "CHECKOUT_ALL":
      return action.payload;
    case "EMPTY_CHECKOUT":
      return [];
  
    default:
      return state;
  }
}