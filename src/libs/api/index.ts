/*
 *`ALL NETWORK API REQUESTS AND INTERCEPTOR BUILDER
 * @method POST - http verb for request
 * @method GET - http verb for get
 * @method DELETE - http verb for delete
 * @method PUT - http verb for update
 * @GET - send a get request to the server
 * @POST - send a post request to the server
 * @DELETE - send a delete request to the server
 * @PUT - send a put request to the server
 */

import ENV_VARIABLES, { ENV_VARIABLES_TYPES } from '../../config';

class API {
  private BASE_URL: string;
  private API_KEY: string;

  constructor(ENV: ENV_VARIABLES_TYPES) {
    this.BASE_URL = ENV.DATABASE_URI;
    this.API_KEY = ENV.API_KEY;
  }

  post(request: string): Promise<any> {
    return fetch(`${this.BASE_URL}/games`, {
      method: 'POST',
      headers: { Accept: 'application/json', 'user-key': this.API_KEY },
      body: request
    });
  }
}

export default new API(ENV_VARIABLES);
