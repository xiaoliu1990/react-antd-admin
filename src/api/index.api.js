import http from '@/comm/https'
//接口api
export const apiPanel = data => {
  return http.post(
    'panel/ent/data',
    data
  )
}