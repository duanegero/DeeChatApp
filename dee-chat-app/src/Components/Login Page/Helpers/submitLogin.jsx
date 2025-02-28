//import axios for api requests
import axios from "axios";

//variable to handle api url
const apiUrl = "http://localhost:3006";

//defining async function with passed in variables
const submitLogin = async (
  event,
  username,
  setUsername,
  password,
  setPassword,
  navigate
) => {
  event.preventDefault();

  //if all fields aren't filled alert user
  if (!username || !password) {
    alert("Enter both username and password.");
    return;
  }

  //creating an object with user input
  const user = {
    username: username,
    password: password,
  };

  try {
    //variable to handle axios request
    const response = await axios.post(`${apiUrl}/login`, user);

    //variables to handle returned data
    const token = response.data.token;
    const userId = response.data.userId;
    const returnedUsername = response.data.username;

    //store token to use else where
    localStorage.setItem("token", token);

    //clear the fields
    setUsername("");
    setPassword("");

    //navigate to the chat page
    navigate(`/chat?username=${returnedUsername}`);
  } catch (error) {
    //log if any errors
    console.error("Login Error", error.message, error.stack);

    //alert user if any errors, use status
    if (error.response && error.response.status === 401) {
      alert("Invalid username or password. Please try again.");
    } else if (error.response && error.response.status === 500) {
      alert("Server error. Please try again later.");
    } else {
      alert("An unexpected error occurred. Please try again.");
    }

    //clear input fields
    setUsername("");
    setPassword("");
  }
};

//export to use else where
export default submitLogin;
