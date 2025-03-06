//import axios for api requests
import axios from "axios";

//variable to handle api url
const apiUrl = import.meta.env.VITE_API_URL;

//defining an asynce function
const submitUpdatedEmail = async (newEmail, userId, navigate, setNewEmail) => {
  //if no new email address alert user
  if (!newEmail) {
    alert("Enter a new email address.");
    return;
  }

  //geting the token from local storeage
  const token = localStorage.getItem("token");

  //if no token alert user
  if (!token) {
    alert("You are not authenticated. Please log in and try again.");
    navigate("/login");
    return;
  }

  //object to handle new email
  const newEmailDetails = {
    newEmail: newEmail,
  };

  try {
    //variable to handle axios request
    const response = await axios.put(
      `${apiUrl}/users/email/${userId}`,
      newEmailDetails,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    //if response from axios alert user and nav to login page
    if (response) {
      alert(`Email updated: ${newEmail}`);
      setNewEmail("");
      navigate(`/login`);
    }
  } catch (error) {
    if (error.response) {
      //catch if any errors log
      console.error("Error updating username.", error.response.data);

      //if response error alert email already used
      if (error.response.data.error === "EMAIL_ALREADY_EXISTS") {
        alert("Email name already in use, please try again.");
        setNewEmail("");
        return;
      }
    }
  }
};

//export to use in app
export default submitUpdatedEmail;
