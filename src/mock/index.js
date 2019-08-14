import Mock from 'mockjs'
import loginAPI from './login'

// 打开
const openMock = true

// 拦截 Ajax 请求，返回模拟的响应数据。
// http://mockjs.com/0.1/#
// Mock.mock( rurl, rtype, function(options) )
// 记录用于生成响应数据的函数。当拦截到匹配 rurl 和 rtype 的 Ajax 请求时，函数 function(options) 将被执行，并把执行结果作为响应数据返回。
if (openMock) {
  Mock.mock(/\/login\/login/, 'post', loginAPI.loginbyUser)
  Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
  Mock.mock(/\/user\/info/, 'get', loginAPI.info)
}

export default Mock
