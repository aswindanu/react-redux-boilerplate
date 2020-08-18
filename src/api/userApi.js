import axios from 'axios';

/**
 * @method axiosUser
 * @summary Call users function from endpoint.
 * @return {object} Return JSON dummy users.
 */
export default async function axiosUser() {
  const config = {
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users',
  };

  const data = await axios(config)
    .then(async (response) => {
      return response.data;
    })
    .catch(async (err) => {
      console.log(err);
    });

  return data;
}
