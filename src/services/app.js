import  request from '../utils/request'
import config from '../utils/config'


const {api} = config;

export function login(params) {
  return request({
    url: api.userLogin,
    method: 'post',
    data: params,
  })
}

export function logout(params) {
  return request({
    url: api.userLogout,
    method: 'get',
    data: params,
  })
}

export function query(params) {
  return request({
    url: api.user.replace('/:id', ''),
    method: 'get',
    data: params,
  })
}
