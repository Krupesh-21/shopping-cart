const emailValidator =
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function formValidation({
  name,
  email,
  phoneNo,
  address,
  city,
  state,
  pincode,
}){
  let error = {};
  if (!name) {
    error.errName = "Please Fill the name field.";
  } 
  if (!email) {
    error.errEmail = "Please Fill the Email field.";
  } else if (!emailValidator.test(email)) {
    error.errEmail = "Email is not valid";
  }
  if (!address) {
    error.errAddress = "Please Fill the Comment field.";
  }
  if (!phoneNo) {
    error.errPhoneNo = "Please Fill the Post No.";
  }
  if (!city) {
    error.errCity = "Please Fill the Comment field.";
  }
  if (!state) {
    error.errState = "Please Fill the Comment field.";
  }
  if (!pincode) {
    error.errPincode = "Please Fill the Comment field.";
  }else if(pincode.length !==6){
    error.pincode = "Pincode must be 6 digit"
  }
  return error;
};
