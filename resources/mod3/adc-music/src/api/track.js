import request from '@/services/axios'

/**
 * @param {*} query
 */
export function searchTrack (q, offset = 0) {
  return request({
    url: '/search',
    method: 'GET',
    params: {
      q,
      type: 'track',
      offset
    }
  })
}

/**
 * @param {*} id
 */
export function getTrackById (id) {
  return request({
    url: `/tracks/${id}`,
    method: 'GET'
  })
}
