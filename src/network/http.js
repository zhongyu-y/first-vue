
import {
    url,
    // commonUrl
} from '../config/config'

// import {
//     session
// } from '../config/session'

// import fetch from "isomorphic-fetch";

// 返回 get 请求的加参数的 url 形式
const getUrl = (path, params) => {
    let ret = url + path;
    let paramstr = getParamsStr(params);
    return ret + paramstr;
};
// 解析json参数，转换成url模式
const getParamsStr = (params) => {
    let paramstr = '';
    let param = params || {};
    if (param) {
        let index = 0;
        for (let i in param) {
            if (index > 0) {
                paramstr += '&';
            }
            paramstr += i + '=' + encodeURI(param[i]);
            index += 1;
        }
    }
    if (paramstr.length > 0) {
        paramstr = "?" + paramstr;
    }
    return paramstr;
};

export default class FetchHttp {

    // 封装fetch请求
    async fetchData(url, context) {
        let myHeaders = {
            'Content-Type': 'application/json;charset=UTF-8',
        }
        console.log(url, context)
        // let loginType = this.loginTokenType()
        // if (loginToken === loginType.getLogin) {
        //     myHeaders = {
        //         'Content-Type': 'application/json;charset=UTF-8',
        //         'Authorization': session.getToken(),
        //         'LoginToken': session.getLoginToken(),
        //     };
        // }
        context.headers = myHeaders;
        return new Promise(function (resolve, reject) {
            fetch(url, context)
                .then(response => {
                    var status = response.status;
                    if (status >= 200 && status <= 204) {
                        // 请求成功
                        return response.text();
                    }
                    return null;
                })
                .then(body => {
                    if (body) {
                        body = JSON.parse(body);
                        if (body.code == 200) {
                            let data = body.data;
                            resolve(data)
                        } else {
                            if (body.msg) {
                                reject(body.msg);
                            } else {
                                reject("请稍后重试")
                            }
                        }
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    get(path, params, loginTokneType) {
        const context = {
            method: 'GET'
        };
        console.log(getUrl(path, params))
        return this.fetchData(getUrl(path, params), context, loginTokneType);
    }

    post(path, params, loginTokneType) {
        const context = {
            method: 'POST'
        };
        if (params != null) {
            context.body = JSON.stringify(params);
        }
        return this.fetchData(getUrl(path), context, loginTokneType);
    }
}