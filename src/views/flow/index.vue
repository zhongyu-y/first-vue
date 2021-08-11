<!--
 * @Description: 
 * @Autor: Zhongyu
 * @Date: 2021-01-22 15:09:19
 * @LastEditors: Zhongyu
 * @LastEditTime: 2021-08-10 10:24:57
-->
<template>
	<div id="flow" class="flow">
		<el-tabs v-model="activeName">
			<el-tab-pane label="自定义表单" name="flowFrom">
				<flowFrom></flowFrom>
			</el-tab-pane>
			<el-tab-pane label="自定义流程" name="flowDraw">
				<flowDraw v-if="activeName == 'flowDraw'"></flowDraw>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>
<script>
import flowDraw from './flowDraw';
import flowFrom from './flowFrom';
import { flowInfo } from '../../network/api';
import {getUuid} from '../../utils/uuid';

export default {
	components: {
		flowDraw,
		flowFrom,
	},
	data() {
		return {
			activeName: 'flowFrom',
			// activeName: "flowDraw"
		};
	},
	mounted() {
		let self = this;
		let history = this.$router.history;
		if (history) {
			let current = history.current;
			if (current) {
				let params = current.params;
				if (params) {
					let id = params.id;
					console.log(id);
					flowInfo({ id: id }).then(data => {
						self.saveData(data.formData, data.flowData);
					});
				}
			}
		}
		console.log('getUuid', getUuid);
	},
	methods: {
		/**
		 * 缓存表单和流程图数据
		 */
		saveData(formData, flowData) {
			// 打开 创建Web Sql
			var db = openDatabase('fromdb', '1.0', 'Test DB', 1024 * 1024 * 1024);
			db.transaction(function(tx) {
				//删除历史表单表
				tx.executeSql('DROP TABLE IF EXISTS FORMS');
				//创建新的表单表（id 唯一值用于缓存的key, text 表单数据）
				tx.executeSql('CREATE TABLE IF NOT EXISTS FORMS (id unique, text)');
				//给表格赋值
				tx.executeSql(`INSERT INTO FORMS (id, text) VALUES (1, '` + formData + `')`);
				//给表格赋值
				tx.executeSql(`INSERT INTO FORMS (id, text) VALUES (2, '` + flowData + `')`);
			});
		},
	},
};
</script>

<style lang="less">
@import './index.less';
</style>
