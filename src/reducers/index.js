import { combineReducers } from "redux";
import {
  addToCartReducer,
  buyProductReducer,
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
  buyProduct: buyProductReducer,
  myOrder: myOrderReducer,
  checkoutAll: checkoutAllReducer
});
