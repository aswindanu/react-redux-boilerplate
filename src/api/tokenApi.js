import axios from 'axios';
import dotenv from 'dotenv';
import qs from 'qs';

/**
 * @method axiosToken
 * @summary Call token login Edx function.
 * @return {object} Return JSON token login Edx.
 */
export default async function axiosToken() {
  dotenv.config();
  const config = {
    method: 'post',
    url: 'http://localhost:18000/oauth2/access_token',
    headers: {
      Cookie: 'openedx-language-preference=en',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify({
      grant_type: 'client_credentials',
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
    }),
  };

  const data = await axios(config)
    .then(async (response) => {
      return response.data;
    })
    .catch(async (error) => {
      console.log(error);
    });

  return data;
}
