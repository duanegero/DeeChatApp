const userLogout = (navigate) => {
  //varaible to handle login URL
  const loginUrl = `/login`;

  //naviage to URL
  navigate(loginUrl);
};

//export to use in app
export default userLogout;
