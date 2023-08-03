import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sic, setSic] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [address, setAddress] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSicChange = (event) => {
    setSic(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length !== 0) {
      setErrors(errors);
      return;
    } else {
      setErrors({});
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const response = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password, sic, phone, branch, address }),
    });
    const json = await response.json();
    console.log(json);
    navigate("/login");
  };

  const validateForm = () => {
    let errors = {};
                         

    if (!username) {
      errors.username = "Username is required";
    }else if (username.length <= 8) {
      errors.address = "Username is too short";
    }

    if (!address) {
      errors.address = "Address is required";
    }else if (address.length <= 15) {
      errors.address = "Address is too short";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!sic) {
      errors.sic = "SIC is required";
    }else if (sic.length !== 8) {
      errors.phone = "SIC is invalid";
    }

    if (!phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = "Phone number is invalid";
    }

    if (!branch) {
      errors.branch = "Branch is required";
    }else if (branch.length != 3) {
      errors.branch = "Branch is invalid";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <div class="container">
      <div class="position-absolute top-50 start-50 translate-middle border ok">
        <form onSubmit={handleSubmit} class="form-control ok">
          <h2>Signup here</h2>
          <hr />
          <div class="my-3 row">
            <div class="col-lg-4">
              <label>Username:</label>
            </div>
            <div class="col-lg-8">
              <input
                className={`form-control ${errors.username && "is-invalid"}`}
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
              {errors.username && (
                <div class="invalid-feedback">{errors.username}</div>
              )}
            </div>
          </div>
          <div class="my-3 row">
            <div class="col-lg-4">
              <label>Email:</label>
            </div>
            <div class="col-lg-8">
              <input
                className={`form-control ${errors.email && "is-invalid"}`}
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
              {errors.email && (
                <div class="invalid-feedback">{errors.email}</div>
              )}
            </div>
          </div>
          <div class="my-3 row">
            <div class="col-lg-4">
              <label>SIC:</label>
            </div>
            <div class="col-lg-8">
              <input
                className={`form-control ${errors.sic && "is-invalid"}`}
                type="text"
                value={sic}
                onChange={handleSicChange}
              />
              {errors.sic && <div class="invalid-feedback">{errors.sic}</div>}
            </div>
          </div>
          <div class="my-3 row">
            <div class="col-lg-4">
              <label>Phone:</label>
            </div>
            <div class="col-lg-8">
              <input
                className={`form-control ${errors.phone && "is-invalid"}`}
                type="text"
                value={phone}
                onChange={handlePhoneChange}
              />
              {errors.phone && (
                <div class="invalid-feedback">{errors.phone}</div>
              )}
            </div>
          </div>
          <div class="my-3 row">
            <div class="col-lg-4">
              <label>Address:</label>
            </div>
            <div class="col-lg-8">
              <input
                className={`form-control ${errors.address && "is-invalid"}`}
                type="text"
                value={address}
                onChange={handleAddressChange}
              />
              {errors.address && (
                <div class="invalid-feedback">{errors.address}</div>
              )}
            </div>
          </div>
          <div class="my-3 row">
            <div class="col-lg-4">
              <label>Branch:</label>
            </div>
            <div class="col-lg-8">
              <input
                className={`form-control ${errors.branch && "is-invalid"}`}
                type="text"
                value={branch}
                onChange={handleBranchChange}
              />
              {errors.branch && (
                <div class="invalid-feedback">{errors.branch}</div>
              )}
            </div>
          </div>

          <div class="my-3 row">
            <div class="col-lg-4">
              <label>Password:</label>
            </div>
            <div class="col-lg-8">
              <input
                className={`form-control ${errors.password && "is-invalid"}`}
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              {errors.password && (
                <div class="invalid-feedback">{errors.password}</div>
              )}
            </div>
          </div>
          <div class="my-3 row">
            <div class="col-lg-4">
              <label>Confirm Password:</label>
            </div>
            <div class="col-lg-8">
              <input
                className={`form-control ${
                  errors.confirmPassword ? "" : "is-invalid"
                }`}
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              {!errors.confirmPassword && (
                <div className="invalid-feedback">Passwords do not match.</div>
              )}
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
