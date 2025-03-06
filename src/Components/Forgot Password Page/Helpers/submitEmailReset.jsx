//import axios for api requests
import axios from "axios";

//variable to handle api url
const apiUrl = import.meta.env.VITE_API_URL;

//defining an async helper function with passed in variables
const submitEmailReset = async (email, setUsername, setMessage) => {
  //if no email passed alert user
  if (!email) {
    alert("Need email address to reset password.");
    return;
  }

  try {
    //variable to handle axios request
    const response = await axios.get(
      `${apiUrl}/users/forgot-password/${email}`
    );

    //if success status setusername and set message
    if (response.status === 200) {
      setUsername(response.data.user_login.username);
      setMessage(
        `An Email has been sent to ${email} with instructions to reset password.`
      );
    }
  } catch (error) {
    //catch if any error, alert accordingly
    if (error.response) {
      if (error.response.status === 404) {
        alert("Email not found. Please make sure it's correct.");
      } else {
        alert("An error occurred.");
      }
    } else {
      alert("Error occurred.");
    }
  }
};

//export to use in app
export default submitEmailReset;
