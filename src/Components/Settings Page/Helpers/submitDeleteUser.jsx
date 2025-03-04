//import axios for api requests
import axios from "axios";

//variable to handle api url
const apiUrl = "http://localhost:3006";

//geting the token from local storeage
const token = localStorage.getItem("token");

const submitDeleteUser = async (event, navigate, userId) => {
  event.preventDefault();

  if (!userId) {
    alert("No user ID to delete.");
    return;
  }

  const confirmDelete = window.confirm(
    "Are you sure you want to delete your account? This action cannot be undone."
  );

  if (!confirmDelete) {
    return;
  }

  try {
    const response = await axios.delete(`${apiUrl}/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      alert("User has been deleted.");
      navigate(`/login`);
    }
  } catch (error) {
    console.error("Error deleting user for database.");
    alert("An error occurred while deleting your account.");
  }
};

export default submitDeleteUser;
