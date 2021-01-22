<template>
    <div id="z-flow-detail" class="z-flow-detail">
        <el-form
            v-if="type == 'node'"
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

<script src="./flowDetail.js"></script>
<style lang="less" src="./flowDetail.less"></style>
