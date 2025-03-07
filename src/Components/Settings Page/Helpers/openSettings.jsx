//defining a function with passed in variables
const openSettings = (username, userId, navigate) => {
  //variable to handle url
  const url = `/settings?username=${username}&userId=${userId}`;

  //navigate to url in variable
  navigate(url);
};
//export to use in app
export default openSettings;
