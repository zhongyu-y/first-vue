import FetchHttps from './http.js';
const http = new FetchHttps()

/**
 * 网站初始化Token
 * @param {*} param {webSecond: 时间戳}
 */
export const flowAdd = (params) => {
    return http.post(`/flowTemp/add`, params);
}

export const flowList = (params) => {
    return http.get(`/flowTemp/list`, params);
}

export const flowInfo = (params) => {
    return http.get(`/flowTemp/selectOne`, params);
}
