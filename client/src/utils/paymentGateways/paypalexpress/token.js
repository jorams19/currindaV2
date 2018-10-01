import paypalApi from './api';

export const requestAccessToken = () => {
  paypalApi({
    url: 'v1/oauth2/token',
    method: 'post',
    withCredentials: true,
    data: JSON.stringify({ grant_type: 'client_credentials' }),
    headers: {
      'Accept': 'application/json',
      'Accept-Language': 'en_US',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: process.env.REACT_APP_PAYPAL_CLIENT_ID,
      password: process.env.REACT_APP_PAYPAL_SECRET,
    },
  })
    .then(response => console.log(response))
    .catch(err => console.error(err.response));
};