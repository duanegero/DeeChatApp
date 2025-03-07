//defining a helper function
const navigateForgotPassword = (navigate) => {
  //variable to handle url
  const url = "/forgotpassword";

  //navigate to url from variable
  navigate(url);
};
//export function to use in app
export default navigateForgotPassword;
