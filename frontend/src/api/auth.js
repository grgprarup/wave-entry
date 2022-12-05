export const getAuthorization = () => {
  const token = localStorage.getItem('token')
  const authorization = {
    Authorization: `Bearer ${token}`,
  }
  return authorization
}
