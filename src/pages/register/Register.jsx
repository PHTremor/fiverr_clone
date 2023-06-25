import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.scss";
import uploadFile from "../../utils/uploadFile.js";
import newRequest from "../../utils/newRequest.js";

function Register() {
  const [file, setFile] = useState(null);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    image: "",
    country: "",
    isSeller: false,
    phone: "",
    description: "",
  });

  const navigate = useNavigate();

  // changing field values ...set userData
  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // toggle isSeller
  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };

  // submit user-reg form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // upload image
    const url = await uploadFile(file);

    try {
      // send user data
      await newRequest.post("/auth/register", {
        ...user,
        image: url,
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>

          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder="e.g. FrankMwale"
            name="username"
            onChange={handleChange}
          />

          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            name="email"
            onChange={handleChange}
          />

          <label htmlFor="">Password</label>
          <input type="password" name="password" onChange={handleChange} />

          <label htmlFor="">Profile Picture</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />

          <label htmlFor="">Country</label>
          <input
            type="text"
            placeholder=" e.g. Malawi"
            name="country"
            onChange={handleChange}
          />

          <button type="submit">Register</button>
        </div>

        <div className="right">
          <h1>I want to be come a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="sliderr round"></span>
            </label>
          </div>

          <label htmlFor="">Phone Number</label>
          <input
            type="text"
            placeholder="+265 888 ..."
            name="phone"
            onChange={handleChange}
          />

          <label htmlFor="">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="description"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Register;
