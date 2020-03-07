import request from '@/services/axios'

/**
 * @param {*} data
 */
export function login (code) {
  return request({
    url: '/callback',
    method: 'GET',
    params: {
      code
    }
  })
}
