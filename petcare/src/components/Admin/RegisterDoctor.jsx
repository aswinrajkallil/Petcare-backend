import React from 'react';
import './Admin.css';


function RegisterDoctor() {
  return (
    <div className="register-doctor-container">
      
      <form className="register-doctor-form">
        <h1>Register <div className='docorr'>Doctor</div></h1>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="name">Name</label></td>
              <td><input type="text" id="name" /></td>
            </tr>

            <tr>
              <td><label htmlFor="email">Email</label></td>
              <td><input type="email" id="email" /></td>
            </tr>

            <tr>
              <td><label htmlFor="phone">Phone</label></td>
              <td><input type="tel" id="phone" /></td>
            </tr>

            <tr>
              <td><label htmlFor="qualification">Qualification</label></td>
              <td><input type="text" id="qualification" /></td>
            </tr>

            <tr>
              <td><label htmlFor="experience">Experience (Years)</label></td>
              <td><input type="number" id="experience" /></td>
            </tr>

            <tr>
              <td><label htmlFor="license">License Number</label></td>
              <td><input type="text" id="license" /></td>
            </tr>

            <tr>
              <td><label htmlFor="clinicName">Clinic Name</label></td>
              <td><input type="text" id="clinicName" /></td>
            </tr>

            <tr>
              <td><label htmlFor="clinicAddress">Clinic Address</label></td>
              <td><textarea id="clinicAddress" /></td>
            </tr>

            <tr>
              <td><label htmlFor="password">Password</label></td>
              <td><input type="password" id="password" /></td>
            </tr>

            <tr>
              <td><label htmlFor="confirmPassword">Confirm Password</label></td>
              <td><input type="password" id="confirmPassword" /></td>
            </tr>

            <tr>
              <td colSpan="2">
                <button type="submit">Register</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default RegisterDoctor;
