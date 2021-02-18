import FetchHttps from './http.js';
const http = new FetchHttps()

/**
 * 网站初始化Token
 * @param {*} param {webSecond: 时间戳}
 */
export const flowAdd = (param) => {
    return http.post(`/flowTemp/add`, param);
}

export const flowList = (param) => {
    return http.get(`/flowTemp/list`, param);
}
