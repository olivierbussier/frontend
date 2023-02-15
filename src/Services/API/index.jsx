/**
 * class API:
 * This class is used to wrap the api access functions
 * This api is based on token authentication, is it important
 * to successfully login in order to get auth token. Then api user
 * must call setBearer with the token to complete api initialisation
 */
export class API {
  baseUrl = null;
  headers = null;

  /**
   * Called at class initialisation
   *
   * @param {string} baseUrl Possible to override default route
   */
  constructor(baseUrl = "http://localhost:3001/api/v1/") {
    this.baseUrl = baseUrl;
    this.headers = new Headers();
    this.headers.append("content-type", "application/json");
    this.headers.append("accept", "application/json");
  }

  /**
   * Bearer must be set before api acces, excluding login and signup
   *
   * @param {string} bearer Authentication token returned by login
   */
  setBearer = (bearer) => {
    this.headers.set("Authorization", `Bearer ${bearer}`);
  };

  /**
   * api acces method, use the route defined during class init
   *
   * @param {string} uri API endpoint
   * @param {object} body Data to be sent to the endpoint
   * @param {string} method Could be GET, POST, DELETE, PATCH
   * @returns {Promise}
   */
  fetchAPI = async (uri, body = null, method) => {
    // res = await fetch("http://localhost:3001/api/v1/user/login", { method: 'POST', headers: headers, body: body })
    return fetch(this.baseUrl + uri, {
      method: method,
      headers: this.headers,
      body: JSON.stringify(body),
    }).then((response) => response.json());
    // .catch((error) => error);
  };

  /**
   * API /user/login -> Login
   * If successfull, authentication token is in data
   *
   * @param {Number} userId
   * @returns {Promise}
   */
  login = (email, password) =>
    this.fetchAPI(`user/login`, { email: email, password: password }, "POST");

  /**
   * API /usr/profile -> get user profile
   * @returns
   */
  profile = () => this.fetchAPI(`user/profile`, {}, "POST");

  /**
   * API /user/profile -> update the user profile
   * Only firstName and latName could be updated
   *
   * @param {string} firstName
   * @param {string} lastName
   * @returns
   */
  updateProfile = (firstName, lastName) =>
    this.fetchAPI(
      `user/profile`,
      { firstName: firstName, lastName: lastName },
      "PUT"
    );

  /**
   * This api is used to check if the connexion is still active
   * As the api not implement some ping method, we use getprofile
   *
   * @param {string?} bearer Optionnal
   * @param {function} onSuccess callback if success
   * @param {function} onError callback if error
   */
  testConnexion = (bearer = null, onSuccess, onError) => {
    if (bearer) this.setBearer(bearer);

    this.profile()
      .then((response) => {
        onSuccess(response);
        // Navigate to required page : do nothing
      })
      .catch((error) => {
        onError(error);
      });
  };
}
