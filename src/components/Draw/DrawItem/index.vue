<!--
 * @Description: 
 * @Autor: Zhongyu
 * @Date: 2021-01-22 15:09:19
 * @LastEditors: Zhongyu
 * @LastEditTime: 2021-08-11 10:10:57
-->
<template>
	<div
		id="z-flow-item"
		class="z-flow-item"
		ref="node"
		:style="flowNodeContainer"
		@mouseenter="showDelete"
		@mouseleave="hideDelete"
		@mouseup="changeNodeSite"
		@click.stop="editNode"
	>
		<div class="node-con">
			<i :class="iconClass" class="type-icon"></i>
			<span>{{ node.label }}</span>
		</div>
		<div class="node-del" v-show="mouseEnter" @click.stop="deleteNode">
			<i class="el-icon-circle-close"></i>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		node: Object,
		isconnect: Boolean,
	},
	data() {
		return {
			mouseEnter: false,
		};
	},
	computed: {
		// 节点容器样式
		flowNodeContainer: {
			get() {
				return {
					top: this.node.top,
					left: this.node.left,
					boxShadow: this.mouseEnter ? '#66a6e0 0px 0px 12px 0px' : '',
				};
			},
		},
	},
	methods: {
		iconClass() {
			if (this.node.type == 1) {
				return 'el-icon-help';
			} else if (this.node.type == 2) {
				return 'el-icon-s-help';
			} else if (this.node.type == 3) {
				return 'el-icon-user';
			} else if (this.node.type == 4) {
				return 'el-icon-s-tools';
			} else if (this.node.type == 5) {
				return 'el-icon-paperclip';
			} else if (this.node.type == 6) {
				return 'el-icon-copy-document';
			}
		},
		// 删除节点
		deleteNode() {
			this.$emit('delete-node', this.node.id);
		},
		// 编辑节点
		editNode() {
			this.$emit('edit-node', this.node.id);
		},
		// 鼠标进入
		showDelete() {
			this.mouseEnter = true;
		},
		// 鼠标离开
		hideDelete() {
			this.mouseEnter = false;
		},
		// 鼠标移动后抬起
		changeNodeSite() {
			this.$emit('changeNodeSite', {
				nodeId: this.node.id,
				left: this.$refs.node.style.left,
				top: this.$refs.node.style.top,
			});
		},
	},
};
</script>
<style lang="less">
@import './index.less';
</style>
