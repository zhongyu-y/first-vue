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

<script src="./flow.js"></script>

<style lang="less" src="./flow.less"></style>
