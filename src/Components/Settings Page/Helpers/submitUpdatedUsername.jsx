//import axios for api requests
import axios from "axios";

//variable to handle api url
const apiUrl = import.meta.env.VITE_API_URL;
//geting the token from local storeage
const token = localStorage.getItem("token");

const submitUpdatedUsername = async (
  event,
  newUsername,
  navigate,
  username,
  setNewUsername
) => {
  //if no new username passed alert user
  if (!newUsername) {
    alert("Enter a new username.");
    return;
  }

  //creating an object with user details
  const newUsernameDetails = {
    newUsername: newUsername,
  };

  try {
    //vaiable to handle axios request with object and headers
    const response = await axios.put(
      `${apiUrl}/users/update/${username}`,
      newUsernameDetails,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    //if response returned alert of new username and take to login page
    if (response) {
      alert(`Username updated: ${newUsername}`);
      navigate(`/login`);
    }
  } catch (error) {
    if (error.response) {
      //catch if any errors log
      console.error("Error updating username.", error.response.data);

      if (error.response.data.error === "USERNAME_ALREADY_EXISTS") {
        alert("Username name already in use, please try again.");
        setNewUsername("");
        return;
      }
    }
  }
};

//export function to use in app
export default submitUpdatedUsername;
