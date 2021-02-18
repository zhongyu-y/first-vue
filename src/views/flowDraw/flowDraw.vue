<template>
    <div id="flow-draw" class="flow-draw">
        <!-- <div class="left"></div>
        <div class="middle"></div>
        <div class="right"></div> -->
        <el-row>
            <el-col :span="4" class="el-col-left">
                <div id="left" class="grid-content left">
                    <div class="flow-draw-menu">
                        <div
                            class="menu-item"
                            v-for="(item, index) in nodeList"
                            draggable="true"
                            @dragstart="drag(item)"
                            :key="index"
                        >
                            <i :class="item.icon"></i>
                            <div>{{ item.title }}</div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="15" class="el-col-middle">
                <button @click="saveData">保存</button>
                <div class="grid-content middle">
                    <div
                        id="flowContent"
                        ref="flowContent"
                        @drop="drop($event)"
                        @dragover="allowDrop($event)"
                        @dblclick="isConnect = false"
                    >
                        <z-flow-item
                            v-for="node in data.nodeList"
                            :key="node.id"
                            :node="node"
                            :id="node.id"
                            :isconnect="isConnect"
                            @delete-node="deleteNode"
                            @changeNodeSite="changeNodeSite"
                            @edit-node="editNode"
                        >
                        </z-flow-item>
                    </div>
                </div>
            </el-col>
            <el-col :span="5" class="el-col-right">
                <div class="grid-content right">
                    <z-flow-detail
                        ref="flowDrawForm"
                        @line-save="edgeLabelSave"
                        :flowFromData="flowFromData"
                    ></z-flow-detail>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script src="./flowDraw.js"></script>

<style lang="less" src="./flowDraw.less"></style>
