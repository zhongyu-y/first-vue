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

<script src="./flowItem.js"></script>
<style lang="less" src="./flowItem.less"></style>
