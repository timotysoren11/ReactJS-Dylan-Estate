import './Homepage.css'
import tick from '../../assests/tick.png'

const Homepage = () => {

  const countries = [
    { code: 'IN', name: 'India', phoneCode: '+91' },
    { code: 'US', name: 'United States', phoneCode: '+1' }
    // Add more countries as needed
  ];

  return (
    <div className='content-container'>
      <div className="text-content">
        <h2>Sell or Rent Your Property For Free</h2>
        <p>Whether you're ready to sell or looking for answers, we'll guide you with data and expertise specific to your need</p>
      </div>
      <div className="mid-content">
        <div className="mid-sub">
          <h4>Upload your property in 4 simple steps</h4>
          <ul className='property-list'>
            <li>
              <img src={tick} alt="img" className='tick-img' />
              <span>Add your properties<b>Basic Details </b></span>
            </li>
            <li>
              <img src={tick} alt="img" className='tick-img' />
              <span>Add property <b> Location</b></span>
            </li>
            <li>
              <img src={tick} alt="img" className='tick-img' />
              <span>Add property<b> Features and amenities</b></span>
            </li>
            <li>
              <img src={tick} alt="img" className='tick-img' />
              <span>Add <b>Price Details</b></span>
            </li>
            <li>
              <img src={tick} alt="img" className='tick-img' />
              <span>Add your best <b> Property Shots</b></span>
            </li>
          </ul>
        </div>
      {/*------------------ FORM -------------*/}
        <div className="form-container">
          <h1>LET'S GET YOU STARTED!</h1>
          <form>
            <div className="form-group">
              <label>
                I am:
                <div className="input-buttons">
                  <input
                    type="radio"
                    name="gender"
                    value="Owner"
                  />
                  Owner
                  <input
                    type="radio"
                    name="gender"
                    value="Builder"
                  />
                  Builder
                </div>
              </label>
            </div>
            <div className="form-group">
              <label>
                Your Name *
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Country *
                <select
                  name="country"
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.name}
                  </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="form-group">
              <label>
                Phone *
                <div className="input-buttons">
                  <select
                    name="phoneCode"
                  >
                    <option value="">Select Phone Code</option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.phoneCode}>
                        {country.phoneCode} ({country.name})
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    name="phone"
                    placeholder="000-000-0000"
                  />
                </div>
              </label>
            </div>
            <div className="form-group">
              <label>
                OR
              </label>
            </div>
            <div className="form-group">
              <label>
                Email *
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                />
              </label>
            </div>
            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Homepage
