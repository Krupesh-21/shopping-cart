import React, { Component } from "react";
import {
  Paper,
  Container,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { userDetails, buyThisProduct } from "../actions";
import { connect } from "react-redux";
import formValidation from "./formValidation";
const emailValidator =
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class BuyNow extends Component {
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

  handleNameChange = (e) => {
    this.setState({ name: e.target.value }, () => {
      if (this.state.name.length < 1) {
        this.setState({ nameErr: "Please Fill Up the name field" });
      } else {
        this.setState({ nameErr: "" });
      }
    });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value }, () => {
      if (this.state.email.length < 1) {
        this.setState({ emailErr: "Please Fill Up the email field" });
      } else if (!emailValidator.test(this.state.email)) {
        this.setState({ emailErr: "Email is not valid" });
      } else {
        this.setState({ emailErr: "" });
      }
    });
  };

  handlePhoneNoChange = (e) => {
    this.setState({ phoneNo: e.target.value }, () => {
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
    });
  };

  handleAddressChange = (e) => {
    this.setState({ address: e.target.value }, () => {
      if (this.state.address.length < 1) {
        this.setState({ addressErr: "Please Fill Up the address field" });
      } else {
        this.setState({ addressErr: "" });
      }
    });
  };

  handleCityChange = (e) => {
    this.setState({ city: e.target.value }, () => {
      if (this.state.city.length < 1) {
        this.setState({ cityErr: "Please Fill Up the city field" });
      } else {
        this.setState({ cityErr: "" });
      }
    });
  };

  handleStateChange = (e) => {
    this.setState({ state: e.target.value }, () => {
      if (this.state.state.length < 1) {
        this.setState({ stateErr: "Please Fill Up the city field" });
      } else {
        this.setState({ stateErr: "" });
      }
    });
  };

  handlePincodeChange = (e) => {
    this.setState({ pincode: e.target.value }, () => {
      if (this.state.pincode.length < 1) {
        this.setState({ pincodeErr: "Please Fill Up the city field" });
      } else if (this.state.pincode.length !== 6) {
        this.setState({ pincodeErr: "Pincode must be only 6 digit" });
      } else {
        this.setState({ pincodeErr: "" });
      }
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
    console.log("userDetail switch value",value);
  };

  submitBtn = () => {
    const err = formValidation(this.state);
    console.log("userDetails err",err);
    if (Object.keys(err) === 0) {
      console.log("if btn");
      return (
        <Button
          variant="contained"
          size="small"
          type="submit"
          disabled
          startIcon={<SaveIcon />}
          style={{ marginTop: "15px" }}
        >
          Submit
        </Button>
      );
    } else {
      console.log("else btn");
      return (
        <Button
          variant="contained"
          size="small"
          startIcon={<SaveIcon />}
          type="submit"
        >
          Submit
        </Button>
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
      typeOfDelivery,
    } = this.state;

    console.log("userdetails props",this.props);
    console.log("userdetail typeof delivery",typeOfDelivery);
    return (
      <Container>
        <Typography variant="h4">Fill Up The Details</Typography>
        <Paper elevation={2} style={{ padding: "15px", marginTop: "5px" }}>
          <form onSubmit={this.handleSubmit}>
            <Typography variant="h6" color="secondary">
              User Details
            </Typography>
            <div style={{ marginTop: "20px" }}>
              <TextField
                {...(nameErr ? { error: true } : { error: false })}
                defaultValue={name}
                onChange={this.handleNameChange}
                label="Name"
                style={{ width: "30%" }}
                helperText={nameErr}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <TextField
                {...(emailErr ? { error: true } : { error: false })}
                defaultValue={email}
                onChange={this.handleEmailChange}
                label="Email"
                type="email"
                style={{ width: "30%" }}
                helperText={emailErr}
              />
            </div>
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <TextField
                {...(phoneNoErr ? { error: true } : { error: false })}
                defaultValue={phoneNo}
                onChange={this.handlePhoneNoChange}
                label="Phone No"
                type="number"
                style={{ width: "30%" }}
                helperText={phoneNoErr}
              />
            </div>
            <Typography variant="h6" color="secondary">
              User Address
            </Typography>
            <div style={{ marginTop: "10px" }}>
              <TextField
                {...(addressErr ? { error: true } : { error: false })}
                defaultValue={address}
                onChange={this.handleAddressChange}
                label="Address"
                style={{ width: "30%" }}
                helperText={addressErr}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <TextField
                {...(cityErr ? { error: true } : { error: false })}
                defaultValue={city}
                onChange={this.handleCityChange}
                label="City"
                helperText={cityErr}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <TextField
                {...(stateErr ? { error: true } : { error: false })}
                defaultValue={state}
                onChange={this.handleStateChange}
                label="State"
                helperText={stateErr}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <TextField
                {...(pincodeErr ? { error: true } : { error: false })}
                defaultValue={pincode}
                onChange={this.handlePincodeChange}
                label="Pincode"
                helperText={pincodeErr}
              />
            </div>
            <div style={{ marginTop: "15px" }}>
              <Typography variant="h6" color="secondary">
                Mode of Payment:
              </Typography>
            </div>
            <div>
              <FormControlLabel
                control={
                  <Switch
                    checked={checkedB}
                    onChange={this.handleSwitch}
                    name="checkedB"
                    color="primary"
                    value="Cash on delivery"
                  />
                }
                label="Cash on Delivery"
              />
            </div>
            <div>
              <FormControlLabel
                control={
                  <Switch
                    checked={checkedA}
                    onChange={this.handleSwitch}
                    name="checkedA"
                    color="primary"
                    value="Online"
                  />
                }
                label="Online"
              />
            </div>
            {/* {this.submitBtn()} */}
            <Button
              variant="contained"
              size="small"
              startIcon={<SaveIcon />}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps, { userDetails, buyThisProduct })(
  BuyNow
);
