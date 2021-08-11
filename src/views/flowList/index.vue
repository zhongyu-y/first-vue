<!--
 * @Description: 
 * @Autor: Zhongyu
 * @Date: 2021-02-06 10:54:26
 * @LastEditors: Zhongyu
 * @LastEditTime: 2021-08-10 09:49:44
-->
<template>
	<div id="FlowList" class="flow-list">
		<div class="handle">
			<el-button class="add-flow" icon="el-icon-plus" @click="addFlow">添加流程</el-button>
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<el-form-item label="流程名称">
					<el-input v-model="formInline.name" placeholder="流程名称"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">查询</el-button>
				</el-form-item>
			</el-form>
		</div>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="id" label="流程编码"></el-table-column>
			<el-table-column prop="name" label="流程名称"></el-table-column>
			<el-table-column fixed="right" label="操作">
				<template slot-scope="scope">
					<span class="table-edit" @click="handleClick(scope.row)">
						<i class="el-icon-edit"></i>
						编辑
					</span>
					<span class="table-search" @click="handleClick(scope.row)">
						<i class="el-icon-search"></i>
						查看
					</span>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
import { flowList } from '../../network/api';

export default {
	data() {
		return {
			tableData: [],
			formInline: {
				name: '',
			},
		};
	},
	mounted() {
		flowList().then(data => {
			console.log(data);
			this.tableData = data;
		});
	},
	methods: {
		onSubmit() {},

		handleClick(row) {
			this.$router.push(`/create/flow/${row.id}`);
		},

		addFlow() {
			this.$router.push(`/flow`);
		},
	},
};
</script>
<style lang="less">
@import './index.less';
</style>
