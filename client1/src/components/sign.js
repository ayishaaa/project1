import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const SignupForm = () => {
  const [userid, setUserid] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    var formData = {
      userId: userid,
      Name: name,
      Place: place,
      Mobile: mobile,
      Age: age,
      Gender: gender,

    }
    axios.post('http://localhost:8001/signs/registered', formData).then((response) => {
      console.log(response);


      window.location.href = "/";
    })
      .catch((error) => {
        console.error(error);
        if (error.response && error.response.status === 400) {
          setError(error.response.data.error);
        }
      });

  };

  return (
    <form className='form6' onSubmit={handleSubmit}>
      <div className="form6-group">
        <label className='label6' htmlFor="userid">User ID:</label>
        <input className="input6" type="text" id="userid" value={userid} onChange={(e) => setUserid(e.target.value)} required />
        <p style={{ color: "red" }}>{error}</p>
      </div>
      <div className="form6-group">
        <label className='label6' htmlFor="name">Name:</label>
        <input className="input6" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form6-group">
        <label className='label6' htmlFor="place">Place:</label>
        <input className="input6" type="text" id="place" value={place} onChange={(e) => setPlace(e.target.value)} required />
      </div>
      <div className="form6-group">
        <label className='label6' htmlFor="mobile">Mobile:</label>
        <input className="input6" type="tel" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
      </div>
      <div className="form6-group">
        <label className='label6' htmlFor="age">Age:</label>
        <input className="input6" type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />
      </div>
      <div className="form6-group">
        <label className='label6' htmlFor="gender">Gender:</label>
        <select className='select6' id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button className='button6' type="submit">Submit</button>
    </form>
  );
};

const Sign = () => {
  const handleSignup = (formData) => {
    // handle form submission here
    console.log(formData);
  };

  return (
    <div className="sign-page">
      <div className="sign-box" >
        <h2 style={{ "color": "#a548a5", "fontWeight": "bold", "marginLeft": "100px" }}>Signup Page</h2>
        <SignupForm onSubmit={handleSignup} />
        <p style={{ "marginLeft": "80px", "marginBottom": "30px" }}>Already have an account? <Link className='a6' to="/">Login</Link></p>
      </div>
    </div>
  );
};

export default Sign;
