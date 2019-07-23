import toPromise from './toPromise'

const toPromiseWx = toPromise(wx)

const getImageInfo = toPromiseWx('getImageInfo')

export default {
  getImageInfo
}