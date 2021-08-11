<template>
	<div id="z-form-properties" class="z-form-properties">
		<div class="layui-row" v-if="type == 1">
			<!-- <div class="row-label-label">数据字段:</div>
            <el-input v-model="item.label" class="row-label-input"></el-input> -->
			<!-- <div style="margin-top: 10px"></div> -->
			<div class="row-label-label">数据字段:</div>
			<div class="layui-item" v-for="(column, index) in item" :key="index">
				<el-input-number
					v-model="column.span"
					controls-position="right"
					:min="1"
					:max="24"
				></el-input-number>
				<div class="icon-delete" @click="deleteCol">
					<i class="el-icon-delete"></i>
				</div>
			</div>
			<div class="layui-button">
				<span @click="addCol">添加</span>
			</div>
		</div>
		<div class="form-row" v-else-if="type == 2 && item != null">
			<el-form>
				<div class="form-row-title">基础属性</div>
				<el-divider></el-divider>
				<el-form-item label="数据字段:" label-position="top">
					<el-input v-model="item.key" readonly></el-input>
				</el-form-item>
				<el-form-item label="标签:" label-position="top">
					<el-input v-model="item.label"></el-input>
				</el-form-item>
				<el-form-item label="占位内容:" label-position="top">
					<el-input v-model="item.options.placeholder"></el-input>
				</el-form-item>
				<el-form-item label="默认值:" label-position="top">
					<el-input v-model="item.options.defaultValue"></el-input>
				</el-form-item>
				<el-form-item label="操作属性:" label-position="top">
					<el-checkbox v-model="item.options.disabled">禁用</el-checkbox>
					<el-checkbox v-model="item.options.hidden">影藏</el-checkbox>
					<el-checkbox v-model="item.options.clearable">可清空</el-checkbox>
				</el-form-item>
				<el-divider></el-divider>
				<div class="form-row-title">表单属性</div>
				<el-divider></el-divider>
				<el-form-item label="" label-position="top">
					<el-checkbox v-model="item.rules[0].required">必填</el-checkbox>
				</el-form-item>
				<el-form-item label="" label-position="top">
					<el-input v-model="item.rules[0].message"></el-input>
				</el-form-item>
				<template v-for="(rule, index) in item.rules">
					<el-form-item label="" label-position="top" v-if="index > 0" :key="index">
						<el-input
							v-model="rule.pattern"
							placeholder="提示信息"
							style="width: 80%"
						></el-input>
						<div class="item-rules">
							<el-input
								v-model="rule.message"
								placeholder="正则表达式pattern"
								style="width: 80%"
							></el-input>
							<div class="icon-delete" @click="delRules(index)">
								<i class="el-icon-delete"></i>
							</div>
						</div>
					</el-form-item>
				</template>
				<el-form-item class="add-rules" label="" label-position="top">
					<span @click="addRules">添加校验</span>
				</el-form-item>
				<el-divider></el-divider>
				<div class="form-row-title">服务属性</div>
				<el-divider></el-divider>
				<el-form-item label="标签" label-position="top">
					<!-- <el-select v-model="value" placeholder="请选择">
                        <el-option
                            v-for="item in cities"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                            <span style="float: left">{{ item.label }}</span>
                            <span style="float: right; color: #8492a6; font-size: 13px">{{
                                item.value
                            }}</span>
                        </el-option>
                    </el-select> -->
				</el-form-item>
			</el-form>

			<!-- <el-form>
                <el-form-item label="标签" label-width="auto">
                    <el-input></el-input>
                </el-form-item>
            </el-form>
            <el-divider></el-divider>
            <div class="form-row-title">服务属性</div>
            <el-divider></el-divider>
            <el-form>
                <el-form-item label="标签" label-width="auto">
                    <el-input></el-input>
                </el-form-item>
            </el-form> -->
		</div>
	</div>
</template>

<script>
export default {
	props: {
		type: {
			type: Number,
			default: 0,
		},
		item: {
			type: Object || Array,
			default: () => {
				return [];
			},
		},
		data: {
			type: Array,
			default: function() {
				return [];
			},
		},
	},
	data() {
		return {
			num: 1,
		};
	},
	methods: {
		/**
		 * 添加表单正则校验
		 */
		addRules() {
			if (this.item) {
				this.item.rules.push({
					pattern: '',
					message: '',
				});
			}
		},

		/**
		 * 删除表单正则校验
		 */
		delRules(index) {
			if (this.item) {
				this.item.rules.splice(index, 1);
			}
		},

		/**
		 * 添加栅格，且这个栅格总和不大于24
		 */
		addCol() {
			// 唯一值(时间戳)
			let time = new Date().getTime();
			this.item.push({
				span: 24,
				children: [],
				key: `col_${time}`,
			});
		},

		deleteCol(index) {
			if (this.item) {
				this.item.splice(index, 1);
			}
		},
	},
};
</script>

<style lang="less">
@import './index.less';
</style>
