//import axios for api requests
import axios from "axios";

//variable to handle api url
const apiUrl = import.meta.env.VITE_API_URL;
//geting the token from local storeage
const token = localStorage.getItem("token");

//defining a async function with passed in variables
const submitUpdatedUserDetails = async (
  event,
  firstname,
  lastname,
  age,
  navigate,
  userId,
  username
) => {
  event.preventDefault();

  //alert if all fields aren't filled
  if (!firstname || !lastname || !age) {
    alert("All details must be filled.");
    return;
  }

  //creating a object with user details
  const newUserDeatils = {
    first_name: firstname,
    last_name: lastname,
    age: age,
  };

  try {
    //variable to handle axios request
    const response = await axios.put(
      `${apiUrl}/users/${userId}`,
      newUserDeatils,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    //if axios returns alert user and navigate to login
    if (response) {
      alert("User details updated.", response.data);
      navigate(`/chat?username=${username}&userId=${userId}`);
    }
  } catch (error) {
    //catch if any errors log
    console.error("Error updating user details.", error.message, error.stack);
  }
};
//export function to use else where in app
export default submitUpdatedUserDetails;
