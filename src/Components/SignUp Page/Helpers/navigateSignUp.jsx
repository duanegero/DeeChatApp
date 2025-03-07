//defining a function with passed in variable
const navigateSignUp = (navigate) => {
  //variable to handle url
  const url = `/signup`;

  //navigate to url from variable
  navigate(url);
};

//export function to use in app
export default navigateSignUp;
