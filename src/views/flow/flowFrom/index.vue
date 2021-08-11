<template>
	<div id="flow-from" class="flow-from">
		<!-- flowFrom -->
		<el-row>
			<el-col :span="6" class="el-col-left">
				<div class="grid-content left">
					<el-collapse v-model="activeCollapse">
						<el-collapse-item
							:title="item.title"
							:name="item.key"
							v-for="(item, index) in fromControls"
							:key="index"
						>
							<draggable
								class="list-group"
								:list="item.children"
								:group="{
									name: item.copyName,
									pull: 'clone',
									put: false,
									sort: false,
								}"
								:sort="false"
								:clone="cloneDog"
								@change="log"
							>
								<div
									class="item"
									v-for="(children, index) in item.children"
									:key="index"
								>
									<span class="icon iconfont" v-html="children.icon">
										{{ children.icon }}
									</span>
									<span>
										{{ children.label }}
									</span>
								</div>
							</draggable>
						</el-collapse-item>
					</el-collapse>
				</div>
			</el-col>
			<el-col :span="12" class="el-col-middle">
				<div class="grid-content middle">
					<div id="middle-title" class="middle-title">
						<div class="anticon anticon-delete">
							<el-tooltip content="清空" placement="top">
								<span class="icon iconfont" @click="onDelete">&#xe624;</span>
							</el-tooltip>
						</div>
						<div class="anticon anticon-chrome">
							<el-tooltip content="预览" placement="top">
								<span class="icon iconfont" @click="onChrome">&#xe626;</span>
							</el-tooltip>
						</div>
						<div class="anticon anticon-save">
							<el-tooltip content="保存" placement="top">
								<span class="icon iconfont" @click="onSave">&#xe625;</span>
							</el-tooltip>
						</div>
					</div>

					<el-form ref="form" label-width="80px">
						<el-row
							class="grid-row"
							:class="{
								action: selectType == 1,
							}"
						>
							<el-col
								v-for="(item, i) in datas"
								:span="item.span"
								:key="i"
								class="grid-col"
							>
								<div style="height: 100%" @click.stop="colClick($event, datas)">
									<draggable
										class="list-group"
										:list="item.children"
										group="fromItem"
										@change="log"
										@remove="fromRemove(item.key)"
										@add="fromAdd(item.key)"
									>
										<div
											v-for="(list, j) in item.children"
											:key="j"
											@click.stop="formItemClick($event, list)"
											class="item-group"
											:id="list.key"
											:class="{
												action:
													selectItem != null &&
													selectItem.key == list.key,
											}"
											:style="{
												height:
													list.key.indexOf('text_') != -1
														? `calc(100% / ${item.children.length} - 10px)`
														: 'auto',
											}"
										>
											<!-- :style="{
                                                    height:
                                                        list.key.indexOf('text_') != -1
                                                            ? `calc(100% / ${item.children.length} - 10px)`
                                                            : 'auto',
                                                }" -->
											<form-item :record="list"></form-item>

											<div class="item-delete">
												<i
													class="el-icon-delete"
													@click="itemDelete(i, j)"
												></i>
											</div>
										</div>
									</draggable>
								</div>
							</el-col>
							<!-- <div class="row-delete">
                                    <i class="el-icon-delete" @click="rowDelete(i)"></i>
                                </div> -->
						</el-row>
					</el-form>
				</div>
			</el-col>
			<el-col :span="6" class="el-col-right">
				<div class="grid-content right">
					<form-properties
						:type="selectType"
						:item="selectItem"
						:data="datas"
					></form-properties>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import { fromControls } from '../../../config/config';
import FormItem from '../../../components/From/FormItem';
import FormProperties from '../../../components/From/FormProperties';

import draggable from 'vuedraggable';

export default {
	components: {
		draggable,
		FormItem,
		FormProperties,
	},
	data() {
		return {
			fromControls: fromControls,
			activeCollapse: [1, 2], // 右侧折叠面板默认打开组
			datas: [], // 表单组
			selectType: 0, // 选择的类型 1,栅格布局，2 表单组件，其他则无选中
			selectItem: null, // 选择item
		};
	},
	methods: {
		_initFrom() {
			const self = this;
			// 打开 创建Web Sql
			var db = openDatabase('fromdb', '1.0', 'Test DB', 1024 * 1024 * 1024);
			db.transaction(function(tx) {
				//查询表单数据
				var IsDropQLGXRW = 'select text from FORMS where id=1';
				tx.executeSql(
					IsDropQLGXRW,
					[],
					function(tx, results) {
						// console.log(tx, results)
						// 判断是否查询成功
						if (results.rows.length > 0) {
							var text = results.rows.item(0).text;
							if (text != '' && text != null && JSON.parse(text)) {
								self.datas = JSON.parse(text);
							}
						}
					},
					null
				);
			});
		},

		/**
		 * 点击本层防止出发父层
		 */
		_stopPropagation(e) {
			e = e || window.event;
			if (e.stopPropagation) {
				//W3C阻止冒泡方法
				e.stopPropagation();
			} else {
				e.cancelBubble = true; //IE阻止冒泡方法
			}
		},

		log: function() {
			// console.log(evt)
			// window.console.log(evt);
		},

		fromRemove(rowId) {
			this.colHeight(rowId);
		},

		fromAdd(rowId) {
			this.colHeight(rowId);
		},

		/**
		 * 通过选择的row的获取高重新计算出col的高
		 */
		colHeight(key) {
			console.log(key);
			// let row = document.getElementById(key);
			// for (let i = 0; i < row.children.length; i++) {
			//     const children = row.children[i];
			//     children.style.height = "auto"
			// }

			// let datas = JSON.parse(JSON.stringify(this.datas))
			// // console.log(row)
			// let offsetHeight = row.offsetHeight;
			// let index = datas.findIndex((data) => {
			//     return data.key == row.id;
			// })
			// if (Number(offsetHeight) < 64) {
			//     offsetHeight = 64;
			// }
			// datas[index]["height"] = offsetHeight;
			// this.datas = datas
		},

		cloneDog(item) {
			// 深拷贝item
			let newItem = JSON.parse(JSON.stringify(item));
			let time = new Date().getTime();
			// 给item添加上唯一值(时间戳)
			newItem['key'] = `${item.type}_${time}`;
			return newItem;
		},

		/**
		 * 点击相应的栅格布局
		 */
		colClick(e, item) {
			console.log('------');
			this._stopPropagation(e);
			this.selectType = 1;
			this.selectItem = item;
		},

		/**
		 * 点击相应的表单组件
		 */
		formItemClick(e, item) {
			this._stopPropagation(e);
			this.selectType = 2;
			// document.getElementById("grid-row").className = "grid-row"
			this.selectItem = item;
		},

		/**
		 * 清空数据
		 */
		onDelete() {
			// console.log("清空数据")
			this.datas = [];
		},

		/**
		 * 预览表单
		 */
		onChrome() {
			// console.log("弹框预览")
		},

		/**
		 * 缓存表单
		 */
		onSave() {
			// console.log("保存",)
			// 打开 创建Web Sql
			var db = openDatabase('fromdb', '1.0', 'Test DB', 1024 * 1024 * 1024);
			// let time = new Date().getTime()
			let data = JSON.stringify(this.datas);
			db.transaction(function(tx) {
				//删除历史表单表
				tx.executeSql('DROP TABLE IF EXISTS FORMS');
				//创建新的表单表（id 唯一值用于缓存的key, text 表单数据）
				tx.executeSql('CREATE TABLE IF NOT EXISTS FORMS (id unique, text)');
				//给表格赋值
				tx.executeSql(`INSERT INTO FORMS (id, text) VALUES (1, '` + data + `')`);
			});
		},

		itemDelete(i, j) {
			// console.log(i, j, k)
			let datas = JSON.parse(JSON.stringify(this.datas));
			let list = datas[i].children;
			list.splice(j, 1);
			datas[i].children = list;

			this.datas = datas;
			// const self = this;
			// setTimeout(function () {
			//     self.colHeight(datas[i].key)
			// }, 100)
		},

		rowDelete(i) {
			let datas = JSON.parse(JSON.stringify(this.datas));
			let list = datas.splice(i, 1);
			this.datas = list;
		},
	},
	mounted() {
		console.log(this.$router);
		let time = new Date().getTime();
		// 给item添加上唯一值(时间戳)
		this.datas.push({
			span: 24,
			children: [],
			key: `col_${time}`,
		});
		this._initFrom();
	},
};
</script>
<style lang="less">
@import './index.less';
</style>

