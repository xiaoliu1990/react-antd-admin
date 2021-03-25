
import { hashHistory} from 'react-router-dom';

/*
必须要引入jssdk 才可以实现，webview代码也有要求
 */
const wxNavigator = {};
/* 根据是否微信环境，判断跳转方式。用于跳转自己模块
 * moduleName  必传 路由名字
 * title 必传，用于小程序显示title
 * param 非必填，用于页面间传值跳转
   页面引入 import wxNavigator from '../comm/miniprogram';
   调用 wxNavigator.navigateTo('search','搜索'); //自有业务
 *
 */
wxNavigator.navigateTo = function (moduleName,title, param) {
    let baseUrl ='';
    let host = process.env.API_URL;//注意此处的配置路径 可以根据实际pages.config.js 进行调整
    if (param) {
        var paramStr = '';
        for (var key in param) {
            if (paramStr != '') {
                paramStr = paramStr + '&' + key + '=' + param[key];
            }
            else {
                paramStr = '?' + key + '=' + param[key];
            }
        }
    }
    wxNavigator.isMiniProgram((res) => {
        if (res) {
            //改成url 小程序第三方的判断要改多1个param的判断
            baseUrl = '/pages/webview/webview?url='+host  + moduleName + '&title=' + title;
            if (param) {
                baseUrl = baseUrl + '&param=' + encodeURIComponent(paramStr);
            }
            wx.miniProgram.navigateTo({ url: baseUrl });
        } else {
            hashHistory.push({ pathname: moduleName, query: param});
        }
    })
}

/* 。用于跳转第三方外链
 * url  必传
 * title 必传，用于小程序显示title
   页面引入 import wxNavigator from '../comm/miniprogram';
   调用 wxNavigator.navigateToUrl(url,title) //外链 第三方
 *
 */
wxNavigator.navigateToUrl = function (url, title) {
    let baseUrl = '../webview/webview?url=' + encodeURIComponent(url) + '&title=' + title;
    wxNavigator.isMiniProgram((res) => {
        //判断是否是小程序页面的回调函数
        if (res) {//小程序页面
            wx.miniProgram.navigateTo({ url: baseUrl });
        } else {
            window.location.href = url;
        }
    })
}
//是否为小程序环境
wxNavigator.isMiniProgram = function (callback) {
    //是否在微信环境
    if (!wxNavigator.isWeixin()) {
        callback(false);
    } else {
        //微信API获取当前运行环境
        wx.miniProgram.getEnv((res) => {
            if (res.miniprogram) {//小程序环境
                callback(true);
            } else {
                callback(false);
            }
        })
    }
}

wxNavigator.isWeixin = function () {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    }
    return false;
}

/* 小程序webview/webview onload 方法
*
   onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title ? options.title : ''
    })
    var url = options.url;
    if (!url) {
      //跳转自己开发的模块
      url = app.globalData.h5Url + options.moduleName;
      //处理页面传参问题
      var param = options.param;
      if (param) {
        url = url + decodeURIComponent(param);
      } else {
        console.log('options--', options)
      }
    } else {
      //直接跳转第三方的url
      var param = options.param;
      if (param) {
        url = decodeURIComponent(url) + decodeURIComponent(param);
      } else {
        url = decodeURIComponent(options.url);
      }
    }
    this.setData({
      webUrl: url
    })
  }
*
* */


export default wxNavigator;