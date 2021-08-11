/*
 * @Description: 
 * @Autor: Zhongyu
 * @Date: 2021-03-08 15:46:29
 * @LastEditors: Zhongyu
 * @LastEditTime: 2021-08-06 15:04:12
 */
import FetchHttps from './http.js';
const http = new FetchHttps()

/**
 * 网站初始化Token
 * @param {*} param {webSecond: 时间戳}
 */
export const flowAdd = (params) => {
    return http.post(`/mFlowInfo/add`, params);
}

export const flowList = (params) => {
    return http.get(`/flowTemp/list`, params);
}

export const flowInfo = (params) => {
    return http.get(`/flowTemp/selectOne`, params);
}
