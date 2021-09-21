export const loadState = () => {
  try {
    const productState = JSON.parse(localStorage.getItem("PRODUCT_STATE"));
    if (productState === null) return undefined;
    return productState;
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    localStorage.setItem("PRODUCT_STATE", JSON.stringify(state));
  } catch (error) {
    console.log(error);
  }
};

