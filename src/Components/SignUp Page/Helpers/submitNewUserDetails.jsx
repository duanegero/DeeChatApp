//import axios for api requests
import axios from "axios";

//variable to handle api url
const apiUrl = import.meta.env.VITE_API_URL;

//defining a async function with passed in variables
const submitNewUserDetails = async (
  event,
  firstname,
  lastname,
  email,
  age,
  username,
  password,
  navigate,
  setFirstname,
  setLastname,
  setEmail,
  setAge,
  setUsername,
  setPassword
) => {
  event.preventDefault();

  //if all the fields aren't filled alert user
  if (!firstname || !lastname || !email || !age || !username || !password) {
    alert("All fields need to be filled to create new user.");
    return;
  }

  //creating a new object with user input
  const newUser = {
    first_name: firstname,
    last_name: lastname,
    email: email,
    age: age,
    username: username,
    password: password,
  };

  try {
    //variable to handle axios request
    const response = await axios.post(`${apiUrl}/users`, newUser);

    //if ok status alert user and navigate
    if (response.status === 201) {
      alert("New user successfully created.");
      navigate(`/login`);
    } else {
      alert("Error creating new user. Please try again");
      resetForm();
      return;
    }
  } catch (error) {
    //catch if any errors, check response and handle if username or email exist
    if (error.response) {
      //check for error from api, alert user and set state variable
      if (error.response.data.error === "EMAIL_ALREADY_EXISTS") {
        alert("Email already in use please choose another.");
        setEmail("");
        return;
      }

      //check for error from api, alert user and set state variable
      if (error.response.data.error === "USERNAME_ALREADY_EXISTS") {
        alert("Username already in use please choose another.");
        setUsername("");
        return;
      } else {
        alert("An error occurred. Please try again later.");
      }
    } else {
      alert("Network error. Check and try again.");
      resetForm();
    }

    //function to reset all the fields
    function resetForm() {
      setFirstname("");
      setLastname("");
      setEmail("");
      setAge("");
      setUsername("");
      setPassword("");
    }
  }
};

export default submitNewUserDetails;
