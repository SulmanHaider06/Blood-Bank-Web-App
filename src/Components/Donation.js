import React from 'react';
import './Donation.css'; // Import your CSS file for styling
import Donor from "../Assets/donor.jpg";
import Oman from "../Assets/oman.jpg";
import Dubai from "../Assets/dubai.jpg";
import China from "../Assets/china.jpg";
import Iran from "../Assets/iran.jpg";
import DonorBackground from "../Assets/donor-background.png";
import Navbar from './Navbar';

const Donation = () => {
  return (
    
    <div className='donation-container'>
      <div className='nav-container'>
      <Navbar/>
      </div>
      <div className="donor-background">
        <img src={DonorBackground} className="home-bannerImage" alt="donor" />
      </div>
      <div className="top-row">
        <div className='record-box'>
          <h2 className='heading'>Become a Donor</h2>
          <form className='donor-form'>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <input type='text' placeholder='City' />
            <input type='text' placeholder='Address' />
            <input type='tel' placeholder='Contact No.' />
            <input type='number' placeholder='Age' />
            <input type='text' placeholder='Blood Group' />
            <button type='submit'>Submit</button>
          </form>
        </div>
        <div className='image-container'>
          <img src={Donor} alt='Donation' />
        </div>
      </div>
      <div className="description-box">
        <p>Here are some of the hospitals we are linked with:</p>
      </div>
      <div className="megacard">
        <div className="marquee">
          <div className="card">
            <div className="image">
              <img src={Dubai} alt="Dubai" />
            </div>
            <div className="description">
              <p>Shifa International</p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={China} alt="China" />
            </div>
            <div className="description">
              <p>PIMS</p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={Iran} alt="Iran" />
            </div>
            <div className="description">
              <p>PAF Hospital</p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={Oman} alt="Oman" />
            </div>
            <div className="description">
              <p>Holy Family</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donation;
