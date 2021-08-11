/*
 * @Description: 
 * @Autor: Zhongyu
 * @Date: 2021-08-10 10:16:05
 * @LastEditors: Zhongyu
 * @LastEditTime: 2021-08-10 10:24:44
 */
export function getUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        console.log(v.toString(16))
        return v.toString(16);
    });
}