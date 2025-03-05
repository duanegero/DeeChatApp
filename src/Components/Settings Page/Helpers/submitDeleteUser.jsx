//import axios for api requests
import axios from "axios";

//variable to handle api url
const apiUrl = import.meta.env.VITE_API_URL;
//geting the token from local storeage
const token = localStorage.getItem("token");

//defining a async function
const submitDeleteUser = async (event, navigate, userId) => {
  event.preventDefault();

  //if no user ID alertt user
  if (!userId) {
    alert("No user ID to delete.");
    return;
  }

  //get user to confirm before moving on
  const confirmDelete = window.confirm(
    "Are you sure you want to delete your account? This action cannot be undone."
  );

  //if no confirm return to page
  if (!confirmDelete) {
    return;
  }

  try {
    //variable to handle axios request with headers
    const response = await axios.delete(`${apiUrl}/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    //if ok status alert and nav to login page
    if (response.status === 200) {
      alert("User has been deleted.");
      navigate(`/login`);
    }
  } catch (error) {
    //catch if any errors, log and alert user
    console.error("Error deleting user for database.");
    alert("An error occurred while deleting your account.");
  }
};

//export function to use else where in app
export default submitDeleteUser;
