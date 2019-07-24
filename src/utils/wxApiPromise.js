import toPromise from './toPromise'

const toPromiseWx = toPromise(wx)

const getImageInfo = toPromiseWx('getImageInfo')
const getUserInfo = toPromiseWx('getUserInfo')
const getSetting = toPromiseWx('getSetting')
const authorize = toPromiseWx('authorize')

export default {
  getImageInfo,
  getUserInfo,
  getSetting,
  authorize,
}