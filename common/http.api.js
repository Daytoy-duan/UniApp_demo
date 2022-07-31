const http = uni.$u.http
// 获取轮播数据API
export const getLunbo = params => http.get('/advertisingspace/advertising?space=1,2,3');