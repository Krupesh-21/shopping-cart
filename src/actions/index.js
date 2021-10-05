import products from "../products";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export const fetchProducts = () => async (dispatch) => {
  const { data } = await products.get("/products");
  const uData = data.map((item) => {
    return {
      ...item,
      addedToCart: false,
    };
  });
  dispatch({
    type: "FETCH_PRODUCTS",
    payload: uData,
  });
};

export const fetchProduct = (productId) => async (dispatch) => {
  const { data } = await products.get(`/products/${productId}`);

  dispatch({
    type: "SELECTED_PRODUCT",
    payload: data,
  });
};

export const removeSelectedProduct = () => {
  return {
    type: "REMOVE_SELECTED_PRODUCT",
  };
};

export const addedToCart = (productId) => {
  return {
    type: "ADDED_TO_CART",
    payload: productId,
  };
};

export const addToCart = (selectedProduct) => {
  console.log("fired atc");
  return {
    type: "ADD_TO_CART",
    payload: {
      selectedProduct,
      quantity: 1,
    },
  };
};

export const addQuantity = (productId) => {
  return {
    type: "ADD_QUANTITY",
    payload: productId,
  };
};

export const removeItemFromCart = (product) => {
  // console.log("asdfghjkl",productId);
  return {
    type: "REMOVE_ITEM_FROM_CART",
    payload: product,
  };
};

export const removeItem = (productId) => {
  return {
    type: "REMOVE_ITEM",
    payload: productId,
  };
};

export const fetchSelectedCategory = (category) => async (dispatch) => {
  const { data } = await products.get(`products/category/${category}`);
  const uData = data.map((item) => {
    return {
      ...item,
      addedToCart: false,
    };
  });

  console.log("selected category");

  dispatch({
    type: "SELECTED_CATEGORY",
    payload: uData,
  });
};

export const addedToCartSelectedCategoryProduct = (productId) => {
  return {
    type: "ADDED_TO_CART",
    payload: productId,
  };
};

export const removeSelectedCategory = () => {
  return {
    type: "REMOVE_CATEGORY",
  };
};

export const userDetails = ({
  name,
  address,
  pincode,
  phoneNo,
  city,
  state,
  email,
  modeOfPayment,
}) => {
  const pCode = parseInt(pincode);
  const number = parseInt(phoneNo);
  const details = {
    name,
    address,
    pCode,
    number,
    city,
    state,
    email,
    modeOfPayment,
  };
  return {
    type: "USER_DETAILS",
    payload: details,
  };
};

export const buyThisProduct = (product) => {
  return {
    type: "BUY_THIS_PRODUCT",
    payload: product,
  };
};

export const addToMyOrder = (order, totalCost, userDetail) => {
  const updTedProd = {
    myOrder: order,
    ...userDetail,
    totalCost,
    orderId: uuidv4(),
    orderDate: moment().format("LL"),
  };
  return {
    type: "MY_ORDER",
    payload: updTedProd,
  };
};

export const checkoutAll = (cart) => {
  return {
    type: "CHECKOUT_ALL",
    payload: cart,
  };
};

export const emptyCart = () => {
  return {
    type: "EMPTY_CART",
  };
};

export const emptyCheckoutAll = () => {
  return {
    type: "EMPTY_CHECKOUT",
  };
};
