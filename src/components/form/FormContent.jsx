import React from 'react'
import './FormContent.css'

const FormContent = () => {
  return (

    <div className="form-container-1">
     <form>
        <label for="property">Property For:</label>
        <div className="property-for">
          <div className="for-1">
            <input type="radio" id="property" name="Rent" />
            Rent
          </div>
          <div className="for-2">
            <input type="radio" id="property"  name="Sale" />
            Sale
          </div>
        </div>

        <label for="type">Property Type:</label>
        <div className="prop-type">
          <div className="pro-1">
            <input type="radio" id="type" name="Residential" />
            Residential
          </div>
        
          <div className="pro-2">
            <input type="radio" id="type" name="Commercial" />
            Commercial
          </div>
       
          <div className="pro-3">
            <input type="radio" id="type" name="Land" />
            Land/Type
          </div>
        </div>

        <div className="built-up">
          <div className="built-1">
            <label for="area">Built up Area</label>
            <input type="text" id="area" name="area" />
          </div>
          <div className="built-2">
            <label for="carpet">Carpet Area</label>
            <input type="text" id="carpet" name="carpet" />
          </div>
        </div>
      
        <label for="age">Property Age:</label>
        <div className="property-age">
          <input type="button" value="Less than 1 year" />
          <input type="button" value="1-3 Years" />
          <input type="button" value="3-5 Years" />
          <input type="button" value="5-10 Years" />
          <input type="button" value="greater than 10 Years" />
        </div>
      
        <label for="age">BHK Type:</label>
        <div className="bhk">
          <input type="button" value="1 BHK" />
          <input type="button" value="2 BHK" />
          <input type="button" value="3 BHK" />
          <input type="button" value="4 BHK" />
          <input type="button" value="5+ BHK" />
        </div>
      
        <label for="bathroom">Bathrooms/Toilets:</label>
        <div className="bath">
          <input type="button" value="1" />
          <input type="button" value="2" />
          <input type="button" value="3" />
          <input type="button" value="4" />
          <input type="button" value="5" />
          <input type="button" value="6+" />
        </div>

        <label for="age">Balcony:</label>
        <div className="balcony">
          <input type="button" value="0" />
          <input type="button" value="1" />
          <input type="button" value="2" />
          <input type="button" value="3" />
          <input type="button" value="4+" />
        </div>
      
        <label for="age">Tenanat Preference:</label>
        <div className="preference">
          <input type="button" value="Any" />
          <input type="button" value="Family" />
          <input type="button" value="Bachelor (Man)" />
          <input type="button" value="Bachelor (Women)" />
        </div>    
      
        <label for="age">Availability:</label>
        <div className="avail">
          <input type="button" value="Immediate" />
          <input type="button" value="within 15 days" />
          <input type="button" value="within 1 month" />
          <input type="button" value="within 2 months" />
        </div>   

        <label for="phone">phone:</label>
        <select name="phone" id="number">
          <option value="+91">+91</option>
          <option value="+11">+11</option>
        </select>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
      </form>
    </div>
  
  )
}

export default FormContent