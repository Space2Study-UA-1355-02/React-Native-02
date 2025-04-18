import { URLs } from '../constants/request'
import { axiosClient } from '../plugins/axiosClient'

export const AuthService = {
  signup: (userData) => {
    return axiosClient.post(URLs.auth.signUp, userData)
  },
  login: (userData) => {
    return axiosClient.post(URLs.auth.login, userData)
  },
  logout: () => {
    return axiosClient.post(URLs.auth.logout)
  }
}
