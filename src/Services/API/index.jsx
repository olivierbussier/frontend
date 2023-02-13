export class API {
  baseUrl = null;
  headers = null;

  constructor(baseUrl = "http://localhost:3001/api/v1/") {
    this.baseUrl = baseUrl;
    this.headers = new Headers();
    this.headers.append("content-type", "application/json");
    this.headers.append("accept", "application/json");
  }

  setBearer = (bearer) => {
    this.headers.set("Authorization", `Bearer ${bearer}`);
  };

  /**
   *
   * @param {*} url
   * @returns {Promise}
   */
  fetchAPI = async (uri, body = null, method) => {
    // res = await fetch("http://localhost:3001/api/v1/user/login", { method: 'POST', headers: headers, body: body })
    return fetch(this.baseUrl + uri, {
      method: method,
      headers: this.headers,
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      // .catch((error) => error);
  };

  /**
   * API /user/login
   *
   * @param {Number} userId
   * @returns {Promise}
   */
  login = (email, password) =>
    this.fetchAPI(`user/login`, { email: email, password: password }, "POST");

  profile = () =>
    this.fetchAPI(`user/profile`, {}, "POST");

  updateProfile = (firstName, lastName) =>
    this.fetchAPI(`user/profile`, { firstName: firstName, lastName: lastName }, "PUT");

  testConnexion = (bearer = null, onSuccess, onError) => {

    if (bearer)
      this.setBearer(bearer);

    this.profile()
      .then((response) => {
          onSuccess(response)
        // Navigate to required page : do nothing
      })
      .catch((error) => {
        onError(error)
      });

  }
}
