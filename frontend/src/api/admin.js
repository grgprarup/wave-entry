import SERVER_URL from './serverUrl'
import { getAuthorization } from './auth'

const ENDPOINT = '/admin'
const PATH = {
  root: ENDPOINT,
  login: `${ENDPOINT}/login`,
}

export const login = (username, password) => {
  return fetch(`${SERVER_URL}${PATH.login}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
}

export const updateProfile = (username, password) => {
  return fetch(`${SERVER_URL}${PATH.root}`, {
    method: 'PUT',
    headers: {
      ...getAuthorization(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
}
