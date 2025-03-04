const openSettings = (username, userId, navigate) => {
  const url = `/settings?username=${username}&userId=${userId}`;

  navigate(url);
};
export default openSettings;
