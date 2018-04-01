import request  from '../utils/request'
import config from '../utils/config'
const { api } = config
const { menus } = api

export function query (params) {
  return request({
    url: menus,
    method: 'get',
    data: params,
  })
}
