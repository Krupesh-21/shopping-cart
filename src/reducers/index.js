import { combineReducers } from "redux";
import {
  addToCartReducer,
  checkoutAllReducer,
  myOrderReducer,
  productReducer,
  selectedCategoryReducer,
  selectedProductReducer,
  userDetailReducer,
} from "./productReducer";

export default combineReducers({
  products: productReducer,
  selectedProduct: selectedProductReducer,
  cart: addToCartReducer,
  selectedCategoryProducts: selectedCategoryReducer,
  userDetail: userDetailReducer,
  myOrder: myOrderReducer,
  checkoutAll: checkoutAllReducer
});
