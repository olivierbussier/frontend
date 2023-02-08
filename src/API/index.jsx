export class API {
  baseUrl = null;
  headers = null;

  constructor(baseUrl = "http://localhost:3001/api/v1/") {
    this.baseUrl = baseUrl;
    this.headers = new Headers();
    this.setDefaultHeaders()
  }

  setDefaultHeaders = () => {
    this.headers.append("content-type", "application/json");
    this.headers.append("accept", "application/json");
  };

  setBearer = (bearer) => {
    this.headers = new Headers();
    this.setDefaultHeaders()
    this.headers.append("Authorization", `Bearer ${bearer}`);
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
      .catch((error) => {
        console.log("error=", error);
      });
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
}
