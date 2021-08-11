<template>
	<div id="z-flow-detail" class="z-flow-detail">
		<el-form
			v-if="type == 'node' && isNodeShow"
			:model="node"
			ref="dataForm"
			size="mini"
			label-position="top"
		>
			<el-form-item label="GUID:">
				<el-input disabled v-model="node.id"></el-input>
			</el-form-item>
			<el-form-item label="名称:">
				<el-input v-model="node.label"></el-input>
			</el-form-item>
			<el-form-item label="备注:">
				<el-input
					v-model="node.remark"
					type="textarea"
					:autosize="{ minRows: 2, maxRows: 4 }"
				></el-input>
			</el-form-item>
			<el-form-item label="对应表单:">
				<template v-for="(ffdItem, i) in flowFromData">
					<div :key="i" class="flow-from">
						<div class="flow-from-label"></div>
						<el-checkbox-group
							v-model="node.checkedKeys"
							@change="handleCheckedCitiesChange"
						>
							<el-checkbox
								v-for="children in ffdItem.children"
								:label="children.key"
								:key="children.key"
								:disabled="
									children.disabled == true &&
									node.checkedKeys.indexOf(children.key) == -1
										? true
										: false
								"
								@change="hadleCheckboxChange(ffdItem, children.key, $event)"
							>
								{{ children.label != null ? children.label : '全选' }}
							</el-checkbox>
						</el-checkbox-group>
					</div>
				</template>
				<!-- <el-checkbox
                    :indeterminate="isIndeterminate"
                    v-model="checkAll"
                    @change="handleCheckAllChange"
                    >全选</el-checkbox
                >
                <div style="margin: 15px 0"></div>
                <el-checkbox-group
                    v-model="checkedCities"
                    @change="handleCheckedCitiesChange"
                >
                    <el-checkbox v-for="city in cities" :label="city" :key="city">{{
                        city
                    }}</el-checkbox>
                </el-checkbox-group> -->
				<!-- <el-tree
                    v-if="isNodeShow"
                    @check="currentCheck"
                    :data="flowFromData"
                    node-key="key"
                    :default-expanded-keys="node.checkedKeys"
                    :default-checked-keys="node.checkedKeys"
                    show-checkbox
                    :render-after-expand="false"
                >
                </el-tree> -->
			</el-form-item>
		</el-form>

		<el-form
			v-else-if="type == 'edge'"
			:model="edge"
			ref="dataForm"
			size="mini"
			label-position="top"
		>
			<el-form-item label="GUID:">
				<el-input disabled v-model="edge.id"></el-input>
			</el-form-item>
			<el-form-item label="源活动:">
				<el-input disabled v-model="edge.from"></el-input>
			</el-form-item>
			<el-form-item label="目标活动:">
				<el-input disabled v-model="edge.to"></el-input>
			</el-form-item>
			<el-form-item label="名称:">
				<el-input v-model="edge.label"></el-input>
			</el-form-item>
			<el-form-item label="备注:">
				<el-input
					v-model="edge.remark"
					type="textarea"
					:autosize="{ minRows: 2, maxRows: 4 }"
				></el-input>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	props: {
		flowFromData: {
			type: Array,
			required: true,
			default: function() {
				return [];
			},
		},
	},
	data() {
		return {
			node: {},
			edge: {},
			type: '',
			isUpdate: false,
			isNodeShow: false,
		};
	},
	watch: {
		edge: {
			handler() {
				if (this.isUpdate) {
					this.$emit('line-save', this.edge);
				}
			},
			deep: true,
		},
	},
	methods: {
		init(type, data, selData) {
			this.type = type;
			this.isUpdate = false;
			if (type === 'node') {
				data.nodeList.filter(node => {
					if (node.id === selData) {
						this.node = node;
					}
				});
				this.isNodeShow = false;
				const self = this;
				setTimeout(() => {
					self.isNodeShow = true;
				}, 1);
				console.log(this.flowFromData);
			} else if (type === 'edge') {
				data.edgeList.filter(item => {
					if (item.from === selData.sourceId && item.to === selData.targetId) {
						this.edge = item;
					}
				});
				this.$nextTick(function() {
					this.isUpdate = true;
				});
			}
		},

		handleCheckedCitiesChange(value) {
			console.log(value);

			// let checkedKeys = data.checkedKeys;
			// let flowFromData = this.flowFromData;
			// let ffDataItem = flowFromData.find(item => {
			//     return item.key == clickData.key
			// });
			// if (ffDataItem) {
			//     ffDataItem["disabled"] = true;
			//     for (var i = 0; i < ffDataItem.children.length; i++) {
			//         let item = ffDataItem.children[i];
			//         item["disabled"] = function (data, node) {
			//             console.log(data, node)
			//         };
			//     }
			// }
			// console.log("clickData: ", clickData, flowFromData)
			// this.node.checkedKeys = checkedKeys;
		},

		hadleCheckboxChange(ffdItem, key, isChecked) {
			let data = ffdItem.children.find(item => {
				return item.key == key;
			});
			if (data) {
				// console.log(data, ffdItem, key, isChecked)
				data['disabled'] = isChecked;
				// console.log(data)
				// ffdItem.children = data;

				// let flowFromData = this.flowFromData;
				// let index = flowFromData.find(item => {
				//     return item.key == ffdItem.key
				// });
				// flowFromData[index].children = ffdItem;
			}
		},
	},
};
</script>
<style lang="less">
@import './index.less';
</style>
