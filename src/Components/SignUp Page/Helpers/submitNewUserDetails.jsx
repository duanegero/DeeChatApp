//import axios for api requests
import axios from "axios";

//variable to handle api url
const apiUrl = import.meta.env.VITE_API_URL;

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

  if (!firstname || !lastname || !email || !age || !username || !password) {
    alert("All fields need to be filled to create new user.");
    return;
  }

  const newUser = {
    first_name: firstname,
    last_name: lastname,
    email: email,
    age: age,
    username: username,
    password: password,
  };

  try {
    const response = await axios.post(`${apiUrl}/users`, newUser);

    if (response.status === 201) {
      alert("New user successfully created.");
      navigate(`/login`);
    } else {
      alert("Error creating new user. Please try again");
      setFirstname("");
      setLastname("");
      setEmail("");
      setAge("");
      setUsername("");
      setPassword("");
      return;
    }
  } catch (error) {
    console.error("Error creating new user.", error.message, error.stack);
  }
};

export default submitNewUserDetails;
