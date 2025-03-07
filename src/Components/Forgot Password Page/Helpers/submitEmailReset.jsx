//import axios for api requests
import axios from "axios";

//variable to handle api url
const apiUrl = import.meta.env.VITE_API_URL;

//defining an async helper function with passed in variables
const submitEmailReset = async (
  email,
  setUsername,
  setMessage,
  setEmail,
  setLoginPageButton
) => {
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

    //checking for certin error passed from api
    if (response.data && response.data.error === "EMAIL_NOT_FOUND") {
      //setting state variables
      setMessage(`${email} not found`);
      setEmail("");
      setUsername("");
      setLoginPageButton(false);
      return;
    }

    //if success status setusername and set message
    if (response.status === 200) {
      //setting state variables
      setUsername(`USERNAME: ${response.data.user_login.username}`);
      setMessage(
        `An email has been sent to ${email} containing detailed instructions on how to reset your password. Please check your inbox and follow the provided steps to regain access to your account.`
      );
      setLoginPageButton(true);
    }
  } catch (error) {
    //catch if any error, alert accordingly
    if (error.response) {
      if (error.response.status === 404) {
        //setting state variables
        alert("Email not found. Please make sure it's correct.");
        setUsername("");
        setLoginPageButton(false);
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
