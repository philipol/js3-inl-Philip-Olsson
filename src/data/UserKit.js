const ROOT_URL = 'https://frebi.willandskill.eu/'
const API_URL = `${ROOT_URL}api/v1/`
const AUTH_URL = `${ROOT_URL}auth/`
const LOGIN_URL = `${ROOT_URL}api-token-auth/`
export default class {
  async register(firstName, lastName, email, password, organisationName, organisationKind) {
    const url = `${AUTH_URL}users/`
    const payload = { firstName, lastName, email, password, organisationName, organisationKind }
    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload)
    })
  }

}