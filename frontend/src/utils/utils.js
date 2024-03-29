export const isTokenExpired = (token) => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const currentTime = Date.now() / 1000;
    return payload && payload.exp ? payload.exp < currentTime : true;
  } catch (error) {
    console.error("Error: ", error);
    return true;
  }
};