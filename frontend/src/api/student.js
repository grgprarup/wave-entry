import SERVER_URL from './serverUrl'
import { getAuthorization } from './auth'

const ENDPOINT = '/student'
const PATH = {
  root: ENDPOINT,
}

export const getStudents = () => {
  return fetch(`${SERVER_URL}${PATH.root}`, {
    headers: {
      ...getAuthorization(),
    },
  })
}

export const getStudent = (id) => {
  return fetch(`${SERVER_URL}${PATH.root}/${id}`, {
    headers: {
      ...getAuthorization(),
    },
  })
}

export const registerStudent = (data) => {
  return fetch(`${SERVER_URL}${PATH.root}`, {
    method: 'POST',
    headers: {
      ...getAuthorization(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export const updateStudent = (id, data) => {
  return fetch(`${SERVER_URL}${PATH.root}/${id}`, {
    method: 'PUT',
    headers: {
      ...getAuthorization(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export const deleteStudent = (id) => {
  return fetch(`${SERVER_URL}${PATH.root}/${id}`, {
    method: 'DELETE',
    headers: {
      ...getAuthorization(),
    },
  })
}
