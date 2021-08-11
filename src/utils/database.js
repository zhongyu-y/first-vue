/*
 * @Description:
 * @Autor: Zhongyu
 * @Date: 2021-08-10 09:52:13
 * @LastEditors: Zhongyu
 * @LastEditTime: 2021-08-10 10:12:50
 */
let db = null;

const openDb = () => {
	//创建一个流程数据库
	db = openDatabase('flow', '1.0', 'Test DB', 1024 * 1024 * 1024);
};

const saveFlowInfo = (uid = '1', data) => {
	// 存储流程基本信息
	if (db) {
		db.transaction(function(tx) {
			//删除历史表单表
			tx.executeSql('DROP TABLE IF EXISTS FORMS');
			//创建新的表单表（id 唯一值用于缓存的key, text 表单数据）
			tx.executeSql('CREATE TABLE IF NOT EXISTS FORMS (id unique, text)');
			//给表格赋值
			tx.executeSql(`INSERT INTO FORMS (id, text) VALUES ('${uid}', '` + data + `')`);
			return {
				code: 200,
				data: {
					uid,
				},
				message: '请链接数据库',
			};
		});
	} else {
		return {
			code: 200,
			data: null,
			message: '请链接数据库',
		};
	}
};

export default {
    openDb,
    saveFlowInfo
}