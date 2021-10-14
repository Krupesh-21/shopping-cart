import React, { Component } from "react";
import { userDetails } from "../actions";
import { connect } from "react-redux";
import formValidation from "./formValidation";
const emailValidator =
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneNo: null,
      address: "",
      city: "",
      state: "",
      pincode: null,
      nameErr: "",
      emailErr: "",
      phoneNoErr: "",
      addressErr: "",
      cityErr: "",
      stateErr: "",
      pincodeErr: "",
      modeOfPayment: "",
      checkedA: false,
      checkedB: false,
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value }, () => {
      if (name === "name") {
        if (this.state.name.length < 1) {
          this.setState({ nameErr: "Please Fill Up the name field" });
        } else {
          this.setState({ nameErr: "" });
        }
      } else if (name === "email") {
        if (this.state.email.length < 1) {
          this.setState({ emailErr: "Please Fill Up the email field" });
        } else if (!emailValidator.test(this.state.email)) {
          this.setState({ emailErr: "Email is not valid" });
        } else {
          this.setState({ emailErr: "" });
        }
      } else if (name === "phoneNo") {
        if (
          typeof this.state.phoneNo !== "number" &&
          this.state.phoneNo === null
        ) {
          this.setState({ phoneNoErr: "Please Fill Up the Phone No field" });
        } else if (this.state.phoneNo.length !== 10) {
          this.setState({ phoneNoErr: "Phone No must consist only 10 digit" });
        } else {
          this.setState({ phoneNoErr: "" });
        }
      } else if (name === "address") {
        if (this.state.address.length < 1) {
          this.setState({ addressErr: "Please Fill Up the address field" });
        } else {
          this.setState({ addressErr: "" });
        }
      } else if (name === "city") {
        if (this.state.city.length < 1) {
          this.setState({ cityErr: "Please Fill Up the city field" });
        } else {
          this.setState({ cityErr: "" });
        }
      } else if (name === "state") {
        if (this.state.state.length < 1) {
          this.setState({ stateErr: "Please Fill Up the city field" });
        } else {
          this.setState({ stateErr: "" });
        }
      } else if (name === "pincode") {
        if (this.state.pincode.length < 1) {
          this.setState({ pincodeErr: "Please Fill Up the city field" });
        } else if (this.state.pincode.length !== 6) {
          this.setState({ pincodeErr: "Pincode must be only 6 digit" });
        } else {
          this.setState({ pincodeErr: "" });
        }
      } else return;
    });
  };

  handleSwitch = (e) => {
    const { name, value } = e.target;
    if (name === "checkedB") {
      this.setState({ checkedB: !this.state.checkedB });
      this.setState({ checkedA: false });
    } else {
      this.setState({ checkedB: false });
      this.setState({ checkedA: !this.state.checkedA });
    }
    this.setState({ modeOfPayment: value });
    console.log("userDetail switch value", value);
  };

  submitBtn = () => {
    const err = formValidation(this.state);
    console.log("userDetails err", Object.keys(err).length !== 0);
    console.log("ERR", err);
    const { checkedA, checkedB } = this.state;
    let isFormValid;
    if (
      (Object.keys(err).length !== 0 &&
        checkedA === false &&
        checkedB === false) ||
      (Object.keys(err).length !== 0 &&
        (checkedA === true || checkedB === true)) ||
      (Object.keys(err).length === 0 &&
        checkedA === false &&
        checkedB === false)
    ) {
      isFormValid = false;
    }
    console.log("isFormValid", isFormValid);
    if (isFormValid === false) {
      console.log("if btn", checkedA === false && checkedB === false);
      return (
        <button
          disabled
          className="user-detail-submit-btn btn-disabled"
          type="submit"
        >
          Submit
        </button>
      );
    } else {
      console.log("else btn");
      return (
        <button className={`user-detail-submit-btn`} type="submit">
          Submit
        </button>
      );
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.userDetails(this.state);
    if (this.props.match.params.id) {
      this.props.history.push(
        `/purchase/${this.props.match.params.id}/${this.state.email}`
      );
    } else {
      this.props.history.push(`/purchase/${this.state.email}`);
    }

    this.setState({
      name: "",
      email: "",
      phoneNo: null,
      address: "",
      city: "",
      state: "",
      pincode: null,
      modeOfPayment: "",
      checkedA: false,
      checkedB: false,
    });
  };
  render() {
    const {
      name,
      email,
      phoneNo,
      address,
      city,
      state,
      pincode,
      nameErr,
      emailErr,
      phoneNoErr,
      addressErr,
      cityErr,
      stateErr,
      pincodeErr,
      checkedA,
      checkedB,
    } = this.state;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="user-detail-form">
          <fieldset className="user-detail-fieldset">
            <legend>User Details</legend>
            <label htmlFor="userName">User Name:</label>
            <input
              id="userName"
              value={name}
              onChange={this.handleChange}
              placeholder="Name"
              type="text"
              name="name"
            />
            {nameErr && <p className="form-error">{nameErr}</p>}
            <label htmlFor="userEmail">User Email:</label>
            <input
              id="userEmail"
              value={email}
              onChange={this.handleChange}
              placeholder="Email"
              type="text"
              name="email"
            />
            {emailErr && <p className="form-error">{emailErr}</p>}
            <label htmlFor="userPhoneNo">User Phone No.:</label>
            <input
              id="userPhoneNo"
              value={phoneNo}
              onChange={this.handleChange}
              placeholder="Phone Number"
              type="tel"
              name="phoneNo"
            />
            {phoneNoErr && <p className="form-error">{phoneNoErr}</p>}
            <label htmlFor="userAddress">User Address:</label>
            <input
              id="userAddress"
              value={address}
              onChange={this.handleChange}
              placeholder="Address"
              type="text"
              name="address"
            />
            {addressErr && <p className="form-error">{addressErr}</p>}
            <label htmlFor="userCity">City:</label>
            <input
              id="userCity"
              value={city}
              onChange={this.handleChange}
              placeholder="City"
              type="text"
              name="city"
            />
            {cityErr && <p className="form-error">{cityErr}</p>}
            <label htmlFor="userState">State:</label>
            <input
              id="userState"
              value={state}
              onChange={this.handleChange}
              placeholder="State"
              type="text"
              name="state"
            />
            {stateErr && <p className="form-error">{stateErr}</p>}
            <label htmlFor="userPincode">Pincode:</label>
            <input
              id="userPincode"
              value={pincode}
              onChange={this.handleChange}
              placeholder="Pincode"
              type="number"
              maxlength="6"
              name="pincode"
            />
            {pincodeErr && <p className="form-error">{pincodeErr}</p>}
          </fieldset>

          <fieldset className="payment-switch-fieldset">
            <legend>Payment Mode</legend>
            <div className="payment-switch">
              <input
                id="online"
                value="Online"
                onChange={this.handleSwitch}
                checked={checkedA}
                name="checkedA"
                type="checkbox"
              />
              <label htmlFor="online">Online</label>
            </div>
            <div className="payment-switch">
              <input
                id="cod"
                value="Cash On Delivery"
                onChange={this.handleSwitch}
                checked={checkedB}
                name="checkedB"
                type="checkbox"
              />
              <label htmlFor="cod">Cash on Delivery</label>
            </div>
          </fieldset>
          {this.submitBtn()}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { userDetails };

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
