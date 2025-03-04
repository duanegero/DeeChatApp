//import axios for api requests
import axios from "axios";

//variable to handle api url
const apiUrl = "http://localhost:3006";

//geting the token from local storeage
const token = localStorage.getItem("token");

const submitNewUserDetails = async (
  event,
  firstname,
  lastname,
  email,
  age,
  navigate,
  userId,
  username
) => {
  event.preventDefault();
  if (!firstname || !lastname || !email || !age) {
    alert("All details must be filled.");
    return;
  }

  const newUserDeatils = {
    first_name: firstname,
    last_name: lastname,
    email: email,
    age: age,
  };

  try {
    const response = await axios.put(
      `${apiUrl}/users/${userId}`,
      newUserDeatils,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response) {
      alert("User details updated.", response.data);
      navigate(`/chat?username=${username}&userId=${userId}`);
    }
  } catch (error) {
    //catch if any errors log
    console.error("Error updating user details.", error.message, error.stack);
  }
};
export default submitNewUserDetails;
